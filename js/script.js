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
// alert("Question1- Vivek Express is the longest running train."+'\n'+"Vivek Express travels 4273km from Thiruvanthapuram Central[TVC] to Dibrugarh[DBRG]"+'\n'+ "Question2- Allahabad–New Delhi Humsafar Express is the longest non stop train."+'\n'+"It covers 632km in total at 6hrs5mins" +'\n'+ "Question3- M S Dhoni worked in Kharagpur Div"+'\n'+"Dhoni focused on cricket after his 10th standard. He was a Travelling Ticket Examiner (TTE) at Kharagpur railway station from 2001 to 2003, under South Eastern Railway in Midnapore (W), a district in West Bengal."+'\n'+ "Question4- The name of the exhibition train is Sanskriti Express"+'\n'+"Indian Railways will run an exhibition train Sanskriti Express to celebrate Nobel laureate Rabindranath Tagore’s 150th birth anniversary and showcase his life and philosophy"+'\n'+ "Question5- There are total of 70 divisions" +'\n');
// alert("In 5 questions, Your Marks out of 5 is " + d+'\n'+"PLEASE TAKE THE TEST AGAIN IF NOT COMPLETE");
if(d==1)
{
    alert("IN THE 5 QUESTIONS ASKED, YOUR MARKS OUT OF 5 IS " + d+'\n'+"PLEASE TAKE THE TEST AGAIN, YOU HAVE NOT SOLVED 4 QUESTIONS CORRECTLY."+'\n'+"LOW PERFORMANCE- YOU ARE CAPABLE OF SOLVING THE MORE THAN THIS");

}
else if (d==2) {
   
    alert("IN THE 5 QUESTIONS ASKED, YOUR MARKS OUT OF 5 IS " + d+'\n'+"PLEASE TAKE THE TEST AGAIN, YOU HAVE NOT SOLVED 3 QUESTIONS CORRECTLY."+'\n'+"AVERAGE PERFORMANCE- GIVE A TRY AGAIN ");
    
} 
else if(d==3){
    alert("IN THE 5 QUESTIONS ASKED, YOUR MARKS OUT OF 5 IS " + d+'\n'+"PLEASE TAKE THE TEST AGAIN, YOU HAVE NOT SOLVED 2 QUESTIONS CORRECTLY."+'\n'+"GOOD PERFORMANCE- COMMON PAL! HIT THE TARGET OF 5 ON 5");

}
else if(d==4){
    alert("IN THE 5 QUESTIONS ASKED, YOUR MARKS OUT OF 5 IS " + d+'\n'+"PLEASE TAKE THE TEST AGAIN, YOU HAVE NOT SOLVED 1 QUESTIONS CORRECTLY."+'\n'+"VERY GOOD PERFORMANCE- YOUR ARE NEAR! HIT THE TARGET OF 5 ON 5");
    
}
else if(d==5)
{
    alert("IN THE 5 QUESTIONS ASKED, YOUR MARKS OUT OF 5 IS " + d+'\n'+"YOU HAVE DONE IT "+'\n'+"OUTSTANDING MATE!!!!!!!!");

}
    else if(d==0)
{
    alert("IN THE 5 QUESTIONS ASKED, YOUR MARKS OUT OF 5 IS " + d+'\n'+"YOU HAVE TO IMPROVE A LOT MATE!!!!! "+'\n'+"TAKE RETEST ");

}
else
{
alert("ATTEMPT THE QUESTIONS!! YOU HAVE NOT EVEN ATTEMPTED A SINGLE QUESTION");
}
// document.write("In 5 questions, Your Marks out of 5 is " + d + "<br>"+"<br>"+"<br>"+ "Question1- Vivek Express is the longest running train." +"<br>"+"<br>"+"<br>"+ "Question2- Allahabad–New Delhi Humsafar Express is the longest non stop train." +"<br>"+"<br>"+"<br>"+ "Question3- M S Dhoni worked in Kharagpur Div" +"<br>"+"<br>"+"<br>"+ "Question4- The name of the exhibition train is Sanskriti Express" +"<br>"+"<br>"+"<br>"+ "Question5- There are total of 70 divisions"  +"<br>"+"<br>"+"<br>"+ "RELOAD THE PAGE FOR AGAIN ATTEMPTING THE QUIZ" );
}

function myFunction1() {
    document.getElementById("q1a").disabled = true;
    document.getElementById("q1b").disabled = true;
    document.getElementById("q1c").disabled = true;
    document.getElementById("q1d").disabled = true;

  }
  function myFunction2() {
    document.getElementById("q2a").disabled = true;
    document.getElementById("q2b").disabled = true;
    document.getElementById("q2c").disabled = true;
    document.getElementById("q2d").disabled = true;

  }
  function myFunction3() {
    document.getElementById("q3a").disabled = true;
    document.getElementById("q3b").disabled = true;
    document.getElementById("q3c").disabled = true;
    document.getElementById("q3d").disabled = true;

  }
  function myFunction4() {
    document.getElementById("q4a").disabled = true;
    document.getElementById("q4b").disabled = true;
    document.getElementById("q4c").disabled = true;
    document.getElementById("q4d").disabled = true;

  }
  function myFunction5() {
    document.getElementById("q5a").disabled = true;
    document.getElementById("q5b").disabled = true;
    document.getElementById("q5c").disabled = true;
    document.getElementById("q5d").disabled = true;
  }
