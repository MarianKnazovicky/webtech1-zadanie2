/*MAX POCET ZNAKOV*/

var maxMeno = document.getElementById("max-meno")
var maxPriezvisko = document.getElementById("max-priezvisko")
var maxVek = document.getElementById("max-vek")
var maxDoplnPohlavie = document.getElementById("max-doplnok-pohlavie")
var maxTelC = document.getElementById("max-telefon")
var maxEmail = document.getElementById("max-email")
var maxChoroby = document.getElementById("max-choroby")
var maxIneDoplnSluz = document.getElementById("max-ineDoplnky")

/*COMBOBOXY*/
var vypisProcedury = document.getElementById('procedury');
var vypisStred = document.getElementById("stred");
var vypisKoniec = document.getElementById("koniec");

var zoznamStred = new Array();
zoznamStred["masazne"]=["Masáž chrbta", "Celotelová masáž","Športová masáž"];
zoznamStred["kozmeticke"]=["Pleťová maska", "Bahenný kúpeľ","Peeling"];
zoznamStred["masazne"].forEach(function(item){ vypisStred.options[vypisStred.options.length]= new Option(item); });

var zoznamKoniecM = new Array();
zoznamKoniecM["chrbat"]=["15 minút (20€)", "20 minút (25€)","25 minút (27€)"];
zoznamKoniecM["telo"]=["30 minút (35€)", "45 minút (50€)","60 minút (60€)"];
zoznamKoniecM["sport"]=["chrbta (25€)","rúk (15€)","nôh (20€)"];
zoznamKoniecM["chrbat"].forEach(function(item){ vypisKoniec.options[vypisKoniec.options.length]= new Option(item); });

var zoznamKoniecK = new Array();
zoznamKoniecK["maska"]=["Čistiaca (8€)", "Protizápalová (10€)","Hydratačná (6€)"];
zoznamKoniecK["kupel"]=["20 minút (20€)", "30 minút (25€)","40 minút (30€)"];
zoznamKoniecK["peeling"]=["tváre (10€)","chrbta (12€)","rúk (8€)"];

vypisProcedury.onchange = function() {
    let prvy = vypisProcedury.value;
    vypisStred.options.length=0
    vypisKoniec.options.length = 0;
    if( prvy === "masazne"){
        zoznamStred["masazne"].forEach(function(item){ vypisStred.options[vypisStred.options.length]= new Option(item);});
        zoznamKoniecM["chrbat"].forEach(function(item){ vypisKoniec.options[vypisKoniec.options.length]= new Option(item);});
    }
    else if (prvy === "kozmeticke"){
        zoznamStred["kozmeticke"].forEach(function(item){ vypisStred.options[vypisStred.options.length]= new Option(item);});
        zoznamKoniecK["maska"].forEach(function(item){ vypisKoniec.options[vypisKoniec.options.length]= new Option(item);});
    }
};

vypisStred.onchange = function() {
    let stred = vypisStred.value;
    vypisKoniec.options.length=0;
    switch(stred){
        case "Masáž chrbta" :
            zoznamKoniecM["chrbat"].forEach(function(item){ vypisKoniec.options[vypisKoniec.options.length]= new Option(item);});
            break;
        case "Celotelová masáž" :
            zoznamKoniecM["telo"].forEach(function(item){ vypisKoniec.options[vypisKoniec.options.length]= new Option(item);});
            break;
        case "Športová masáž" :
            zoznamKoniecM["sport"].forEach(function(item){ vypisKoniec.options[vypisKoniec.options.length]= new Option(item);});
            break;
        case "Pleťová maska" :
            zoznamKoniecK["maska"].forEach(function(item){ vypisKoniec.options[vypisKoniec.options.length]= new Option(item);});
            break;
        case "Bahenný kúpeľ":
            zoznamKoniecK["kupel"].forEach(function(item){ vypisKoniec.options[vypisKoniec.options.length]= new Option(item);});
            break;
        case "Peeling" :
            zoznamKoniecK["peeling"].forEach(function(item){ vypisKoniec.options[vypisKoniec.options.length]= new Option(item);});
            break;
    }
};

/*DOPLNOK K POHLAVIU RADIO*/

var pohlavieMuz = document.getElementById("pohlavieM")
var chybaPohlavie = document.getElementById("chyba-pohlavie");

