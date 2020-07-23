// // ======= chapter 25 to 25
// var user_name = prompt("What's your full name ");
// alert("GOOD MORNING, "+ user_name)


// // task 2
// var user_phone = prompt("What's your favraite mobile phone model"),
//     len = user_phone.length;

// document.write("My favraite mobile phone is " + user_phone + "<br> and string length is " + len);    

// //  task 3

// var country = "Pakistan";

// document.write("String : "+ country);
// document.write("<br> Index no of : "+ country.indexOf("n"));

// // task 4

// var country = "Hellow world";

// document.write("String : "+ country);
// document.write("<br> Last occurance of leter L: "+ country.lastIndexOf("l"));
// var country = "Pakistan";
// document.write("String : "+ country);
// document.write("Character at 3rd position is: "+ country.charAt(3));

// // task 6

// var greet = ["Good Morning "],
//     name = [user_name];
//     alert("<br> " +greet.concat(name));

// // task 7


// var city = "hyderbad"
// var replace  = city.replace("hyder","islam")

// document.write("<br> City name " + city + " <br> After replace " + replace)

// task 8

// var city = "Ali and Sami are best friends. They play cricket and football together"

// var replace =city.replace(/and|_/g,'&');

// document.write("<br> <b>Sentance before replacement:</b>  "+city)
// document.write("<br > <b>Sentance after replacement</b>   " + replace)

// task 9

// var value_str = "456";
// var value_num = Number(value_str)

// document.write("Value: " + value_str + "<br> Type: " + typeof value_str);
// document.write("<br>  Value: " + value_num + "<br> Type: " + typeof value_num);


// task 10

// var user = "peanut",
//     user_upper = user.toProperCase();

// document.write("<br> User input: " + user +"<br> Uppercase: " + user_upper);

//task 11

// var value_num = 33.36;


// var value_str = String(value_num)
// var value_str = value_str.replace(/.|_/g,'3')
// document.write("Number: " + value_num );

// document.write("<br>  String: " + value_str );

// var user_name =prompt("Enter User name ")

// if( user_name.indexOf("@") ===-1 || user_name.indexOf(".") ===-1 || user_name.indexOf(",") ===-1 || user_name.indexOf("!") ===-1 ){
//     alert("Your user name is valid")


// }
// else{

//     alert("Please enter valid youser name")
// }


//// =========== chapter 26 to 30


//task 1

// var user_num = +prompt("Enter any positive number");
// if(user_num > 0){
//     document.write("Number: " +user_num)
//     document.write("Round off: " +Math.round(user_num))
//     document.write("Floor value: " + Math.floor(user_num))
//     document.write("celi value: " + Math.ceil(user_num))
//     }
//     else{
//         alert("enter negative number")
//     }

// //task 2

// var user_num = +prompt("Enter nagative number");
// if(user_num <0){
// document.write("Number: " +user_num)
// document.write("Round off: " +Math.round(user_num))
// document.write("Floor value: " + Math.floor(user_num))
// document.write("celi value: " + Math.ceil(user_num))
// }
// else{
//     alert("enter negative number")
// }

//task 3

// var user_num = +prompt("Enter any number")
// document.write("Absolute value: " + Math.abs(user_num))


// task 4

// var random = Math.random()*7
// document.write("Dice value: " + Math.floor(random))

// // task 5
// var random = Math.random()*2
// if ( Math.floor(random)  == 1){

//     document.write("Dice value: head ")

// }

// else {

//     document.write("Dice value: Tails ")

// }

// task 6

// var random = Math.random()*101
// document.write("Random value between 1 to 100 value: " + Math.floor(random))

// task 7

// var wegith = prompt("Enter you wegith in kgs")
// document.write("Your weigth in kg is: " + parseFloat(wegith) + " Kilogram" )


// task 8

// var secret = Math.random()*11
// var user = +prompt("Enter no between 1 to 10")
// if (Math.floor(secret) == user){

//     document.write("Congrats You guess the rigth number")
// }
// else{

//     document.write("Sorry your guess is wrong")
// }

// ====== chapter 31 to 34

//task 1 
var date = new Date()
// document.write(date);

//task 2
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// alert("Current Month Is " +months[date.getMonth()]  )


//task 3

var weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
// alert("Curent Day is " + weekday[date.getDay()])

//task 4

// if (weekday[date.getDay()] == "Sun" || weekday[date.getDay()] == "Sat"){
//     alert("It's fun day")
// }
// else{
//     alert("It's Not fun Day :(")
// }

// // task 5
// if (date.getDay() <= 15   ){
//     alert("It's First fifteen days of the month” if the date is less than 16th of the month un day")
// }
// else{
//     alert("Last days of the month")
// }

// task 6


// var milli = date.getTime()
// var min = milli/60

// document.write("<br>Current Date: " +date)
// document.write("<br>Current Date: " + milli)
// document.write("<br>Current Date: " + min)

// task 7

// var AM_PM = date.getHours()

// if( AM_PM <= 11){
//     alert("It's AM")
// }
// else{
//     alert("Its's PM")
// }

