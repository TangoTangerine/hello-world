'use strict'

// Get values

var compileOutput;

// Compile

var outputText = document.getElementById("output");
document.getElementById("btnComp").addEventListener("click", compileInfo);

function compileInfo() {



    let corp = document.getElementById("corpName").value;

    let alli = document.getElementById("allName").value;

    let zlink = document.getElementById("zkill").value;

    let allComm = document.getElementById("allComment").value;

    let preastra = document.getElementById("astraNum").value;

    let astra = "";                                       // Declare values of Citadels

    let prefort = document.getElementById("fortNum").value;

    let fort = "";

    let prekeep = document.getElementById("keepNum").value;

    let keep = "";

    if (preastra == "" || preastra == "0") {       // Get corret names for each citadel
        astra = "";
        preastra = "";

    } else if (preastra == "1") {
        astra = " Astrahus "
    } else {
        astra = " Astrahuses "
    }

    var astrahus = preastra + astra;


    if (prefort == "" || prefort == "0") {
        fort = "";
        prefort = "";
    } else if (prefort == "1") {
        fort = " Fortizar "
    } else {
        fort = " Fortizars "
    }

    var fortizar = prefort + fort;


    if (prekeep == "" || prekeep == "0") {
        keep = "";
        prekeep = "";
    } else if (prekeep == "1") {
        keep = " Keepstar "
    } else {
        keep = " Keepstars "
    }

    var keepstar = prekeep + keep;

    let prerait = document.getElementById("RaitNum").value;

    let rait = "";                                       // Declare values of Citadels

    let preazb = document.getElementById("AzbelNum").value;

    let azb = "";

    let presoti = document.getElementById("SotiyoNum").value;

    let soti = "";

    if (prerait == "" || prerait == "0") {       // Get corret names for each citadel
        rait = "";
        prerait = "";

    } else if (prerait == "1") {
        rait = " Raitaru "
    } else {
        rait = " Raitarus "
    }

    var raitaru = prerait + rait;


    if (preazb == "" || preazb == "0") {
        azb = "";
        preazb = "";
    } else if (prefort == "1") {
        azb = " Azbel "
    } else {
        azb = " Azbel "
    }

    var azbel = preazb + azb;


    if (presoti == "" || presoti == "0") {
        soti = "";
        presoti = "";
    } else if (presoti == "1") {
        soti = " Sotiyo "
    } else {
        soti = " Sotiyoes "
    }

    var sotiyo = presoti + soti;

    let preath = document.getElementById("AthaNum").value;

    let ath = "";                                       // Declare values of Citadels

    let pretat = document.getElementById("TataNum").value;

    let tat = "";


    if (preath == "" || preath == "0") {       // Get corret names for each citadel
        ath = "";
        preath = "";

    } else if (preath == "1") {
        ath = " Athanor "
    } else {
        ath = " Athanors "
    }

    var athanor = preath + ath;


    if (pretat == "" || pretat == "0") {
        tat = "";
        pretat = "";
    } else if (pretat == "1") {
        tat = " Tatara "
    } else {
        tat = " Tataras "
    }

    var tatara = pretat + tat;

    compileOutput = corp + " (" + alli + ") " +
        "\n" + "(" + zlink + ")" + "\n" +
        allComm + "\n" + "\n" +
        "Upwell Structures: " + "\n" +
        astrahus + fortizar + keepstar +'\n' +
        raitaru + azbel + sotiyo + '\n' +
        athanor + tatara;
    outputText.style.display = "block";
    outputText.innerHTML = compileOutput;
}



