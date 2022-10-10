let res = document.getElementById("res");
let dot = document.getElementById("dot");
let input0 = document.getElementById("input0");
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");
let input4 = document.getElementById("input4");
let input5 = document.getElementById("input5");
let input6 = document.getElementById("input6");
let input7 = document.getElementById("input7");
let input8 = document.getElementById("input8");
let input9 = document.getElementById("input9");
let sum = document.getElementById("sum");
let minus = document.getElementById("minus");
let multiple = document.getElementById("multiple");
let divide = document.getElementById("divide");
let del = document.getElementById("del");
let result = document.getElementById("result");


input0.onclick = function (){createString('0')};
input1.onclick = function (){createString('1')};
input2.onclick = function (){createString('2')};
input3.onclick = function (){createString('3')};
input4.onclick = function (){createString('4')};
input5.onclick = function (){createString('5')};
input6.onclick = function (){createString('6')};
input7.onclick = function (){createString('7')};
input8.onclick = function (){createString('8')};
input9.onclick = function (){createString('9')};
sum.onclick = function (){createString('+')};
minus.onclick = function (){createString('-')};
multiple.onclick = function (){createString('x')};
divide.onclick = function (){createString('/')};
dot.onclick = function (){createString('.')};

res.onclick = function (){calc(result.value)};

function createString(num) {
    let flag1 = 0;
    let flag2 = 0;

    if((result.value.length === 0) &&
        (num === '.' || num === '+' || num === '-' || num === '/' || num === 'x'))

    {result.value = result.value
        flag1 = 1;}

    if(((result.value[result.value.length - 1] === '+') ||
            (result.value[result.value.length - 1] === '.') ||
            (result.value[result.value.length - 1] === '-') ||
            (result.value[result.value.length - 1] === '/') ||
            (result.value[result.value.length - 1] === 'x')) &&
        (num === '.' || num === '+' || num === '-' || num === '/' || num === 'x'))
    {result.value = result.value
        flag2 = 1;}

    if((flag1 != 1) && (flag2 != 1)){
        result.value += num;
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

    function math(arrSymbols, sign, i){
        arrSymbols[i-2] = eval(Number(arrSymbols[i-2]) + sign + Number(arrSymbols[i]))
        arrSymbols.splice(i-1, 2);
        console.log(arrSymbols)
    }

    let j = 0
    let arrLength = (arrSymbols.length-1)/2
    while(j < arrLength){
        console.log(j)
        for (let i in arrSymbols){
            if (arrSymbols[i-1] === '/'){math(arrSymbols, '/', i); break;};
            if (arrSymbols[i-1] === 'x'){math(arrSymbols, '*', i); break;};
        }
        j++;
    }

    j = 0;
    arrLength = (arrSymbols.length-1)/2
    while(j < arrLength){
        for (let i in arrSymbols){
            if (arrSymbols[i-1] === '+'){math(arrSymbols, '+', i); break;};
            if (arrSymbols[i-1] === '-'){math(arrSymbols, '-', i); break;};
        }
        j++;
    }

    result.value = arrSymbols;
}

del.onclick = function (){result.value = ''};