// task 8

// var last_date = new Date(2020, 12, 0)

// alert(last_date)

//task 9

// var date0 = new Date(2015, 0, 0);

// var date1 = new Date(2015, 5, 18);

// var numberOfDays = Math.ceil((date1 - date0) / 8.64e7);
// alert(numberOfDays + " days have passed since 1st Ramadan, 2015 ");

//task 10

// var date0 = new Date(2015, 5, 17);

// var date1 = new Date(2015, 5, 18);

// var numberOfsec = Math.ceil((date1 - date0) /100*60);
// alert(numberOfsec + " days have passed since 1st Ramadan, 2015 ");

//task 11



//  var date2 =date.setHours(-1);

// alert("cureent date " + date)
// alert("1 hour ago it is" +date2)


// task 12
// date.setFullYear(-100);

// alert("cureent date " + date)
// alert("100 year back " +date)

// task 13
// var age = +prompt("What is your age")
// var year = (date.getFullYear())- age

// alert("your date of birth is " +year);

// TASK 14

// var custumer = "Muhammad Bilal",
//     month = months[date.getMonth()],
//     num_unit = 410,
//     charge_per_unit = 16,
//     bill = num_unit* charge_per_unit,
//     bill_due_date = bill +450;
// date.setDate(8)
// document.write("<h2> K-Electric Bill</h2>") 
// document.write("<br>Custumer Name: "+ custumer)   
// document.write("<br>Month: "+ month)
// document.write("<br> Due Date "+ date)
// document.write("<br>Number of unit: "+ num_unit)
// document.write("<br>Charges per unit: "+ charge_per_unit)
// document.write("<br>bill "+ num_unit +"(due date)" )
// document.write("<br>bill after due date: "+ bill_due_date)


// ============= chapter 35-38
// task 1
// function Current_Date(){

//     var date = new Date()
//     alert(date)
// }
// Current_Date()

// // task 2
// var first_name = prompt("What is your name"),
//     last_name  = prompt("what is you last name")
// function greet_user(first_name, last_date){

//     alert("Good Morning, " + first_name + " " + last_name)
// }

// greet_user(first_name,last_name)

// //task 3
// var num1 = +prompt("Enter first number") 
// var num2 = +prompt("Enter 2nd number")

// function add (num1,num2){
//     alert(num1+num2)
// }

// add(num1)

// //task 4

// var num1 = +prompt("Enter first number") 
// var num2 = +prompt("Enter 2nd number")
// var operater = ("enter operater")

// function calculater(num1,num2,operater){

//     if (operater === "+"){
//         result =num1 + num2
//         alert(result)
//     }


// else if (operater === "*"){
//     result = num1 * num2
//     alert(result)
// }

// else if (operater === "/"){
//     result = num1 / num2
//     alert(result)
// }

// else if (operater === "-"){
//     result =num1 - num2
//     alert(result)
// }
// else{
//     alert("Enter correct operater")
// }
// }

// calculater(num1,num2,operater)

// // task 5
// var num1 = +prompt("Enter first number")
// function squ(num1){
//     relsult = num1**2
//     alert(result)
// }

// squ(num1)
// //task 6
// var num1 = +prompt("Enter first number")
// function factorialize(num) {
//     var result = num;
//     if (num === 0 || num === 1) 
//       return 1; 
//     while (num > 1) { 
//       num--;
//       result *= num;
//     }
//     alert( result);
//   }
//   factorialize(num1);

// // task7
// var start = +prompt("Enter your number where you want to start counting")
// var end = +prompt("enter ending number")
// function counting(start,end){

//     for(var i =start ; i <= end; i++ ){
//         document.write("<br>" + i )
//     }
// }

// // counting(start,end)
//// task 8
// function hypo(base,perp){
//    function squr(num){
//        squire=num**2
//        return squire
//    }
//    result = squr(base)*squr(perp)
//    alert("hypotnies is: "+result)
// }

// hypo(34,54)

//task9

// function area(width,height){
//  area = width*height
//  return area
// }

// alert("Area is eaqual to "+ area(56,34))

// task 10

// function palindrome(str) {

//     str = str.toLowerCase()
//     var len = str.length;
//     for (var i = 0; i < len/2; i++) {
//       if (str[i] !== str[len - 1 - i]) {
//           return false;
//       }
//     }
//     return true;
//    }
//    alert(palindrome("eye"));


// task11

// function uppercase(str) {

//     result = str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
//     alert(result)
// }

// uppercase("my name is Bilal")


// task 12

// function findLongestWord(str) {
//     var strSplit = str.split(' ');
//     var longestWord = 0;
//     for(var i = 0; i < strSplit.length; i++){
//       if(strSplit[i].length > longestWord){
//       longestWord = strSplit[i].length;
//        }
//     }
//     return longestWord;
//   }
//  alert( findLongestWord("web development course"))


// task 13
function countOccurences(string, word) {
   return string.split(word).length - 1;
}
var text="We went down to the stall, then down to the river."; 
var count=countOccurences(text,"we"); // 2
alert(count)