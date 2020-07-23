// city name 
var city =  prompt("What's your city name ", "karachi");

if( city  === "karachi"){


alert("welcome to the city of ligth")

} 
else{
    alert("WELCOME To "+ city)
}
// gender
var gender =  prompt("What's your gender ");

if(  gender === "male"){


    alert("Good Morning Sir")
    
    } 
else if( gender === "female") {
        alert("Good Morning ma'ma ")
    }

// signal

var signal =  prompt("What's the color of signal ");

if ( signal === "red"){
    alert("YOU SHOULD STOP")
}
else if ( signal === "green"){
    alert("YOU SHOULD walk")
}
else if ( signal === "yellow"){
    alert("YOU SHOULD ready for walk")
}
// fuel checker

var fuel = +prompt("Enter you fuel")

if ( fuel <= 0.25){
    alert("Please refill your tank")
}
else {
    alert("You SHOULD have enough petrol")
}

// task 6 

var obt_mark1 = +prompt("Enter 1st Subject  obtain marks");
var obt_mark2 = +prompt("Enter 2nd Subject  obtain marks");
var obt_mark3 = +prompt("Enter 3rd Subject  obtain marks");

var mark_obt = obt_mark3 + obt_mark3 + obt_mark3;
var total = 300;
var perc = (mark_obt/total)*100;
var grade;
var remark;
if ( perc >= 80){
    grade = " A-One "
    remark = "Excellent"
}
else if ( perc <= 80 && perc >=70){
    grade = " A "
    remark = "Good"
}
else if ( perc <= 60 && perc >=50){
    grade = " A "
    remark = "You should Improve"
}

else if ( perc <= 50 ){
    grade = " Fail "
    remark = "Fail"
}

document.write("<h2> Marksheet </h2>");
document.write("<br> Obtain Mark: "+ mark_obt);
document.write("<br> Total Marks:  "+ total);
document.write("<br> Grade: "+ grade);
document.write("<br> Percentage: "+ perc);
document.write("<br> Remarks: "+remark);

// task 7 
var secret_no = 6;
var user = +prompt("guess the secret no");
if ( user == secret_no){
 alert("Bingo you guess the right no")   
}
else if(user == secret_no+1){
    alert ("Close enough to the correct answer”")
}
else{
    alert("You guess is wronge")
}
// task 8

var user_input = +prompt("enter No")

if ((user_input % 3) == 0){
    alert("your no is divisble by 3")
}
else {
    alert("Your no is not divisible by 3")
}
// task 9

var user_input = +prompt("enter No to Check  it's even or odd")

if ((user_input % 2) == 0){
    alert("your no is even")
}
else {
    alert("Your no is odd")
}

//10

var temp = +prompt("Enter today's temp ");

if ( temp > 40) {
    
alert("too hot outside")

}
else if ( temp > 30 && temp <40){

    alert("TODAY weather is normal")
}

else if ( temp > 20 && temp <30){

    alert("TODAY weather is cool")
}
else if ( temp > 30 && temp <40){

    alert("OMG! TODAY weather is so cool")
}
// 11

var first_num= +prompt("Enter 1st no");

var sec_num= +prompt("Enter 2nd no");

var operater = prompt("Enter operater")

if (operater === "+"){
    first_num+secret_no
}


else if (operater === "*"){
    first_num*secret_no
}

else if (operater === "/"){
    first_num/secret_no
}

else if (operater === "-"){
    first_num - secret_no
}

