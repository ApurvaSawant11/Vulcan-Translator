var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("txt-output");
var btnTranslate = document.querySelector("#btn-translate")

//Trial translator:
var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
//Vulcan translator
// var serverURL="https://api.funtranslations.com/translate/vulcan.json"

function generateURL(){
    
}


function clickHandler(){
    var inputText=txtInput.value;
}

btnTranslate.addEventListener(clickHandler());