pohlavieMuz.onchange = function(){
    document.getElementById("doplnokDiv").style.display = 'block';
    document.getElementById("zlomZ").style.display = 'none';
    doplnokZena.style.border = "2px solid grey"
    doplnokZena.style.background = "white";
    doplnokZena.value = "";
    doplnokZena.style.display = 'none';
    doplnokMuz.style.border = "2px solid grey"
    doplnokMuz.style.background = "white";
    doplnokMuz.value = "";
    doplnokMuz.style.display = 'none';
    document.getElementById("labelDoplnokZ").style.display = 'none';
    document.getElementById("zlomM").style.display = 'block';
    document.getElementById("doplnokM").style.display = 'block';
    document.getElementById("labelDoplnokM").style.display = 'block';
    chybaPohlavie.innerHTML = ""
    chybaDoplnPohlavie.innerHTML = ""
}

var pohlavieZena = document.getElementById("pohlavieZ")
pohlavieZena.onchange = function(){
    document.getElementById("doplnokDiv").style.display = 'block';
    document.getElementById("zlomM").style.display = 'none';
    doplnokMuz.style.border = "2px solid grey"
    doplnokMuz.style.background = "white";
    doplnokMuz.value = "";
    doplnokMuz.style.display = 'none';
    doplnokZena.style.border = "2px solid grey"
    doplnokZena.style.background = "white";
    doplnokZena.value = "";
    doplnokZena.style.display = 'none';
    document.getElementById("labelDoplnokM").style.display = 'none';
    document.getElementById("zlomZ").style.display = 'block';
    document.getElementById("doplnokZ").style.display = 'block';
    document.getElementById("labelDoplnokZ").style.display = 'block';
    chybaPohlavie.innerHTML = ""
    chybaDoplnPohlavie.innerHTML = ""
}

var chybaDoplnPohlavie = document.getElementById("chybaDoplPohlavie");

var doplnokMuz = document.getElementById("doplnokM")
doplnokMuz.onblur = function (){
    let cislo = doplnokMuz.value;
    if( cislo === null || cislo === ""){
        doplnokMuz.style.border = '2px solid grey';
        doplnokMuz.style.background = 'white'
        doplnokMuz.value = "";
        chybaPohlavie.innerHTML ="";
        chybaDoplnPohlavie.innerHTML = ""
    } else if( cislo < 0){
        chyba(doplnokMuz,chybaDoplnPohlavie,"nemôžte vážiť menej ako 0kg")
    } else if( cislo > 300){
        chyba(doplnokMuz,chybaDoplnPohlavie,"nemôžte vážiť viac ako 300kg")
    } else{
        ok(doplnokMuz,chybaDoplnPohlavie);
    }
    maxDoplnPohlavie.innerHTML = "";
}

var doplnokZena = document.getElementById("doplnokZ")
doplnokZena.onblur = function (){
    let cislo = doplnokZena.value;
    if( cislo === null || cislo === ""){
        doplnokZena.style.border = '2px solid grey';
        doplnokZena.style.background = 'white'
        doplnokZena.value = "";
        chybaPohlavie.innerHTML ="";
        chybaDoplnPohlavie.innerHTML = ""
    } else if( cislo < 0){
        chyba(doplnokZena,chybaDoplnPohlavie,"nemôžte merať menej ako 0cm")
    }else if(cislo > 300){
        chyba(doplnokZena,chybaDoplnPohlavie,"nemôžte byť vyšší ako 300cm")
    }else{
        ok(doplnokZena,chybaDoplnPohlavie);
    }
    maxDoplnPohlavie.innerHTML = "";
}

/*DOPLNKOVE SLUZBY INE*/
var ineDoplnkoveSluzby = document.getElementById("ine")
var napisaneDoplnkoveSluzby = document.getElementById('doplnkoveSluz');

ineDoplnkoveSluzby.onchange = function(){

    if (ineDoplnkoveSluzby.checked){
        napisaneDoplnkoveSluzby.style.display = 'block';
    }
    else{
        napisaneDoplnkoveSluzby.value = "";
        napisaneDoplnkoveSluzby.style.display = 'none';
    }
    maxIneDoplnSluz.innerHTML="";
    maxIneDoplnSluz.style.color = "black"
    napisaneDoplnkoveSluzby.style.border = "2px solid grey";
    napisaneDoplnkoveSluzby.style.background = 'white'
}

