/*KOMBOBOXY Z PREDNASKY*/

/*var selectedOption1 = document.getElementById('krajiny');
var htmlCollection = document.getElementsByTagName('section');
var arr = Array.from(htmlCollection);     //od ECMAScript 2015 (ed 6)
var selectedOptionM = document.getElementById('sk');
var selectedOptionK = document.getElementById('cz');
arr.shift();


selectedOption.onchange = function() {
    arr.forEach(function(element){element.style.display = "none";});
    document.getElementById(this.value).style.display = "inline";
    var htmlCollectionM = document.getElementsByTagName('select');
    var arrM = Array.from(htmlCollectionM);
    arr.shift();
    var htmlCollectionK = document.getElementsByTagName('select');
    var arrK = Array.from(htmlCollectionK);
    arr.shift();
}

selectedOptionM.onchange = function() {
    selectedOption.onchange;
}

selectedOptionK.onchange = function() {
    selectedOption.onchange;
}*/

var selectedOptionProcedury = document.getElementById('procedury');
var vypisProcedur = document.getElementById("masazne");
var zoznamProcedur = new Array();
zoznamProcedur["masazne"]=["Masáž chrbta", "Celotelová masáž","Športová masáž"];
zoznamProcedur["kozmeticke"]=["Pleťová maska", "Bahenný kúpeľ","Peeling"];
zoznamProcedur["masazne"].forEach(function(item){ vypisProcedur.options[vypisProcedur.options.length]= new Option(item); });

var selectedOptionMasaze = document.getElementById('masazne');
var vypisMasazi = document.getElementById("chrbat");
var zoznamMasazi = new Array();
zoznamMasazi["chrbat"]=["15 minút", "20 minút","25 minút"];
zoznamMasazi["telo"]=["30 minút", "45 minút","60 minút"];
zoznamMasazi["sport"]=["chrbát","ruky","nohy"];
zoznamMasazi["chrbat"].forEach(function(item){ vypisMasazi.options[vypisMasazi.options.length]= new Option(item); });

selectedOptionProcedury.onchange = function() {
    let thisArr = zoznamProcedur[selectedOptionProcedury.value];
    console.log(thisArr);
    vypisProcedur.options.length=0
    thisArr.forEach(function(item){ vypisProcedur.options[vypisProcedur.options.length]= new Option(item); });
};

selectedOptionMasaze.onchange = function() {
    let thisArr = zoznamMasazi[selectedOptionMasaze.value];
    console.log(thisArr);
    vypisMasazi.options.length=0
    thisArr.forEach(function(item){ vypisMasazi.options[vypisMasazi.options.length]= new Option(item); });
};

var pohlavieMuz = document.getElementById("pohlavieM")
pohlavieMuz.onchange = function(){
    document.getElementById("doplnokM").style.display = 'block';
    document.getElementById("doplnokZ").style.display = 'none';
    document.getElementById("labelDoplnokM").style.display = 'block';
    document.getElementById("labelDoplnokZ").style.display = 'none';
}

var pohlavieZena = document.getElementById("pohlavieZ")
pohlavieZena.onchange = function(){
    document.getElementById("doplnokM").style.display = 'none';
    document.getElementById("doplnokZ").style.display = 'block';
    document.getElementById("labelDoplnokM").style.display = 'none';
    document.getElementById("labelDoplnokZ").style.display = 'block';
}

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

/*var datumNarodenia = document.getElementById("datum");
datumNarodenia.onblur = function (){
    let datum = new Date(datumNarodenia);
    let aktCas = new Date();
    let diff = aktCas - datum;
    console.log(datum);
    console.log(aktCas);
    console.log(diff);
    if(diff < 0){
        alert("nemozes sa narodit neskor ako teraz");
        datumNarodenia.style.border = '2px solid red';
    }
}*/

var vek = document.getElementById("vek");
var datumNarodenia = document.getElementById("datum");

document.getElementById("datum").addEventListener("blur", function() {
    let tmp = this.value;
    let datum = new Date(tmp);
    let aktCas = new Date();
    console.log(datum);
    let diff = aktCas - datum;
    console.log(diff);
    console.log(diff/(31556952000));
    if(diff < 0){
        datumNarodenia.style.border = '2px solid red';
        document.getElementById("test").innerHTML ="si mladsi ako dnes"
        vek.value = null;
    } else if( diff/(31556952000) > 122 ) {
        datumNarodenia.style.border = '2px solid red';
        document.getElementById("test").innerHTML ="narodil si sa pred rokom 1900"
        vek.value = null;
    } else{
        vek.value = Math.floor(diff/(31556952000));
        datumNarodenia.style.border = '2px solid green';
    }
});

//peeling - tvare chgrbta tela ruk
//masaz tvare - 5 10 15 minut -- kozmeticka
//sportova masaz - ruk noh chrbta

//masaz cim
//nechty - ruky nohy
//choroby, ktore trpi - tlak, krcove zili, operacie, ine.
//trpite, lieky, operacie, bolesti

//otazka muz/zena - porody/bolestiva pravidelna menstruacia muz-fajciar/cukrovnka