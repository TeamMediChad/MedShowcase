async function loadLanguage(lang) {
    const response = await fetch(`/languages/${lang}.json`);
    const translations = await response.json();
    console.log(translations)

    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.dataset.i18n;

        if (translations[key]) {
            el.textContent = translations[key];
        }
    });

    localStorage.setItem("language", lang);
}

const userLang = navigator.language;
console.log(userLang);

if (userLang.startsWith("en")) {
    loadLanguage("en");
}
else if (userLang.startsWith("pt")) {
    loadLanguage("pt");
}
else {
    loadLanguage("es");
}