let textPw = document.querySelector("#pw-text");
let displaySize = document.querySelector(".display-pw-size span");
let btnGenerate = document.querySelector(".generate");
let clipboard = document.querySelector(".password svg");

let upper = document.querySelector("#upper");
let lower = document.querySelector("#lower");
let number = document.querySelector("#number");
let symbol = document.querySelector("#symbol");

let passwordAll = '';//

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //26
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";  //26
const numbers = "0123456789"; //10
const symbols = "!@#$%^&*()_+="; //13


addEventListeners();


function addEventListeners(){
    //recibe un parametro click y su funcion
    btnGenerate.addEventListener('click', generatePw);

    clipboard.addEventListener('click', copyPw);
}

function generatePw(){
    //AL LLAMARLO DEVOLBERA UNA LETRA DEL TAMAÑO DE LA VARIABLE
    console.log('ENTER', getUpperCase());
    console.log('ENTER', getLowerCase());
    console.log('ENTER', getNumberCase());
    console.log('ENTER', getSymbolCase());
    passwordAll='';//CADA VEZ QUE INGRESE RESETEARLO A VACIO
    if(upper.checked){
        passwordAll += getUpperCase();
    }
    if(lower.checked){
        passwordAll += getLowerCase();
    }
    if(number.checked){
        passwordAll += getNumberCase();
    }
    if(symbol.checked){
        passwordAll += getSymbolCase();
    }

    //SOLO ENTRA SI HAY ALGUNO CHEQUEADO YA QUE SI NO ENTRARIA A UN CICLO INFINITO
    if(upper.checked || lower.checked || number.checked || symbol.checked){
            completePw();//
    //console.log(passwordAll);
    }

}

function completePw(){
    while(passwordAll.length < parseInt(displaySize.textContent)){
        const numberR =  getRandom();
        if(upper.checked && numberR === 0){
            passwordAll += getUpperCase();
        }
        if(lower.checked && numberR === 1){
            passwordAll += getLowerCase();
        }
        if(number.checked && numberR === 2){
            passwordAll += getNumberCase();
        }
        if(symbol.checked && numberR === 3){
            passwordAll += getSymbolCase();
        }
    }

    console.log(passwordAll);
    textPw.innerHTML = passwordAll;

}


function getRandomNumber(max){
    return Math.floor(Math.random() * max);
}

function getRandom(){
    return Math.floor(Math.random() * 4);
}

function getUpperCase(){
    //LLAMA UN CARACTER ALEATORIO DE UPPERLETTERS
    return upperLetters[getRandomNumber(upperLetters.length)];
}

function getLowerCase(){
    //LLAMA UN CARACTER ALEATORIO DE UPPERLETTERS
    return lowerLetters[getRandomNumber(lowerLetters.length)];
}
function getNumberCase(){
    //LLAMA UN CARACTER ALEATORIO DE UPPERLETTERS
    return numbers[getRandomNumber(numbers.length)];
}
function getSymbolCase(){
    //LLAMA UN CARACTER ALEATORIO DE UPPERLETTERS
    return symbols[getRandomNumber(symbols.length)];
}
//CADA QUE CAMBIE VALOR EN onchange MOSTRARÁ EL VALOR  
function showVal(value){
    console.log(value);
    displaySize.textContent = value;
}


//ICONO COPERAR
function copyPw(e){
    //e.preventDefault(); //EVITA FUNCION DE RECARGAR O REDIRIGIR UN ENLACE
    const password = textPw.textContent;
    if(password){
        //RECUPERAR VALOR
        const textArea = document.createElement('textarea');
        textArea.value = password;
        document.body.appendChild(textArea);//AÑADIMOS AL DOM
        textArea.select();
        document.execCommand("copy");
        textArea.remove();
    }
}