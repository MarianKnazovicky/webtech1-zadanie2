/*COMBOBOXY*/
var vypisProcedury = document.getElementById('procedury');
var vypisStred = document.getElementById("stred");
var vypisKoniec = document.getElementById("koniec");

var zoznamStred = new Array();
zoznamStred["masazne"]=["Masáž chrbta", "Celotelová masáž","Športová masáž"];
zoznamStred["kozmeticke"]=["Pleťová maska", "Bahenný kúpeľ","Peeling"];
zoznamStred["masazne"].forEach(function(item){ vypisStred.options[vypisStred.options.length]= new Option(item); });

var zoznamKoniecM = new Array();
zoznamKoniecM["chrbat"]=["15 minút", "20 minút","25 minút"];
zoznamKoniecM["telo"]=["30 minút", "45 minút","60 minút"];
zoznamKoniecM["sport"]=["chrbta","rúk","nôh"];
zoznamKoniecM["chrbat"].forEach(function(item){ vypisKoniec.options[vypisKoniec.options.length]= new Option(item); });

var zoznamKoniecK = new Array();
zoznamKoniecK["maska"]=["Omladzujúca maska", "Zjemnenie pleti","Proti vráskam"];
zoznamKoniecK["kupel"]=["20 minút", "30 minút","40 minút"];
zoznamKoniecK["peeling"]=["tváre","chrbta","rúk",];

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
    document.getElementById("zlomZ").style.display = 'none';
    document.getElementById("doplnokZ").style.display = 'none';
    document.getElementById("labelDoplnokZ").style.display = 'none';
    document.getElementById("zlomM").style.display = 'block';
    document.getElementById("doplnokM").style.display = 'block';
    document.getElementById("labelDoplnokM").style.display = 'block';
}

var pohlavieZena = document.getElementById("pohlavieZ")
pohlavieZena.onchange = function(){
    document.getElementById("zlomM").style.display = 'none';
    document.getElementById("doplnokM").style.display = 'none';
    document.getElementById("labelDoplnokM").style.display = 'none';
    document.getElementById("zlomZ").style.display = 'block';
    document.getElementById("doplnokZ").style.display = 'block';
    document.getElementById("labelDoplnokZ").style.display = 'block';
}

var doplnokMuz = document.getElementById("doplnokM")
doplnokMuz.onblur = function (){
    let cislo = doplnokMuz.value;
    if( cislo === null || cislo === ""){
        doplnokMuz.style.border = '1px solid black';
        doplnokMuz.style.background = 'white'
        doplnokMuz.value = "";
        chybaPohlavie.innerHTML ="";
    } else if( cislo < 0){
        chyba(doplnokMuz,chybaPohlavie,"nemôžte vážiť menej ako 0kg")
    } else if( cislo > 300){
        chyba(doplnokMuz,chybaPohlavie,"nemôžte vážiť viac ako 300kg")
    } else{
        ok(doplnokMuz,chybaPohlavie);
    }
}

var doplnokZena = document.getElementById("doplnokZ")
doplnokZena.onblur = function (){
    let cislo = doplnokZena.value;
    if( cislo === null || cislo === ""){
        doplnokZena.style.border = '1px solid black';
        doplnokZena.style.background = 'white'
        doplnokZena.value = "";
        chybaPohlavie.innerHTML ="";
    } else if( cislo < 0){
        chyba(doplnokZena,chybaPohlavie,"nemôžte merať menej ako 0cm")
    }else if(cislo > 300){
        chyba(doplnokZena,chybaPohlavie,"nemôžte byť vyšší ako 300cm")
    }else{
        ok(doplnokZena,chybaPohlavie);
    }
}

/*DOPLNKOVE SLUZBY INE*/
var ineDoplnkoveSluzby = document.getElementById("ine")
ineDoplnkoveSluzby.onchange = function(){
    let ineDoplnkoveSluz = document.getElementById('doplnkoveSluz');
    if (ineDoplnkoveSluzby.checked){
        ineDoplnkoveSluz.style.display = 'block';
    }
    else{
        ineDoplnkoveSluz.style.display = 'none';
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
        telC.style.border = '1px solid black';
        telC.style.background = 'white'
        telC.value = "";
        chybaTelC.innerHTML ="";
    } else if(vysledok === false){
        chyba(telC,chybaTelC,"nesprávny formát")
    }else if(vysledok === true){
        ok(telC,chybaTelC)
    }
}

/*EMAIL*/
var email = document.getElementById("email");
var chybaEmail = document.getElementById("chyba-email")
email.onblur = function (){
    let cislo = email.value;
    let pattern = /^[a-zA-Z0-9.-_]{3,}[@][a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,4}$/;
    let vysledok = pattern.test(cislo);
    if( cislo === null || cislo === ""){
        email.style.border = '1px solid black';
        email.style.background = 'white'
        email.value = "";
        chybaEmail.innerHTML ="";
    } else if(vysledok === false){
        chyba(email,chybaEmail,"nesprávny formát");
    }else if(vysledok === true){
        ok(email,chybaEmail);
    }
}

/*KONTROLA VEK-DATUM NARODENIA*/
var vek = document.getElementById("vek");
var chybaVek = document.getElementById("chyba-vek")
var datumNarodenia = document.getElementById("datum");
var chybaDatum = document.getElementById("chyba-datum")

var vypocitanyVek = null;

