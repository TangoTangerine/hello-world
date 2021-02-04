'use strict'


// Handlers


btnYes.addEventListener("click", showInfoUpwell);
btnNo.addEventListener("click", hideInfoUpwell);
btnCopy.addEventListener("click", copyText);


// starbtnYes.addEventListener("click", showInStarBases);
// starbtnNo.addEventListener("click", hideInfoStarBases);

allbtnYes.addEventListener("click", showInfoAll);
allbtnNo.addEventListener("click", hideInfoAll);

// Hide contents


//Upwell

function showInfoUpwell() {
    hideInfoDiv.style.display = "inline";
    console.log("Content Displayed");
}

function hideInfoUpwell() {
    hideInfoDiv.style.display = "none";
    console.log("Content Hidden");
}

//Alliance

function showInfoAll() {
    alliancehideInfoDiv.style.display = "inline";
    console.log("Content Displayed");
}

function hideInfoAll() {
    alliancehideInfoDiv.style.display = "none";
    console.log("Content Hidden");
}

// Starbases

function showInStarBases() {
    StarbasesDivContent.style.display = "inline";
    console.log("Content Displayed");
}

function hideInfoStarBases() {
    StarbasesDivContent.style.display = "none";
    console.log("Content Hidden");
}

function copyText() {
    var copyText = document.getElementById("output");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
  }
