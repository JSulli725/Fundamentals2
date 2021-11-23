/* INTERVIEW PREP WARMUP #2  */

/* 1. Countdown

Create a function that accepts a number as an input.
Return a new array that counts down by one, from the number
(as array’s ‘zeroth’ element) down to 0 (as the last element).
How long is this array?*/

function countdown(num){
    var newArray = [];
    for(var n = num;n >= 0; n--){
        newArray.push(n);
    }
    console.log("1. here's the array: " + newArray);
    return newArray;
}
countdown(5);

/* 2. Print and Return

Your function will receive an array with two numbers.
Print the first value, and return the second.*/

function firstPlusLength(arr){
    var firstPlusLength = arr[0] + arr.length;
    console.log("2. here's the first plus length: " + firstPlusLength);
    return firstPlusLength;
}

var thisArray = [3, 8, 2, 5, 10, 53, 3]
firstPlusLength(thisArray);


/* Values Greater than Second

For [1,3,5,7,9,13], print values that are greater than its 2nd value.
Return how many values this is.*/

function greaterThanSecondVal(arr){
    var count = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > arr[1]){
            count++;
            console.log("3. this is greater than second val: " + arr[i]);
        } else {
            continue;
        }
    }
    console.log("total greater than second val (array[1]): " + count)
    return count;
}

var thisArray = [1,3,5,7,9,13]
greaterThanSecondVal(thisArray);

/* This Length, That Value

Given two numbers, return array of length num1 with each value num2.
Print "Jinx!" if they are same.*/

function arrayMaker(num1, num2){
    var newArray2 = [];
    if(num1 == num2){
        console.log("Jinx!");
    }
    for(var i = 0; i < num1; i++){
        newArray2.push(num2);
    }
    console.log("4. here's the array: " + newArray2);
    return newArray2;
}
arrayMaker(2, 5);

/*Fit the First Value

Your function should accept an array.
If value at [0] is greater than array’s length, print "Too big!";
if value at [0] is less than array’s length, print "Too small!";
otherwise print "Just right!".*/

function fitValue(arr){
    arrVal = arr[0];
    if(arrVal > arr.length){
        console.log("5. Too big!")
    } else if (arrVal < arr.length) {
        console.log("5. Too small!")
    } else {
        console.log("5. Just right!")
    }
}

fitValue([6, 4, 5, 7, 8]) /* too big!*/
fitValue([4, 4, 5, 7, 8]) /* too small!*/
fitValue([5, 4, 5, 7, 8]) /* just right!*/


/* Fahrenheit to Celsius

Kelvin wants to convert between temperature scales.
Create fahrenheitToCelsius(fDegrees) that accepts a number of degrees
in Fahrenheit and returns the equivalent temperature as expressed in Celsius degrees.
For review, Fahrenheit = (9/5 * Celsius) + 32.*/

function celsiusToFahrenheit(fDegrees){
    var celsius = (fDegrees - 32) * 5 / 9;
    console.log(celsius);
    return celsius;
}

celsiusToFahrenheit(12);

