//Chap 5



//Question 1
// let num1 = prompt("Enter your first number.");
// let num2 = prompt("Enter your second number.");
// let sum = num1 + num2;
// document.write(" Sum of " + num1 + " and " + num2 + " is " + sum);



//Question 2
// let num1 = prompt("Enter your first number.");
// let num2 = prompt("Enter your second number.");
// let multiple = num1 * num2;
// document.write(" Multiple of " + num1 + " and " + num2 + " is " + multiple);

// let num1 = prompt("Enter your first number.");
// let num2 = prompt("Enter your second number.");
// let divide = num1 / num2;
// document.write(" Division of " + num1 + " and " + num2 + " is " + divide);

// let num1 = prompt("Enter your first number.");
// let num2 = prompt("Enter your second number.");
// let subtract = num1 - num2;
// document.write(" Subtraction of " + num1 + " and " + num2 + " is " + subtract);

// let num1 = prompt("Enter your first number.");
// let num2 = prompt("Enter your second number.");
// let modulus = num1 % num2;
// document.write(" Modulus of " + num1 + " and " + num2 + " is " + modulus);



//Question 3
// let num;
// document.write("Value after variable declaration is " + num + "\n" + "<br>");

// num = 5;
// document.write("Intial value " + num + "\n" + "<br>");

// num++;
// document.write("Value after increment " + num + "\n" + "<br>");

// num += 7;
// document.write("Value after adding 7  is " + num + "\n" + "<br>");

// num--;
// document.write("Value after decreement "+num+"<br>");

// let reminder = num % 3;
// document.write("The reminder is "+reminder);


//Question 4
// let ticketprice = 600;
// let ticketbuying = ticketprice*5;
// document.write("Total cost to buy 5 tickets to a movie is "+ticketbuying+" PKR.");


//Question 5
// let table = 5;
// for (let i = 1; i <=10 ; i++) {
//     document.write(table+"x"+i+"="+table*i+"<br>")   
// };


//Question 6
// let celsius=10;
// let fahrenheitFromCelsius = (celsius*9/5)+32;
// document.write(celsius+" °C "+"is "+fahrenheitFromCelsius+" °F. <br>");


// let fahrenheit=20
// let celsiusFromfahrenheit=(fahrenheit-32)*5/9;
// document.write(fahrenheit+" °F "+"is "+celsiusFromfahrenheit+" °C.");


//Question 7
// let priceitem1=100;
// let priceitem2=150;
// let qualityitem1=200;
// let qualityitem2=250;
// let shippingcharges=300;

// let totalitem1 = priceitem1 + qualityitem1;
// let totalitem2 = priceitem2 + qualityitem2;


// let totalprice= totalitem1 + totalitem2 + shippingcharges;


// document.write("Item 1 Price: $" + priceitem1+"<br>");
// document.write("Item 1 Quality: " + qualityitem1+"<br>");
// document.write("Item 1 Total: $" + totalitem1+"<br>");
// document.write("Item 2 Price: $" + priceitem2+"<br>");
// document.write("Item 2 Quality: " + qualityitem2+"<br>");
// document.write("Item 2 Total: $" + totalitem2+"<br>");

// document.write("Shipping Charges: $" + shippingcharges+"<br>");

// document.write("Total Cost: $" + totalprice);


//Question 8
// let totalnum=1000;
// let numobtain=800;

// let percentage=(numobtain/totalnum)*100;

// document.write("Total Marks ="+totalnum+"<br>");
// document.write("Marks Obtained ="+numobtain+"<br>");
// document.write("Percentage ="+percentage);


//Question 9
// let usamount=10;
// let saudiamount=25;

// let dollarTopkr=277;
// let riyalTopkr=73;

// let totalpkr = (usamount * dollarTopkr) + (saudiamount * riyalTopkr);
// document.write("Total in Pakistan Rupees = "+totalpkr +" PKR.")


//Question 10
// let num=5;
// let num1=(((num+5)*10)/2);
// document.write("Result ="+num1)


//Question 11
// let currentYear=2024;
// let year=2004;

// let age=(currentYear-year);
// let age1=(age-1);
// document.write("Your age is either = "+age+" or "+age1+" years old.")


//Question 12
// let radius=5;
// let pi=3.142;
// let circum= 2*pi*radius;
// let area= pi*(radius*radius);

// document.write("The circumference is "+ circum +"<BR>");
// document.write("The area is "+area)

//Question 13
let snack ="Pizza";
let age = 20;
let maxAge =35;
let amountDay = 2;
let remain=(maxAge-age);
totalAmountneed=(remain*365*amountDay);
document.write("You will need "+totalAmountneed + " snacks to last you until the ripe old age of " +maxAge)