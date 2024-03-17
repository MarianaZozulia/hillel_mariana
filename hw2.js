// Task 1
let mark=90;

if (mark<=100 && mark>=90){
    console.log("Your mark is Perfect");
}else if (mark<=89 && mark>=70){
    console.log("Your mark is Good");
}else if (mark<=69 && mark>=50){
    console.log("Your mark is Satisfactory");
}else if (mark<50){
    console.log("Your mark is Unsatisfactory");
}else console.log("Yor mark is out of the range")

// Task 2
let a=10;
let b=6;
let operation='addition';

switch (operation){
    case 'addition':
        console.log("Result of the addition is:", a+b);
        break;
    case 'subtraction':
        console.log("Result of the subtraction is:", a-b);
        break;
    case 'division':
        if(b!==0){
            console.log("Result of the division is:", a/b);}
        else{
            console.log("Zero division error");
        }
        break;
    case 'multiplication':
        console.log("Result of the multiplication is:", a*b);
        break;
    default:
        console.log("You entered an non-exist operation");
        break;
}

//Task 3
let number=3;

let result=(number%2===0) ? console.log("You entered an even number") : console.log("You entered an odd number");