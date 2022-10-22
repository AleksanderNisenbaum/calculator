let result = document.getElementById("result");
let calculate = document.getElementById("calculate");

let strOfNumbers = '';
let arrOfStack = [];
let symbol = '';
let action = '';
let resSumMinus = []
function math(num){

    if((Math.sign(num)) === 1){
        strOfNumbers+=num
        console.log(strOfNumbers)
        symbol = '';
    }
    else{
        if((num === '.') && (strOfNumbers !== '') && (strOfNumbers[strOfNumbers.length-1] !== '.')){
            strOfNumbers+=num
            console.log(strOfNumbers)
        }
        if(num !== '.'){
            if(strOfNumbers !== ''){arrOfStack.push(strOfNumbers)}
            strOfNumbers = ''

            console.log(arrOfStack)
            if(action === '/'){
                arrOfStack[arrOfStack.length-3] = arrOfStack[arrOfStack.length-3] / arrOfStack[arrOfStack.length-1]
                arrOfStack.splice((arrOfStack.length-2), 2)
                action = ''
            }
            if(action === 'x'){
                arrOfStack[arrOfStack.length-3] = arrOfStack[arrOfStack.length-3] * arrOfStack[arrOfStack.length-1]
                arrOfStack.splice((arrOfStack.length-2), 2)
                action = ''
            }

            if((num === '-')&&(arrOfStack.length === 0)){strOfNumbers+=num}
            if((symbol === '')&&(arrOfStack.length !== 0)){arrOfStack.push(num)}
            symbol='sim'
            if(num === '/'){action = num}
            if(num === 'x'){action = num}
            console.log(action)
        }
    }


    if(Math.sign(arrOfStack[arrOfStack.length-1]) !== 1){
        let arrValue = arrOfStack
        result.value = arrValue.join('') + strOfNumbers
    }
    else{
        let arrValue2 = arrOfStack
        result.value = arrValue2.join()
    }
    console.log(arrOfStack)
    console.log(strOfNumbers)
}

function calc(array, string){

    function sumMinus(array){
        resSumMinus = Number(array[0])
        for(let i = 0; i < array.length;i += 1 ){
            if(array[i-1] === '+'){resSumMinus += Number(array[i])}
            if(array[i-1] === '-'){resSumMinus -= Number(array[i])}
            result.value = resSumMinus
            arrOfStack = resSumMinus
            console.log(arrOfStack)
        }
        console.log(array)
    }
    if(strOfNumbers !== '') {math('+')
        sumMinus(arrOfStack)
    }
    else{
        sumMinus(arrOfStack)
    }
}
const elements = document.querySelectorAll("div")
elements.forEach(element => {
    element.onclick = () => math(element.dataset.symbol)
});
calculate.onclick = function(){calc(arrOfStack, strOfNumbers)};
