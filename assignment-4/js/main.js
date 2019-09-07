//In the space below each problem, write the code to answer. This page connects to index.html

/* 1.--------
 Write the JavaScript to display the current day and time in the following format and output it to the html page to the span with an id of "answer1"

 Reference https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-1.php
*/

function question1(){
  var today = new Date();
  var day = today.getDay();
  var daylist = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  console.log("Today is " + daylist[day] + ". ");
  document.write("Today is " + daylist[day] + ". " + "<BR>");

  var hour = today.getHours();
  var minute = today.getMinutes();
  var second = today.getSeconds();
  var ampm = (hour >= 12)? " PM ":" AM ";
    hour = (hour >= 12)? hour - 12: hour;

  if (hour===0 && ampm===' PM ') {
    if (minute===0 && second===0) {
    	hour=12;
    	ampm=' Noon';
    } else {
    	hour=12;
    	ampm=' PM';
    }
   }

   if (hour===0 && ampm===' AM ') {
    if (minute===0 && second===0) {
   		hour=12;
   		ampm=' Midnight';
    } else {
    	hour=12;
   		ampm=' AM';
    }
   }
  console.log("Current Time : "+hour + " : " + minute + " : " + second + ampm);
  document.write("Current Time : "+hour + " : " + minute + " : " + second + ampm);
}

/* 2.--------*/
function question2 (){
  var today = new Date();
  var day =  today.getDate().toString();
    day = day.length > 1 ? day : '0' + day;

  var month = (1 + today.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;

  var year = today.getFullYear();

  console.log(month + "-" + day + "-" + year);
  console.log(month + "/" + day + "/" + year);
  console.log(day + "/" + month + "/" + year);
  document.write(month + "-" + day + "-" + year + "<br>");
  document.write(month + "/" + day + "/" + year + "<br>");
  document.write(day + "/" + month + "/" + year + "<br>");
}
