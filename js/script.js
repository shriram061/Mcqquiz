function check()
{
var c=0;

var q1=document.quiz.question1.value;

var q2=document.quiz.question2.value;

var q3=document.quiz.question3.value;

var q4=document.quiz.question4.value;

var q5=document.quiz.question5.value;

var result=document.getElementById('result');

if(q1=='Dibrugarh-Kanyakumari Vivek Express')
{
    c++;
}
if(q2=='Allahabad–New Delhi Humsafar Express')
{
    c++;
}
if(q3=='Kharagpur Div')
{
    c++;
}
if(q4=='Sanskriti Express')
{
    c++;
}
if(q5=='70')
{
    c++;
}
let d=c;

result.textContent=`${c}`;
// document.write("In 5 questions, Your Marks out of 5 is " + d + "<br>"+"<br>"+"<br>"+ "Question1- Vivek Express is the longest running train." +"<br>"+"<br>"+"<br>"+ "Question2- Allahabad–New Delhi Humsafar Express is the longest non stop train." +"<br>"+"<br>"+"<br>"+ "Question3- M S Dhoni worked in Kharagpur Div" +"<br>"+"<br>"+"<br>"+ "Question4- The name of the exhibition train is Sanskriti Express" +"<br>"+"<br>"+"<br>"+ "Question5- There are total of 70 divisions"  +"<br>"+"<br>"+"<br>"+ "RELOAD THE PAGE FOR AGAIN ATTEMPTING THE QUIZ" );
}