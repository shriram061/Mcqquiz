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
// alert("Question1- Vivek Express is the longest running train."+'\n'+"Vivek Express travels 4273km from Thiruvanthapuram Central[TVC] to Dibrugarh[DBRG]"+'\n'+ "Question2- Allahabad–New Delhi Humsafar Express is the longest non stop train."+'\n'+"It covers 632km in total at 6hrs5mins" +'\n'+ "Question3- M S Dhoni worked in Kharagpur Div"+'\n'+"Dhoni focused on cricket after his 10th standard. He was a Travelling Ticket Examiner (TTE) at Kharagpur railway station from 2001 to 2003, under South Eastern Railway in Midnapore (W), a district in West Bengal."+'\n'+ "Question4- The name of the exhibition train is Sanskriti Express"+'\n'+"Indian Railways will run an exhibition train Sanskriti Express to celebrate Nobel laureate Rabindranath Tagore’s 150th birth anniversary and showcase his life and philosophy"+'\n'+ "Question5- There are total of 70 divisions" +'\n');
// result.textContent=`${c}`;
alert("Question1- Vivek Express is the longest running train."+'\n'+"Vivek Express travels 4273km from Thiruvanthapuram Central[TVC] to Dibrugarh[DBRG]"+'\n'+ "Question2- Allahabad–New Delhi Humsafar Express is the longest non stop train."+'\n'+"It covers 632km in total at 6hrs5mins" +'\n'+ "Question3- M S Dhoni worked in Kharagpur Div"+'\n'+"Dhoni focused on cricket after his 10th standard. He was a Travelling Ticket Examiner (TTE) at Kharagpur railway station from 2001 to 2003, under South Eastern Railway in Midnapore (W), a district in West Bengal."+'\n'+ "Question4- The name of the exhibition train is Sanskriti Express"+'\n'+"Indian Railways will run an exhibition train Sanskriti Express to celebrate Nobel laureate Rabindranath Tagore’s 150th birth anniversary and showcase his life and philosophy"+'\n'+ "Question5- There are total of 70 divisions" +'\n');
alert("In 5 questions, Your Marks out of 5 is " + d);
// document.write("In 5 questions, Your Marks out of 5 is " + d + "<br>"+"<br>"+"<br>"+ "Question1- Vivek Express is the longest running train." +"<br>"+"<br>"+"<br>"+ "Question2- Allahabad–New Delhi Humsafar Express is the longest non stop train." +"<br>"+"<br>"+"<br>"+ "Question3- M S Dhoni worked in Kharagpur Div" +"<br>"+"<br>"+"<br>"+ "Question4- The name of the exhibition train is Sanskriti Express" +"<br>"+"<br>"+"<br>"+ "Question5- There are total of 70 divisions"  +"<br>"+"<br>"+"<br>"+ "RELOAD THE PAGE FOR AGAIN ATTEMPTING THE QUIZ" );
}
