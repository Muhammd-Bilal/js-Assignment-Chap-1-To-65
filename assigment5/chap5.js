var num1 = 3;
var num2 = 5;
var sum = num1 + num2;
var multi = num1 * num2;
var subt  = num1 - num2;
var division = num1 / num2;
var module = num1 % num2;


document.write("The Sum of "+ num1 +" and " +num2 + " is " +sum + "<br>");

document.write("The multi of "+ num1 +" and " +num2 + " is " +multi + "<br>");

document.write("The subt of "+ num1 +" and " +num2 + " is " +subt + "<br>");

document.write("The division of "+ num1 +" and " +num2 + " is " +division + "<br>");

document.write("The module of "+ num1 +" and " +num2 + " is " +module + "<br> <br>");

var c;

document.write("The value after Decleration is " + c + "<br>");

c =5;
document.write("The value after decleration is  "+ c +"<br>");

c= ++c;
document.write("The value after increment is  "+ c +"<br>");

c= c+7
document.write("The value after adition is is  "+ c +"<br>");
c=--c;
document.write("The value after discriminent is  "+ c +"<br> <br>");


// question 4

var ticket = 600,
    quantity = 5,
    total = ticket*quantity;

document.write("<br>The cost of  "+ quantity +" movie ticket is " + total +  "PKR <br> <br>");
//table
for(var i = 1 ; i <=10 ; i++ ) {
   var total= 4*i
    document.write("4 X " + i + " = " + total + "<br>" )

}

// temp converter
 var C = 25;
 var F = C*9/5;
 
document.write("<br>"+C+"C is " +F+ "F")
var F = 70;
var C = (F-32)*5/9;
 document.write("<br>"+F+"F is " +C+ "C");

 document.write("<br> <br> <h1> Shopping Cart <h1> ");

 var item1 = 650,
     item2 = 100,
     quantity1= 3,
     quantity2 = 7;


var total_bill = (item1*quantity1) + (item2*quantity2)+100;

document.write("<h4>Price of Item1 = " + item1 + "<br> Price of item2 = " + item2 + "<br> Quantity Of  = " + quantity1 + "<br> Quantity Of item 2 = " + quantity2 +"<br> Shipping Charges 100rs <br> total price "+ total_bill);

var t_marks = 980;
var ob_mark = 804;
var perc = ob_mark/t_marks;

document.write("<br> <br> <h1> Marksheet <h4> ");
document.write("<br> Total marks = "+ t_marks + "<br> ob_mark = "+ ob_mark + "<br> Percentage = " + perc);

document.write("<br> <br> <h1> Currency Conventer <h4> ");
//currency converter
var dollar = 10,
    riyal = 28,
    pkr_to_dol = dollar * 104.80,
    pkr_to_riy = riyal *  25,
    total_pkr = pkr_to_dol + pkr_to_riy;


document.write("Total Currency in PKR = "+total_pkr);

// MAth expersetion

var num = 45,
    answer = ((num + 5) * 10)/2

// birth Calculator

 var current = 2020,
    birth_year = 2001,
    age = current - birth_year;
    document.write("<br> <br> <h1> Age Converter <h4> ");
    document.write("<br> Current age: " + current + "<br> Birth year: " + birth_year + "<br> Age: " +age)
    

// geometer 

var circle = 20,
    radius = 2 * 3.142,
    area = 3.142*(radius)**2;
    
    document.write("<br> <br> <h1> Geometer <h4> "); 
    document.write("<br> circle: "+ circle + "<br> radius: " + radius + "<br> Area: " + area );


//sanke calculator

var snacke = "chocolate chips",
    current_age = 15,
    max_age = 65,
    snacke_perday = 3,
    total_chips = (max_age-current_age)*365*3

 document.write("<br> <br> <h1> The life time supply Calculator <h4> "); 
    document.write("<br> You will need:  "+ total_chips + " to last you untill the age of  " + max_age );

