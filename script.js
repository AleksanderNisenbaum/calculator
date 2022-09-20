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
let resultInput = document.getElementById("result");

let firstNumber = '';
let secondNumber = '';
let mathAction = '';
let total = 0;

let first = 0;
let second = 0;

function func(valueButton){
    let dot_check = '.';
    if(mathAction === '') {
        let count = firstNumber.split(dot_check).length - 1;
        if(count === 1 && valueButton === '.'){valueButton = '';}
        else{firstNumber += valueButton}
        resultInput.value = (firstNumber + ' ' + mathAction + ' ' + secondNumber);
    }
    else{
        let count = secondNumber.split(dot_check).length - 1;
        if(count === 1 && valueButton === '.'){valueButton = '';}
        else{secondNumber += valueButton}
        resultInput.value = (firstNumber + ' ' + mathAction + ' ' + secondNumber);
    }
    console.log(firstNumber, mathAction, secondNumber);

}
input0.onclick = function (){func('0')};
input1.onclick = function (){func('1')};
input2.onclick = function (){func('2')};
input3.onclick = function (){func('3')};
input4.onclick = function (){func('4')};
input5.onclick = function (){func('5')};
input6.onclick = function (){func('6')};
input7.onclick = function (){func('7')};
input8.onclick = function (){func('8')};
input9.onclick = function (){func('9')};
dot.onclick = function (){func('.')};
del.onclick = function (){
    resultInput.value = '';
    firstNumber = '';
    secondNumber = '';
    mathAction = '';
};


function funAction(act){
    mathAction = act;
    console.log(firstNumber, mathAction, secondNumber);
    resultInput.value = (firstNumber + ' ' + mathAction + ' ' + secondNumber);
}
sum.onclick = function (){funAction('+')};
minus.onclick = function (){funAction('-')};
multiple.onclick = function (){funAction('X')};
divide.onclick = function (){funAction('/')};


res.onclick = function (){
    first = Number(firstNumber);
    second = Number(secondNumber);
    if (mathAction === "+"){ total = first + second;}
    if (mathAction === "-"){ total = first - second;}
    if (mathAction === "X"){ total = first * second;}
    if (mathAction === "/"){ total = first / second;}
    firstNumber = String(total);
    secondNumber = '';
    mathAction = '';

    console.log(total, firstNumber, mathAction, secondNumber);

    resultInput.value = total;
}