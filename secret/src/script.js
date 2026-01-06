const zip = new JSZip();

let uploadedFile = null;

// Elementos del DOM
const uploadArea = document.getElementById('uploadArea');
const fileInput = document.getElementById('fileInput');
const fileInfo = document.getElementById('fileInfo');
const fileName = document.getElementById('fileName');
const processBtn = document.getElementById('processBtn');
const btnText = document.getElementById('btnText');
const logDiv = document.getElementById('log');

// Event listeners
uploadArea.addEventListener('click', () => fileInput.click());
fileInput.addEventListener('change', handleFileSelect);
processBtn.addEventListener('click', processZip);

// Drag and drop
uploadArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadArea.classList.add('drag-over');
});

uploadArea.addEventListener('dragleave', () => {
    uploadArea.classList.remove('drag-over');
});

uploadArea.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadArea.classList.remove('drag-over');
    const files = e.dataTransfer.files;
    if (files.length > 0 && files[0].name.endsWith('.zip')) {
        uploadedFile = files[0];
        showFileInfo();
    } else {
        addLog('Por favor selecciona un archivo ZIP válido', 'error');
    }
});

function handleFileSelect(e) {
    const file = e.target.files[0];
    if (file && file.name.endsWith('.zip')) {
        uploadedFile = file;
        showFileInfo();
    } else {
        addLog('Por favor selecciona un archivo ZIP válido', 'error');
    }
}

function showFileInfo() {
    fileName.textContent = `📄 ${uploadedFile.name}`;
    fileInfo.classList.add('show');
    processBtn.classList.add('show');
    logDiv.innerHTML = '';
    logDiv.classList.remove('show');
}

function addLog(message, type = 'info') {
    logDiv.classList.add('show');
    const logItem = document.createElement('div');
    logItem.className = `log-item ${type}`;
    logItem.textContent = `${new Date().toLocaleTimeString()} - ${message}`;
    logDiv.appendChild(logItem);
    logDiv.scrollTop = logDiv.scrollHeight;
}

async function processZip() {
    if (!uploadedFile) return;

    processBtn.disabled = true;
    btnText.innerHTML = '<span class="spinner"></span>Procesando...';
    logDiv.innerHTML = '';
    logDiv.classList.add('show');

    try {
        addLog('Cargando archivo ZIP...', 'info');
        const zip = await JSZip.loadAsync(uploadedFile);
        
        addLog('Buscando info.xml...', 'info');
        const infoXmlFile = zip.file('info.xml');
        
        if (!infoXmlFile) {
            throw new Error('No se encontró el archivo info.xml en el ZIP');
        }

        const infoXmlContent = await infoXmlFile.async('string');
        const parser = new DOMParser();
        const infoXmlDoc = parser.parseFromString(infoXmlContent, 'text/xml');

        // Buscar temas con is_mobile="false"
        const themes = infoXmlDoc.querySelectorAll('theme[is_mobile="false"]');
        addLog(`Encontrados ${themes.length} tema(s) no móviles`, 'success');

        if (themes.length === 0) {
            throw new Error('No se encontraron temas con is_mobile="false"');
        }

        // Cargar la imagen water-levels.png
        const waterLevelsResponse = await fetch('img/water-levels.png');
        const waterLevelsBlob = await waterLevelsResponse.blob();
        addLog('Imagen water-levels.png cargada', 'success');

        // Contenido del archivo drops.xml (del attachment)
        const dropsXmlContent = await fetch('drops.xml').then(r => r.text());

        // Procesar cada tema
        for (let i = 0; i < themes.length; i++) {
            const theme = themes[i];
            const themePath = theme.getAttribute('path');
            const themeName = theme.getAttribute('name');
            
            addLog(`Procesando tema: ${themeName}`, 'info');
            addLog(`Path: ${themePath}`, 'info');

            // Construir la ruta completa al theme.xml
            const themeXmlPath = themePath + 'theme.xml';
            
            // Buscar y modificar el theme.xml
            const themeXmlFile = zip.file(themeXmlPath);
            
            if (!themeXmlFile) {
                addLog(`⚠️ No se encontró ${themeXmlPath}`, 'error');
                continue;
            }

            let themeXmlContent = await themeXmlFile.async('string');
            
            // Agregar el include antes de </themes>
            if (themeXmlContent.includes('<include filename="fancy/drops.xml"/>')) {
                addLog(`El tema ${themeName} ya tiene el include de drops.xml`, 'info');
            } else {
                themeXmlContent = themeXmlContent.replace(
                    '</themes>',
                    '\t<include filename="fancy/drops.xml"/>\n</themes>'
                );
                zip.file(themeXmlPath, themeXmlContent);
                addLog(`✓ Modificado ${themeXmlPath}`, 'success');
            }

            // Crear carpeta fancy y agregar archivos
            const fancyPath = themePath + 'fancy/';
            
            // Agregar water-levels.png
            zip.file(fancyPath + 'water-levels.png', waterLevelsBlob);
            addLog(`✓ Agregado ${fancyPath}water-levels.png`, 'success');
            
            // Agregar drops.xml
            zip.file(fancyPath + 'drops.xml', dropsXmlContent);
            addLog(`✓ Agregado ${fancyPath}drops.xml`, 'success');
        }

        // Generar el nuevo ZIP
        addLog('Generando archivo ZIP modificado...', 'info');
        const newZipBlob = await zip.generateAsync({type: 'blob'});
        
        // Descargar el archivo
        const downloadLink = document.createElement('a');
        downloadLink.href = URL.createObjectURL(newZipBlob);
        downloadLink.download = uploadedFile.name.replace('.zip', '_modified.zip');
        downloadLink.click();
        
        addLog('✓ ¡Archivo descargado exitosamente!', 'success');
        btnText.textContent = '¡Completado! Procesar otro archivo';
        
    } catch (error) {
        addLog(`❌ Error: ${error.message}`, 'error');
        console.error(error);
        btnText.textContent = 'Procesar y Descargar';
    } finally {
        processBtn.disabled = false;
    }
}