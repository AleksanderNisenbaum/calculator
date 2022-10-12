const res = document.getElementById("res");
const dot = document.getElementById("dot");
const input0 = document.getElementById("input0");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const input3 = document.getElementById("input3");
const input4 = document.getElementById("input4");
const input5 = document.getElementById("input5");
const input6 = document.getElementById("input6");
const input7 = document.getElementById("input7");
const input8 = document.getElementById("input8");
const input9 = document.getElementById("input9");
const sum = document.getElementById("sum");
const minus = document.getElementById("minus");
const multiple = document.getElementById("multiple");
const divide = document.getElementById("divide");
const del = document.getElementById("del");
let result = document.getElementById("result");
console.log(result);

input0.onclick = () => modifyExpression('0');
input1.onclick = () => modifyExpression('1');
input2.onclick = () => modifyExpression('2');
input3.onclick = () => modifyExpression('3');
input4.onclick = () => modifyExpression('4');
input5.onclick = () => modifyExpression('5');
input6.onclick = () => modifyExpression('6');
input7.onclick = () => modifyExpression('7');
input8.onclick = () => modifyExpression('8');
input9.onclick = () => modifyExpression('9');
sum.onclick = () => modifyExpression('+');
minus.onclick = () => modifyExpression('-');
multiple.onclick = () => modifyExpression('x');
divide.onclick = () => modifyExpression('/');
dot.onclick = () => modifyExpression('.');

res.onclick = () => calc(result.value);

function modifyExpression(num) {
    let stringStartIndicator = 0;
    let indicatorRepetitionSigns = 0;

    if((result.value.length === 0) &&
        (num === '.' || num === '+' || num === '/' || num === 'x')){
        result.value = result.value;
        stringStartIndicator = 1;}

    let lastSymbolString = result.value[result.value.length - 1];
    if(((lastSymbolString === '+') ||
            (lastSymbolString === '.') ||
            (lastSymbolString === '-') ||
            (lastSymbolString === '/') ||
            (lastSymbolString === 'x')) &&
        (num === '.' || num === '+' || num === '-' || num === '/' || num === 'x'))
        {result.value = result.value;
        indicatorRepetitionSigns = 1;}

    if((stringStartIndicator === 0) && (indicatorRepetitionSigns === 0)){
            if ((result.value.length) < 15){
                result.value += num;
            }
        }
    console.log(result.value);
}

function calc(resultValue){
    let arrSymbols = [];
    let str1 = '';
    for (let i in resultValue){
        if((resultValue[i] === '-')||
            (resultValue[i] === '+')||
            (resultValue[i] === 'x')||
            (resultValue[i] === '/')){
            arrSymbols.push(str1);
            str1 = '';
            str1 = resultValue[i];
            arrSymbols.push(str1);
            str1 = '';
        }
        else{
            str1 += resultValue[i];
        }
    }
    arrSymbols.push(str1);
    console.log(arrSymbols);


    let j = 0
    let arrLength = (arrSymbols.length-1)/2
    while(j < arrLength){
        console.log(j)
        for (let i in arrSymbols){
            if (arrSymbols[i-1] === '/'){arrSymbols[i-2] = Number(arrSymbols[i-2]) / Number(arrSymbols[i])
                arrSymbols.splice(i-1, 2); break}

            else if (arrSymbols[i-1] === 'x'){arrSymbols[i-2] = Number(arrSymbols[i-2]) * Number(arrSymbols[i])
                arrSymbols.splice(i-1, 2); break}
        }
        j++;
    }

    j = 0;
    arrLength = (arrSymbols.length-1)/2
    while(j < arrLength){
        for (let i in arrSymbols){
            if (arrSymbols[i-1] === '+'){arrSymbols[i-2] = Number(arrSymbols[i-2]) + Number(arrSymbols[i])
                arrSymbols.splice(i-1, 2); break}

            else if (arrSymbols[i-1] === '-'){arrSymbols[i-2] = Number(arrSymbols[i-2]) - Number(arrSymbols[i])
                arrSymbols.splice(i-1, 2); break}
        }
        j++;
    }

    result.value = arrSymbols;
}

del.onclick = function (){result.value = ''};