napisaneDoplnkoveSluzby.onblur = function(){
    if( napisaneDoplnkoveSluzby.value === null || napisaneDoplnkoveSluzby.value === ""){
        maxIneDoplnSluz.style.color = "red"
        chyba(napisaneDoplnkoveSluzby,maxIneDoplnSluz,"toto pole je povinné");
    }else {
        ok(napisaneDoplnkoveSluzby,maxIneDoplnSluz);
    }
}

/*TELEFONNE CISLO*/
var telC = document.getElementById("telC");
var chybaTelC = document.getElementById("chyba-telefon")
telC.onblur = function (){
    let cislo = telC.value;
    let pattern = /^[+]\d{3}\s\d{3}\s\d{3}\s\d{3}$/;
    let vysledok = pattern.test(cislo);

    if( cislo === null || cislo === ""){
        telC.style.border = '2px solid grey';
        telC.style.background = 'white'
        telC.value = "";
        chybaTelC.innerHTML ="";
    } else if(vysledok === false){
        chyba(telC,chybaTelC,"nesprávny formát telefónneho čísla")
    }else if(vysledok === true){
        ok(telC,chybaTelC)
    }
    maxTelC.innerHTML = "";
}

/*EMAIL*/
var email = document.getElementById("email");
var chybaEmail = document.getElementById("chyba-email")
email.onblur = function (){
    let cislo = email.value;
    //let pattern = /^[a-zA-Z0-9.-_]{3,}@[a-zA-Z.-]{2,}[*.]{1}[a-zA-Z]{2,4}$/;
    //let pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    //let pattern = /^(?:\.[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]{3,})+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]{2,4})*$/;
    //let pattern = /^[^\s@]{3,}@[^\s@]+\.[^\s@]{2,4}$/;
    let pattern = /^[a-z0-9._%+-]{3,}@[a-z0-9.-]*[.]+[a-z]{2,4}$/;
    let vysledok = pattern.test(cislo);
    if( cislo === null || cislo === ""){
        chyba(email,chybaEmail,"email je povinný")
    } else if(vysledok === false){
        chyba(email,chybaEmail,"nesprávny formát emailu");
    }else if(vysledok === true){
        ok(email,chybaEmail);
    }
    maxEmail.innerHTML = "";
}

/*KONTROLA VEK-DATUM NARODENIA*/
var vek = document.getElementById("vek");
var chybaVek = document.getElementById("chyba-vek")
var datumNarodenia = document.getElementById("datum");
var chybaDatum = document.getElementById("chyba-datum")

var vypocitanyVek = null;

datumNarodenia.onblur = function (){
    let tmp = this.value;
    let datum = new Date(tmp);
    let aktCas = new Date();
    let diff = aktCas - datum;
    vypocitanyVek = Math.floor(diff/(31556952000));
    if(diff < 0){
        vypocitanyVek = NaN;
        chyba(datumNarodenia,chybaDatum,"nemôžežte sa narodiť neskôr ako dnes");
    } else if( vypocitanyVek > 122 ) {
        vypocitanyVek = NaN;
        chyba(datumNarodenia,chybaDatum,"narodil si sa pred rokom 1900");
    } else if( vypocitanyVek < 8 ) {
        vypocitanyVek = NaN;
        chyba(datumNarodenia,chybaDatum,"vekový limit pre wellness je 8 rokov");
    }else if((vek.value != null || vek.value !== "") && vek.value == vypocitanyVek){
        vek.placeholder = vypocitanyVek;
        ok(datumNarodenia,chybaDatum);
    } else if(datum == "Invalid Date"){
        vypocitanyVek = NaN;
        chyba(datumNarodenia,chybaDatum,"dátum je povinný")
    }else if(vek.value == null || vek.value == ""){
        vek.placeholder = vypocitanyVek;
        ok(datumNarodenia,chybaDatum);
    }else{
        vypocitanyVek = NaN;
        chyba(datumNarodenia,chybaDatum,"dátum narodenia sa nezhoduje s uvedeným vekom")
    }
};

