var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#txt-output");
var btnTranslate = document.querySelector("#btn-translate")

//Trial translator:
var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
//Vulcan translator
// var serverURL="https://api.funtranslations.com/translate/vulcan.json"

function generateURL(text){
    return serverURL + "?" + "text=" + text
}

function errorHandler(error){
    console.log("Error",error);
    alert("Something went wrong!! Please try again later.");
}


function clickHandler(){
    var inputText=txtInput.value;
    fetch(generateURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText=json.contents.translated;
        txtOutput.innerText=translatedText;
    })
    .catch(errorHandler)
}

btnTranslate.addEventListener("click",clickHandler);