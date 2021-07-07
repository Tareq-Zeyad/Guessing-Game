'use strict';

var Name = prompt("What is your name ?");
console.log(Name);
alert ("Welcome to my personal site " + Name);

let score = 0;

let uni = prompt("Am I a university graduated?");
function q1()
{uni = uni.toLowerCase();
if (uni === 'yes' || uni === 'y') {
    console.log('That is correct');
    alert ('Correct I did graduated from Mutah University');
    score++;
}
else if (uni === 'no' || uni === 'n'){
    console.log('oh come on!');
    alert ('Oh come on its been 2 years since I had graduated');
}
else { 
    alert('you didnt answer with yes or no');
}
}
q1();

let books = prompt("do reading books are one of my hobbies?");
function q2(){
    books=books.toLowerCase();

if (books === 'yes' || books === 'y'){
        console.log('reading is a magic way to feed the brain my friend');
        alert('Thats right, I like to read biography, fiction & history');
        score++;
    }
else if (books === 'no' || books === 'n'){
        console.log('I do like reading books');
        alert ('I do enjoy reading & I set annual goal to reach');
    }
else {
    alert('your answer should be yes or no');
}
}
q2();

let driving = prompt("Do I have automatic driving lisence");
function q3(){
    driving=driving.toLowerCase();

if (driving === 'yes' || driving === 'y'){
    alert('Yes I am driving an automatic car');
    score++;
}
else if (driving === 'no' || driving === 'n'){
    alert ('try again')
}
else {
    alert('your answer should be yes or no');
}
}
q3();

let linkedin=prompt('do I have linkedin profile?')
function q4(){
    linkedin=linkedin.toLowerCase();

if (linkedin === 'yes' || linkedin === 'y'){
    alert('Yes I have you can add me');
    score++;
}
else if (linkedin === 'no' || linkedin === 'n'){
    alert ('sorry I did have one & you should too')
}
else {
    alert('your answer should be yes or no');
}
}
q4();

let city=prompt('do I live in Amman?')
function q5(){
    city=city.toLowerCase();

if (city === 'yes' || city === 'y'){
    alert('Yes I do live there');
    score++;
}
else if (city === 'no' || city === 'n'){
    alert ('sorry I am in Amman in the current time')
}
else {
    alert('your answer should be yes or no');
}
}
q5();



function q6(){
    for (let i=1; i<=4; i++){
    let age = prompt('How old am I ?')
    age=parseInt(age);


    if (age > 25){
        alert ('a bit too high');
    
    }
    else if (age < 25){
        alert('a bit low');
    }
    if (i==4 && age != 25){
        alert ('I am actually 25 years old');
    }
    else if (age == 25){
        alert('That is correct');
        score++;
        break;
        
    }
}
}
q6();

let brand=['Mercedes','BMW','Audi'];
function q7(){
    for (let i=1; i<=6; i++){
    let car=prompt('What is my Fav car brand ?')

    if (car == 'Mercedes' ){
        alert('Correct it is on my list, which includes also BMW & Audi');
        score++;
        break;
        
    }
     else if ( car == 'BMW'){
       alert ('Correct it is on my list, which includes also Mercedes & Audi');
       score++;
       break;
       
     }
     
     else if (car == 'Audi'){
        alert ('Correct it is on my list, which includes also Mercedes & BMW');
        score++;
        break;
        
        }
       


    else if (i == 6 && car != brand ){
        alert ('These are my fav car brands: Mercedes, BMW, Audi')
        break;
    } 

}
}
q7();
alert ('You have a score of '+ score +'/7')

alert ("Goodbye then with best of luck Dear " + Name);

