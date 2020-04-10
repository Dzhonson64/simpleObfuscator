var btn = document.getElementById("button");

btn.addEventListener("click", function(){
    var text = document.getElementById('noObfuscaton').value;
    document.getElementById("obfuscaton").value = obfuscaton(text);
})

function obfuscaton(textCode){
    variables 	= new Map();

    textCode =  textCode.replace(/\s/, "").replace(/((\/{2}.*?\n)|(\/\*.*\*\/))|(?<!(let|var|const|new|function|return))\s/gs, '');

    textCode.match(/(?<=(let|var|const|function)\s)\w+(?=[,;=()])|((?<=\()\S(?!\);)(?=(,?.*\){)))/g).forEach(variable => {
        if (!variables.has(variable)) variables.set(variable, createRandomString(2, 8));
            const reg = new RegExp('(?<=[\\s;,(=<>}])' + variable + '(?=[=;,\\s+-/*()])', 'g');
            textCode = textCode.replace(reg, variables.get(variable));
    });
    console.log(variables);
    console.log(textCode);

    
    return textCode;
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function createRandomString(min, max){
    
    let len = getRandomInt(min, max);
    console.log(len);
    var newStr = "$";
    for (let i = 0; i < len; i++){
        newStr += String.fromCharCode(getRandomInt(97, 122));
    }
    return newStr
}
