'use strict';

var Name = prompt("What is your name ?");
console.log(Name);
alert ("Welcome to my personal site " + Name);

let uni = prompt("Am I a university graduated?");
uni = uni.toLowerCase();
if (uni === 'yes' || uni === 'y') {
    console.log('That is correct');
    alert ('Correct I did graduated from Mutah University');
}
else if (uni === 'no' || uni === 'n'){
    console.log('oh come on!');
    alert ('Oh come on its been 2 years since I had graduated');
}
else { 
    alert('you didnt answer with yes or no');
}

let books = prompt("do reading books are one of my hobbies?");
books=books.toLowerCase();

if (books === 'yes' || books === 'y'){
        console.log('reading is a magic way to feed the brain my friend');
        alert('Thats right, I like to read biography, fiction & history');
    }
else if (books === 'no' || books === 'n'){
        console.log('I do like reading books');
        alert ('I do enjoy reading & I set annual goal to reach');
    }
else {
    alert('your answer should be yes or no');
}

let driving = prompt("Do I have automatic driving lisence");
driving=driving.toLowerCase();

if (driving === 'yes' || driving === 'y'){
    alert('Yes I am driving an automatic car');
}
else if (driving === 'no' || driving === 'n'){
    alert ('try again')
}
else {
    alert('your answer should be yes or no');
}

let linkedin=prompt('do I have linkedin profile?')
linkedin=linkedin.toLowerCase();

if (linkedin === 'yes' || linkedin === 'y'){
    alert('Yes I have you can add me');
}
else if (linkedin === 'no' || linkedin === 'n'){
    alert ('sorry I did have one & you should too')
}
else {
    alert('your answer should be yes or no');
}

let city=prompt('do I live in Amman?')
city=city.toLowerCase();

if (city === 'yes' || city === 'y'){
    alert('Yes I do live there');
}
else if (city === 'no' || city === 'n'){
    alert ('sorry I am in Amman in the current time')
}
else {
    alert('your answer should be yes or no');
}


alert ("Goodbye then with best of luck Dear " + Name);