vek.onblur = function () {
    let cislo = vek.value;
    if (cislo == "" || cislo == null) {
        chyba(vek,chybaVek,"vek je povinný");
    } else if(cislo < 0){
        chyba(vek,chybaVek,"nemôžte mať záporne rokov");
    } else if(cislo < 8){
        chyba(vek,chybaVek,"vekový limit pre wellnes je 8 rokov");
    }else if(cislo > 122){
        chyba(vek,chybaVek,"nemôžte mať viac ako 122 rokov");
    }else if (!isNaN(vypocitanyVek) && (vypocitanyVek != cislo && vypocitanyVek != null)) {
        chyba(vek,chybaVek,"vek sa nezhoduje s dátumom narodenia")
    } else {
        ok(vek,chybaVek);
    }
    maxVek.innerHTML = "";
}
/*TEXTAREA*/

var choroby = document.getElementById("choroby")
choroby.onblur=function (){
    maxChoroby.innerHTML = "";
    let cislo = choroby.value;
    if( cislo === null || cislo === ""){
        choroby.style.border = '2px solid grey';
    } else{
        choroby.style.border = '2px solid green';
    }
}

/*POVINNE MENO PRIEZVISKO*/
var meno = document.getElementById("k-meno")
var priezvisko = document.getElementById("p-meno")
var chybaMeno = document.getElementById("chyba-meno")
var chybaPriezvisko = document.getElementById("chyba-priezvisko")

meno.onblur = function (){
    let cislo = meno.value;
    if( cislo === null || cislo === ""){
        chyba(meno,chybaMeno,"meno je povinné");
    }else {
        ok(meno,chybaMeno);
    }
    maxMeno.innerHTML = "";
}

priezvisko.onblur = function (){
    let cislo = priezvisko.value;
    if( cislo === null || cislo === ""){
        chyba(priezvisko,chybaPriezvisko,"priezvisko je povinné")
    }else {
        ok(priezvisko,chybaPriezvisko);
    }
    maxPriezvisko.innerHTML = "";
}

/*TERMIN*/
var cas = document.getElementById("cas");
var chybaCas = document.getElementById("chyba-cas")
var den = document.getElementById("den");
var chybaDen = document.getElementById("chyba-den")


den.onblur = function (){
    let tmp = this.value;
    let datum = new Date(tmp);
    let aktCas = new Date();
    let diff = datum - aktCas;
    if( den.value === null || den.value === ""){
        chyba(den,chybaDen,"deň je povinný");
    }else if(diff < 0){
        chyba(den,chybaDen,"nemôžežte rezervovať skôr ako na zajtra");
    }else{
        ok(den,chybaDen);
    }
};

cas.onblur = function (){
    let cislo = this.value;
    console.log(cislo);
    if( cislo === null || cislo === ""){
        chyba(cas,chybaCas,"čas je povinný");
    }else if (cislo > "21:00" ){
        chyba(cas,chybaCas,"objednať sa dá najviac na 21:00");
    }else if( cislo < "09:00"){
        chyba(cas,chybaCas,"objednať sa dá najmenej na 9:00");
    }
    else{
        ok(cas,chybaCas);
    }
};


function maxLengthInputNumber(kto,dlzka){
    kto.value = kto.value.slice(0,dlzka);
}

/* funkcie na chbove hlasenia a ich vymazanie*/
function chyba(kto,kam,hlaska){
    kto.style.border = '2px solid red';
    kto.style.background = 'lightgrey'
    kto.value = "";
    kam.innerHTML = hlaska;
}

function ok(kto,kam){
    kto.style.border = '2px solid green';
    kto.style.background = 'white'
    kam.innerHTML = "";
}

function maxCheck(kto ,kam , kolko){
    let tmp = kto.value;
    let cislo = tmp.length;
    kam.style.color = "black"
    kam.innerHTML = cislo + "/" + kolko;
}

/*VALIDATE PRED SUBMITOM*/

