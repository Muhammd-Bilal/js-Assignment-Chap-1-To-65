var a = 10;
document.write("The value of a is " + a);
document.write("<br>........................................")
a = ++a;
document.write("<br> <br> The value of a after a++ is : " +a);
document.write("<br> Now the value of is : " +a);

a = a++;
document.write("<br> <br> The value of a after ++a is : " +a);
document.write("<br> Now the value of is : " +a);

a =--a;
document.write("<br> <br> The value of a after --a is : " +a);

document.write("<br>  Now the value of is : " +a);

//2

var a = 2, b = 1;

document.write("<br> <br> Value of a: "+ a);
document.write("<br>  Value of b: "+ b);

var result = --a - --b + ++b + b--;
//            1  -   0 +   1 + 1   

document.write("<br>  result: "+ a +"<br><br>");

//greeting msg

user = prompt("Hello users what's your name","user")
alert("Hello, "+user)

//multipication table
user_num = +prompt("Enter number For multiplication Table","5")
for(var i = 1 ; i <=10 ; i++ ) {
    var total= user_num*i
     document.write(user_num+" X " + i + " = " + total + "<br>" )
 
 }

 // marksheet
// subject_1 = prompt("Enter 1st Subject  name");
// subject_2 = prompt("Enter 2nd Subject  name");
// subject_3 = prompt("Enter 3rd Subject  name");

// obt_mark1 = +prompt("Enter 1st Subject  obtain marks");
// obt_mark2 = +prompt("Enter 2nd Subject  obtain marks");
// obt_mark3 = +prompt("Enter 3rd Subject  obtain marks");


 document.write("<table>");
 document.write("<th>Marksheet</th>");
 document.write("<tr> <td> subject </td> <td> obtain marks </td>  <td> total marks </td>         </tr> ");
 document.write("<tr>");
 document.write("<td> 5 </td>")
 
 document.write("<td>4</td>");


 document.write("</tr>");
 document.write("<table>")