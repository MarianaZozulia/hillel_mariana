// Task 1

const eurCourse=0.9;
const uahCourse=35;
const gbrCourse=0.8;
let currencyCode='GBR';
let sumUSD=350;
function getCourse(currencyCode){
    if (currencyCode.toUpperCase()==='EUR') return eurCourse;
        else if (currencyCode.toUpperCase()==='UAH') return uahCourse;
            else if (currencyCode.toUpperCase()==='GBR') return gbrCourse;
    else console.log("Your entered an incorrect currency code");
}
function convertCurrency(sumUSD, currency, callback){
    if(sumUSD>0) console.log("Your received sum is:", sumUSD*callback(currency));
        else if(isNaN(sumUSD)) console.log("You entered an incorrect sum");
    else console.log("Your entered sum is negative value");
}
convertCurrency(sumUSD,currencyCode,getCourse);

// Task 2
let day=1;
function getDayOfWeek(day){
    switch(day) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default:
            console.log("You entered a not exist day of the week");
    }
}
getDayOfWeek(day);

//Task 3
function fibonacci(n){
    if (n<=1){
        return n;
    }
    else {
        return fibonacci(n-1)+fibonacci(n-2);
    }
}
console.log(fibonacci(4));

//Task 4

const randomNumber = Math.floor(Math.random() * 10)+1;
let attempts=3;
function guessNumber(attempts) {
    let text = Number(prompt("Enter your number from 1 to 10"));
    if (attempts === 0) {
        console.log("Attempts are passed, you didn't guess");
        return;
    }
    if (isNaN(text) || text === null || text < 1 || text > 10) {
        console.log("Incorrect value, enter your number from 1 to 10 again");
        guessNumber(attempts);
        return;
    }
    if (text === randomNumber) {
        console.log("You guess!");
        return;
    } else if (text < randomNumber) {
        console.log("Too low, attempts remain", attempts-1);
    } else {
        console.log("Too big, attempts remain", attempts-1);
    }
    guessNumber(attempts-1);
}
guessNumber(attempts);