function validujPredOdoslanim() {
    let flag = true;
    //meno
    if((meno.value === null || meno.value === "")){
        chyba(meno,chybaMeno,"meno je povinné");
        flag = false;
    }
    if (meno.style.display === '2px solid red' ){
        flag = false;
    }
    //priezvisko
    if((priezvisko.value === null || priezvisko.value === "")){
        chyba(priezvisko,chybaPriezvisko,"priezvisko je povinné")
        flag = false;
    }
    if (priezvisko.style.display === '2px solid red' ){
        flag = false;
    }
    //datum narodenia
    if((datumNarodenia.value === null || datumNarodenia.value === "")){
        chyba(datumNarodenia,chybaDatum,"dátum je povinný");
        flag = false;
    }
    if (datumNarodenia.style.display === '2px solid red' ){
        flag = false;
    }
    //vek
    if((vek.value === null || vek.value === "")){
        chyba(vek,chybaVek,"vek je povinný")
        flag = false;
    }
    if (vek.style.display === '2px solid red' ){
        flag = false;
    }
    //pohlavie
    if(!pohlavieMuz.checked && !pohlavieZena.checked){
        chybaPohlavie.innerHTML = "pohlavie je povinné"
        flag = false;
    }
    //telefon
    if (telC.style.display === '2px solid red' ){
        flag = false;
    }
    //email
    if((email.value === null || email.value === "")){
        chyba(email,chybaEmail,"email je povinný")
        flag = false;
    }
    if (email.style.display === '2px solid red' ){
        flag = false;
    }
    //den cas
    if((den.value === null || den.value === "")){
        chyba(den,chybaDen,"deň je povinný");
        flag = false;
    }
    if (den.style.display === '2px solid red' ){
        flag = false;
    }
    if((cas.value === null || cas.value === "")){
        chyba(cas,chybaCas,"čas je povinný");
        flag = false;
    }
    if (cas.style.display === '2px solid red' ){
        flag = false;
    }
    // ine doplnky
    if(ineDoplnkoveSluzby.checked){
        if((napisaneDoplnkoveSluzby.value === null || napisaneDoplnkoveSluzby.value === "")){
            maxIneDoplnSluz.style.color = "red";
            chyba(napisaneDoplnkoveSluzby,maxIneDoplnSluz,"musíte niečo napísať")
            flag = false;
        }
    }
    return flag;
}

var buttonMeno = document.getElementById("odokry-meno")
var menoOutput = document.getElementById("moje-meno")
menoOutput.style.display = 'none';

buttonMeno.onclick = function(){
    if(menoOutput.style.display === 'none'){
        menoOutput.style.display = 'block';
    }
    else {menoOutput.style.display = 'none'}
}

var prehlad = document.getElementById("prehlad");
prehlad.onclick = function (){
    let tmp = validujPredOdoslanim();
    if(tmp){
        modal() // otvor prehlad
    }
}

/*zistenie ceny*/

function zistiCenuCombo(){
    let tmp = vypisKoniec.value;
    let cena = tmp.slice(-4,-2);
    cena = cena * 1;
    return cena;
}

var sauna = document.getElementById("sauna");
var manikura = document.getElementById("manikura");
var pedikura = document.getElementById("pedikura");

var cena;

