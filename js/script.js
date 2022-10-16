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
zoznamProcedur["masazne"]=["Masáž chrbta", "Celotelová masáž"];
zoznamProcedur["kozmeticke"]=["Pleťová maska", "Bahenný kúpeľ"];
zoznamProcedur["masazne"].forEach(function(item){ vypisProcedur.options[vypisProcedur.options.length]= new Option(item); });

var selectedOptionMasaze = document.getElementById('masazne');
var vypisMasazi = document.getElementById("chrbat");
var zoznamMasazi = new Array();
zoznamMasazi["chrbat"]=["15 minút", "20 minút","25 minút"];
zoznamMasazi["telo"]=["30 minút", "45 minút","60 minút"];
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