// chapter 12 to 13

//task 1
num1 = +prompt("enter first number");
num2 = + prompt("enter 2nd number");

if (num1 > num2){


    alert("First number is biger then 2nd")
}
else if ( num1 < num2){
    alert(" 2nd number is bigger then first one")
}
else{
    alert("both are equal")
}

// task 3
 var num = +prompt("enter number to check")
if (num > 0){


    alert("number is Positive")
}
else if ( num < 0){
    alert(" number is negative")
}
else{
    alert("number is zero")
}
// task 4
var char = prompt("Enter vowel to check")
if (char.length == 1) {
   
    if( char === "a" || char === "e" ||char === "i" ||char === "o" ||char === "u" ){

        alert("it id vowel")
    }

    else {
        alert("its not vowel")
    }

    
  }
// task 5 

var password = prompt("enter password");

var confirm_ = prompt("confirm password")

if ( password == confirm_ ) {
    alert(" you inter correct passwoed")
}
else{
    alert("incorrect password " )
}

// task 6

var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";}
else{
greeting = "Good evening";
}
alert(greeting)