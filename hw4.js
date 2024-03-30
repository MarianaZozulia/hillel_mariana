// Task 1

let value="kjkjk"/8;
function customIsNaN(value) {
    if(typeof value!=='number' || value!==value) {
        return true;
    }else return false;
}
console.log(customIsNaN(value));

//Task 2
let count=16;
function checkProbabilityTheory(count){
    let evenNumbersCount=0;
    let oddNumbersCount=0;
    console.log("Count of generated numbers:", count);
    for(let i=0;i<count;i++){
        let value=Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
        if(value%2===0){
            evenNumbersCount+=1;
        }else oddNumbersCount+=1;
    }
    console.log("Count of even numbers:", evenNumbersCount);
    console.log("Count of odd numbers:", oddNumbersCount);
    let evenPercentage=(evenNumbersCount/count)*100;
    let oddPercentage=(oddNumbersCount/count)*100;
    console.log("Percentage even numbers to odd numbers:",evenPercentage.toFixed(2) + "% to " + oddPercentage.toFixed(2) + "%");
}
checkProbabilityTheory(count);

//Task 3
let from=1;
let to=100;
function calculateSum(from,to){
    let sum=0;
    for (let i=from;i<to+1;i++){
        let value=i;
        if(value%3!==0){
            sum+=value;
        }

    }
    console.log("Sum:", sum);
}
calculateSum(from,to);

//Task 4
function sumIntegersInString(str) {
    let sum = 0;
    let tempInt = '';
    let isNegative = false;

    for (let i = 0; i < str.length; i++) {
        let strElement = str[i];
        if (!isNaN(strElement) || strElement === '-') {
            tempInt += strElement;
        } else if (tempInt !== '') {
            sum += parseInt(tempInt);
            tempInt = '';
            isNegative = false;
        }
        if (strElement === '-' && isNaN(str[i+1])) {
            isNegative = true;
        } else if (strElement === ' ' && tempInt !== '') {
            sum += parseInt(tempInt);
            tempInt = '';
            isNegative = false;
        }
    }
    if (tempInt !== '') {
        sum += parseInt(tempInt);
    }
    if (isNegative) {
        sum -= parseInt(tempInt);
    }
    return sum;
}

console.log(sumIntegersInString("123.45px-67 8.9"));