//document.getElementById("datum").addEventListener("blur", function() {
datumNarodenia.onblur = function (){
    let tmp = this.value;
    let datum = new Date(tmp);
    console.log(datum)
    let aktCas = new Date();
    let diff = aktCas - datum;
    vypocitanyVek = Math.floor(diff/(31556952000));
    console.log(vypocitanyVek)

    if(diff < 0){
        vypocitanyVek = NaN;
        chyba(datumNarodenia,chybaDatum,"nemôžeš sa narodiť neskôr ako dnes");
    } else if( diff/(31556952000) > 122 ) {
        vypocitanyVek = NaN;
        chyba(datumNarodenia,chybaDatum,"narodil si sa pred rokom 1900");
    } else if((vek.value != null || vek.value != "") && vek.value == vypocitanyVek){
        vek.placeholder = vypocitanyVek;
        ok(datumNarodenia,chybaDatum);
    } else if(datum == "Invalid Date"){
        vypocitanyVek = Nan
        chyba(datumNarodenia,chybaDatum,"toto pole je povinné")
    }
    else{
        vypocitanyVek = NaN;
        chyba(datumNarodenia,chybaDatum,"dátum narodenia sa nezhoduje s uvedeným vekom")
    }
};

vek.onblur = function () {
    let cislo = vek.value;
    if (cislo == "" || cislo == null) {
        chyba(vek,chybaVek,"toto pole je povinné");
    } else if(cislo < 0){
        chyba(vek,chybaVek,"nemôžte mať záporne rokov");
    }else if (!isNaN(vypocitanyVek) && (vypocitanyVek != cislo && vypocitanyVek != null)) {
        chyba(vek,chybaVek,"vek sa nezhoduje s dátumom narodenia")
    } else {
        ok(vek,chybaVek);
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
        chyba(meno,chybaMeno,"toto pole je povinné");
    }else {
        ok(meno,chybaMeno);
    }
}

priezvisko.onblur = function (){
    let cislo = priezvisko.value;
    if( cislo === null || cislo === ""){
        chyba(priezvisko,chybaPriezvisko,"toto pole je povinné")
    }else {
        ok(priezvisko,chybaPriezvisko);
    }
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

/*VALIDATE PRED SUBMITOM*/

function validujPredOdoslanim() {
    let flag = true;
    //meno
    if((meno.value === null || meno.value === "")){
        chyba(meno,chybaMeno,"toto pole je povinné");
        flag = false;
    }
    if (meno.style.display === '2px solid red' ){
        flag = false;
    }
    //priezvisko
    if((priezvisko.value === null || priezvisko.value === "")){
        chyba(priezvisko,chybaPriezvisko,"toto pole je povinné")
        flag = false;
    }
    if (priezvisko.style.display === '2px solid red' ){
        flag = false;
    }
    //datum narodenia
    if((datumNarodenia.value === null || datumNarodenia.value === "")){
        chyba(datumNarodenia,chybaDatum,"toto pole je povinné");
        flag = false;
    }
    if (datumNarodenia.style.display === '2px solid red' ){
        flag = false;
    }
    //vek
    if((vek.value === null || vek.value === "")){
        chyba(vek,chybaVek,"toto pole je povinné")
        flag = false;
    }
    if (vek.style.display === '2px solid red' ){
        flag = false;
    }
    //pohlavie
    if(!pohlavieMuz.checked && !pohlavieZena.checked){
        chybaPohlavie.innerHTML = "toto pole je povinné"
        flag = false;
    }
    //telefon
    if (telC.style.display === '2px solid red' ){
        flag = false;
    }
    //email
    if (email.style.display === '2px solid red' ){
        flag = false;
    }
    return flag;
}

var odoslat = document.getElementById("odoslat");
odoslat.onclick = function (){
    let tmp = validujPredOdoslanim()
    if(tmp){
        //otvor dalsie okno
    }
}

/*function posliMail(){
    Email.send({
        Host : "smtp.gmail.dsa",
        Username : "marianknazo@gmail.com",
        Password : "9gf3swjn",
        To : "xknazovicky@stuba.sk",
        From : email.value,
        Subject: "test mailu",
        Body: "sprava",
    }).then(message=>alert(message))
}*/

//peeling - tvare chgrbta tela ruk
//masaz tvare - 5 10 15 minut -- kozmeticka
//sportova masaz - ruk noh chrbta

//masaz cim
//nechty - ruky nohy
//choroby, ktore trpi - tlak, krcove zili, operacie, ine.
//trpite, lieky, operacie, bolesti

//otazka muz/zena - porody/bolestiva pravidelna menstruacia muz-fajciar/cukrovnka

/*CVICENIE 5*/
/*
function poloade(){
var btn = get elementbyID()};
btn.addEventListener("click",nejaka funkcia");

function najaka funkcia(){
    var closeBtn = document.createElement("span");
    closeBtn.classList.add("close");
    CloseBtn.innerHTML = "&times";

    var modalContent = document.createElement("div").classList.add("modal-content");
    modalContent.appendChild(closeBtn);

    var text = "toto je nejaky text vo vrstve nad
    var par = document.createElement("p");
    par.innerHTML = text;
    modalContent.appendChild(par);

    var vrstvaNad = document.getElementById("vrstvaNad");
    vrstvaNad.innerHTML = ""; // vycisitenie predosleho pri  znovuotvoreni

    vrstvaNad.appendChild(modalContent)

    vrstvaNad.style.display = 'block';

    closeBtn.addEventListener("click",function(){
        vrstvaNad.style.display= 'none';
    })
}

modal z index > 0;
https://www.w3schools.com/howto/howto_css_modals.asp


nove okno, vytvorit dinamicky nove okno prazdne divko v html
*/