function modal(){
    let closeBtn = document.createElement("span");
    closeBtn.classList.add("close");
    closeBtn.innerHTML = "&times";

    let modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");
    modalContent.appendChild(closeBtn);

    let modalNadpis = document.createElement("p");
    modalNadpis.style.fontSize = "2em";
    modalNadpis.style.fontWeight = "bold";
    modalNadpis.innerHTML = "Zhrnutie objednávky";
    modalContent.appendChild(modalNadpis);

    let modalMeno = document.createElement("p");
    modalMeno.innerHTML = "Meno: " + meno.value;
    modalContent.appendChild(modalMeno);

    let modalPriezvisko = document.createElement("p");
    modalPriezvisko.innerHTML = "Priezvisko: " + priezvisko.value;
    modalContent.appendChild(modalPriezvisko);

    let modalDatum = document.createElement("p");
    modalDatum.innerHTML = "Dátum narodenia: " + datumNarodenia.value;
    modalContent.appendChild(modalDatum);

    let modalVek = document.createElement("p");
    modalVek.innerHTML = "Vek: " + vek.value;
    modalContent.appendChild(modalVek);

    let modalPohlavie = document.createElement("p");
    if(pohlavieMuz.checked){
        modalPohlavie.innerHTML = "Pohlavie: Muž" ;
        modalContent.appendChild(modalPohlavie);
        if(doplnokMuz.value !== ""){
            let modalDoplnok = document.createElement("p");
            modalDoplnok.innerHTML = "Váha: " +doplnokMuz.value;
            modalContent.appendChild(modalDoplnok);
        }
    }
    if(pohlavieZena.checked){
        modalPohlavie.innerHTML = "Pohlavie: Žena";
        modalContent.appendChild(modalPohlavie);
        if(doplnokZena.value !== ""){
            let modalDoplnok = document.createElement("p");
            modalDoplnok.innerHTML = "Výška: " +doplnokZena.value;
            modalContent.appendChild(modalDoplnok);
        }
    }

    if(telC.value !== "") {
        let modalTelC = document.createElement("p");
        modalTelC.innerHTML = "Telefónne číslo: " + telC.value;
        modalContent.appendChild(modalTelC);
    }

    if(email.value !== "") {
        let modalEmail = document.createElement("p");
        modalEmail.innerHTML = "email: " + email.value;
        modalContent.appendChild(modalEmail);
    }

    let modalProcedura = document.createElement("p");
    modalProcedura.innerHTML = "Procedúra: " + vypisStred.value + " " + vypisKoniec.value.slice(0,-5);
    modalContent.appendChild(modalProcedura);

    cena = zistiCenuCombo();

    let modalDoplkoveSluzby = document.createElement("p");
    modalDoplkoveSluzby.innerHTML = "Doplnové služby: "
    let flagDoplnkoveSluzby = false;
    if(sauna.checked){
        flagDoplnkoveSluzby = true;
        modalDoplkoveSluzby.innerHTML = modalDoplkoveSluzby.innerHTML + "Sauna, ";
        cena += 20;
    }
    if(manikura.checked){
        flagDoplnkoveSluzby = true;
        modalDoplkoveSluzby.innerHTML = modalDoplkoveSluzby.innerHTML + "Manikúra, ";
        cena += 15;
    }
    if(pedikura.checked){
        flagDoplnkoveSluzby = true;
        modalDoplkoveSluzby.innerHTML = modalDoplkoveSluzby.innerHTML + "Pedikúra, ";
        cena += 17;
    }
    if(ineDoplnkoveSluzby.checked){
        flagDoplnkoveSluzby = true;
        modalDoplkoveSluzby.innerHTML = modalDoplkoveSluzby.innerHTML + napisaneDoplnkoveSluzby.value;
    }
    if(flagDoplnkoveSluzby){
        if(!ineDoplnkoveSluzby.checked){
            modalDoplkoveSluzby.innerHTML = modalDoplkoveSluzby.innerHTML.substring(0, modalDoplkoveSluzby.innerHTML.length - 2);
        }
        modalContent.appendChild(modalDoplkoveSluzby);
    }

    let modalDatumCas = document.createElement("p");
    modalDatumCas.innerHTML = "Termín: " + den.value + " o " + cas.value;
    modalContent.appendChild(modalDatumCas);

    if(choroby.value !== "") {
        let modalChoroby = document.createElement("p");
        modalChoroby.innerHTML = "Uvedené choroby: " + choroby.value;
        modalContent.appendChild(modalChoroby);
    }

    let modalCena = document.createElement("p");
    modalCena.innerHTML = "Celková cena: " + cena + "€";
    if(ineDoplnkoveSluzby.checked){
        modalCena.innerHTML= modalCena.innerHTML + " + sa bude odvíjať od doplnkových služieb";
    }
    modalContent.appendChild(modalCena);

    let sendBtn = document.createElement("button");
    sendBtn.type = "submit";
    sendBtn.classList.add("odoslat");
    sendBtn.innerHTML = "Odoslať";
    modalContent.appendChild(sendBtn);

    let vrstvaNad = document.getElementById("vrstvaNad");
    vrstvaNad.innerHTML = "";

    vrstvaNad.appendChild(modalContent)

    vrstvaNad.style.display = 'block';

    closeBtn.addEventListener("click",function(){
        vrstvaNad.style.display= 'none';
    })
}

//peeling - tvare chgrbta tela ruk
//masaz tvare - 5 10 15 minut -- kozmeticka
//sportova masaz - ruk noh chrbta

//masaz cim
//nechty - ruky nohy
//choroby, ktore trpi - tlak, krcove zili, operacie, ine.
//trpite, lieky, operacie, bolesti

//otazka muz/zena - porody/bolestiva pravidelna menstruacia muz-fajciar/cukrovnka

