const tiers = {
    "tier6" : ["abra","kadabra","alakazam","aron","lairon","aggron","basculin","bidoof","bibarel","blitzle","zebstrika","bouffalant",
                "bronzor","bronzong","buizel","floatzel","chinchou","lanturn","clamperl","huntail","gorebyss","cubchoo","beartic",
                "cubone","marowak","deerling","sawsbuck","diglett","dugtrio","drowzee","hypno","druddigon","dunsparce","durant","duskull",
                "dusclops","dusknoir","dwebble","crustle","elgyem","beheeyem","foongus","amoonguss","frillish","frillish-f","jellicent","jellicent-f"
                ,"gastly","hunter","gengar","geodude","graveler","golem","goldeen","seaking","golett","golurk","gothita","gothorita","gothitelle",
                "grimer","muk","heatmor","hoppip","horsea","igglybuff","jigglypuff","wigglytuff","smoochum","jynx","koffing","weezing",
                "krabby","kingler","lickitung","lickilicky","lillipup","herdier","stoutland","litwick","lampent","chandelure","lotad","lombre",
                "ludicolo","lunatone","machop","machoke","machamp","magikarp","gyarados","magnemite","magneton","magnezone","makuhita","hariyama",
                "mantyke","mantine","azurill","marill","azumarill","meowth","persian","mienfoo","mienshao","nidoran-f","nidorina","nidoqueen","nidoran-m",
                "nidorino","nidoking","numel","camerupt","oddish","gloom","vileplume","bellossom","onix","steelix","paras","parasect","pidgey","pidgeotto",
                "pidgeot","pidove","tranquill","unfezant","pichu","pikachu","raichu","poliwag","poliwhirl","poliwrath","ponyta","rapidash","poochyena",
                "mightyena","psyduck","golduck","purrloin","liepard","rattata","raticate","rhyhorn","rhydon","rhyperior","roggenrola","boldore","gigalith",
                "budew","roselia","roserade","sandile","krokorok","krookodile","sandshrew","sandslash","seel","dewgong","sewaddle","swadloon","leavanny",
                "shellos-west","shellos-east","gastrodon-west","gastrodon-east","shellmet","accelgor","shuppet","banette","slowpoke","slowking","slowbro",
                "slugma","magcargo","smeargle","sneasel","weavile","snover","abomasnow","solosis","duosion","reuniclus","solrock","spearow","fearow","spheal",
                "sealeo","walrein","stunfisk","surskit","masquerain","swinub","piloswine","mamoswine","taillow","swellow","tangela","tangrowth","tentacool",
                "tentacruel","timburr","gurdurr","conkeldurr","torkoal","tympole","palpitoad","seismitoad","voltorb","electrode","whismur","loudred","exploud",
                "wingull","pelipper","wynaut","wobbuffet","woobat","swoobat","wooper","quagsire","yamask","cofagrigus","zigzagoon","linoone","zubat","golbat","crobat"
    ],
    "tier5" : ["axew","fraxure","haxorus","caterpie","metapod","butterfree","deino","zweilous","hydreigon","delibird","ditto","doduo","dodrio","ekans","arbok",
                "electrike","manectric","ferroseed","ferrothorn","gible","gabite","garchomp","girafarig","glameow","purugly","gligar","gliscor","growlithe","arcanine",
                "hoothoot","noctowl","joltik","galvantula","klink","klang","klinklang","kricketot","kricketune","mankey","primeape","mareep","flaaffy","ampharos",
                "mawile","meditite","medicham","natu","xatu","phanpy","donphan","rufflet","braviary","sableye","scraggy","scrafty","seedot","nuzleaf","shiftry",
                "shinx","luxio","luxray","snorunt","glalie","froslass","spinarak","ariados","teddiursa","ursaring","vanillite","vanillish","vanilluxe","vullaby",
                "mandibuzz","vulpix","ninetales","weedle","kakuna","beedrill"
    ],
    "tier4" : ["bellsprout","weepinbell","victreebel","buneary","lopunny","chimecho","cleffa","clefairy","clefable","cottonee","whimsicott","darumaka","darmanitan",
                "dratini","dragonair","dragonite","drifloon","drifblim","elekid","electabuzz","electivire","hippopotas","hippowdon","hippopotas-f","hippowdon-f",
                "karrablast","escavalier","larvitar","pupitar","tyranitar","ledyba","ledian","magby","magmar","magmortar","miltank","minccino","cinccino","misdreavus",
                "mismagius","murkrow","honchkrow","nosepass","probopass","pachirisu","petilil","lilligant","sawk","snubbull","granbull","spinda","spoink","grumpig",
                "stantler","starly","staravia","staraptor","stunky","skuntank","sunkern","sunflora","tauros","throh","trapinch","vibrava","flygon","trubbish","garbodor",
                "tynamo","eelektrik","eelektross","venipede","whirlipede","scolipede","venonat","venomoth","wurmple","silcoon","cascoon","beautifly","dustox"
    ],
    "tier3" : ["bagon","shelgon","salamence","barboach","whiscash","cacnea","cacturne","carvanha","sharpedo","chatot","corphish","crawdaunt","corsola","cryogonal","finneon",
                "lumineon","houndour","houndoom","illumise","luvdisc","maractus","munna","musharna","nincada","ninjask","pawniard","bisharp","ralts","kirlia","gardevoir",
                "remoraid","octillery","sentret","furret","seviper","shellder","cloyster","sigilyph","staryu","starmie","volbeat","wailmer","wailord","zangoose",
                "unown-a","unown-b","unown-c","unown-d","unown-e","unown-f","unown-g","unown-h","unown-i","unown-j","unown-k","unown-l","unown-m","unown-n","unown-o","unown-p",
                "unown-q","unown-r","unown-s","unown-t","unown-u","unown-v","unown-w","unown-x","unown-y","unown-z","unown-em","unown-qm"
    ],
    "tier2" : ["aerodactyl","aipom","ambipom","anorith","armaldo","archen","archeops","combee","vespiquen","cranidos","rampardos","croagunk","toxicroak","exeggcute","exeggutor",
                "farfetchd","gulpin","swalot","heracross","kabuto","kabutops","kangaskhan","lapras","lileep","cradily","minun","mr-mime","omanyte","omastar","pineco","forretress",
                "plusle","qwilfish","relicanth","shieldon","bastiodon","shroomish","breloom","shuckle","titourga","carracosta","tropius","yanma","yanmega"
    ],
    "tier1" : ["absol","beldum","metang","metagross","burmy-plant","burmy-sandy","burmy-trash","wormadam-plant","wormadam-sandy","wormadam-trash","mothim","carnivine","castform",
                "happiny","chansey","blissey","cherubi","cherrim","eevee","flareon","jolteon","vaporeon","espeon","umbreon","glaceon","leafeon","feebas","milotic","kecleon","larvesta",
                "volcarona","panpour","simipour","pansage","simisage","pansear","simisear","pinsir","scyther","scizor","skarmory","skitty","delcatty","skorupi","drapion","munchlax",
                "snorlax","bonsly","sudowoodo","zorua","zoroark"
    ],
    "tier0" : ["basculin-blue-striped","alomomola","audino","bulbasaur","ivysaur","venusaur","charmander","charmeleon","charizard","chikorita","bayleef","meganium","chimchar","monferno",
                "infernape","cyndaquil","quilava","typhlosion","drilbur","excadrill","ducklett","swanna","emolga","mudkip","marshtomp","swampert","oshawott","dewott","samurott","piplup",
                "prinplup","empoleon","porygon","porygon2","porygon-z","riolu","lucario","rotom","shedinja","snivy","servine","serperior","spiritomb","squirtle","wartortle","blastoise",
                "tepig","pignite","emboar","togepi","togetic","togekiss","torchic","combusken","blaziken","totodile","croconaw","feraligatr","treecko","grovyle","sceptile","turtwig","grotle",
                "torterra","tyrogue","hitmonlee","hitmonchan","hitmontop"
    ],
}

function calculate_points_normal(shiny){
    let points = 0;
    for(const tier in tiers){
        if(tiers[tier].includes(shiny)){
            if(tier == "tier6"){
                points += 2;
            }else if(tier == "tier5"){
                points += 3;
            }else if(tier == "tier4"){
                points += 6;
            }else if(tier == "tier3"){
                points += 10;
            }else if(tier == "tier2"){
                points += 15;
            }else if(tier == "tier1"){
                points += 25;
            }else if(tier == "tier0"){
                points += 30;
            }
        }
    }
    return points;
}

function calculate_points(member){
    let points = 0;
    const shinies = memberData[member].shinys;
    for(const shiny of shinies){
        points += calculate_points_normal(shiny);
    }
    
    const destacados = memberData[member].destacados || [];
    for (const d of destacados) {
        if(d.type == "normal" || d.type == "swarm"){
            points += calculate_points_normal(d.name);
        }else if(d.type == "safari"){
            points += calculate_points_normal(d.name) + 5;
        }else if(d.type == "secret"){
            points += calculate_points_normal(d.name) + 10;
        }else if(d.type == "egg"){
            if(calculate_points_normal(d.name) >= 20){
                points += calculate_points_normal(d.name);
            }else{
                points += 20;
            }
        }else if(d.type == "alpha"){
            points += 50;
        }else if(d.type == "legend"){
            points += 100;
        }
        
    }
    return points;
}