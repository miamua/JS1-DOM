'use strict';

//Uppgift 1
//1.
let websiteDiv = document.querySelector('#website')
let p = document.createElement('p');
p.innerText = "Hej från Javacript!";
websiteDiv.append(p);

let p2 = document.createElement('p');
p2.innerText = "What's up?!";
websiteDiv.append(p2);

//2.
document.querySelector('h1').textContent = "Rubrik från Javacript! 😊"

//3.
//<button class="btn changeBg">Change background color here!</button> 
document.querySelector('.changeBg').addEventListener('click', function () {
    document.querySelector('body').style.backgroundColor = '#60b347';
});

//btn.addEventListener("click", () => { document.body.style.background = "green"; });

//4. Extra
let btn = document.createElement('button');
btn.innerHTML = "JS button - Change paragraps color 🎨";
websiteDiv.append(btn);
//document.body.appendChild(btn);

let allParagraphs = document.querySelectorAll('p');
btn.addEventListener("click", () => {
    allParagraphs.forEach((p) => (p.style.color = 'yellow'))
});


//Uppgift 2 

let numbersArr = [2, 5, 10, 15, 20, 25, 30, 50, 60, 92];
numbersArr.forEach((numbers) => {
    let li = document.createElement('li');
    li.innerText = numbers;
    document.getElementById('numbersList').appendChild(li);
});


//Uppgift 2.5 + 2.5a + 2.5b 
let numbersArr2 = [2, 5, 10, 15, 20, 25, 30, 50, 60, 92];
let list = document.getElementById('numbersList');

numbersArr2.forEach((numbers, index) => {
    let li = document.createElement('li');
    li.innerText = numbers;
    list.appendChild(li);

    if (numbers % 2 === 0) {
        li.style.color = 'red';
    } else {
        li.style.color = 'blue';
    }

    if ((index + 1) % 5 === 0) {
        li.style.color = 'purple'
    };
});


//Uppgift 3

let profileCardsArr = [
    {
        name: "AAA",
        age: 19,
        amountOfPets: 2,
        email: "aaa@fake.email.com",
        favoriteAuthor: "John Doe",
        lovesWinter: true
    },
    {
        name: "BBB",
        age: 54,
        amountOfPets: 0,
        email: "bbb@fake.email.com",
        favoriteAuthor: "Jane Doe",
        lovesWinter: false
    },
    {
        name: "CCC",
        age: 23,
        amountOfPets: 5,
        email: "ccc@fake.email.com",
        favoriteAuthor: "John Doe",
        lovesWinter: true
    }

];

let profileDiv = document.querySelector('#profile-cards')
let btnProfile = document.createElement('button');
btnProfile.innerHTML = "Create profile cards";
//document.body.appendChild(btnProfile);
profileDiv.append(btnProfile);

btnProfile.addEventListener("click", () => {
    profileCardsArr.forEach((card) => {
        let cardDiv = document.createElement('div');
        cardDiv.innerText = 'Name: ' + card.name + '\n' +
            'Age: ' + card.age + '\n' +
            'Pets: ' + card.amountOfPets + '\n' +
            'Email: ' + card.email + '\n' +
            'Fav Autor: ' + card.favoriteAuthor + '\n' +
            'Loves winter: ' + card.lovesWinter;
        profileDiv.append(cardDiv);
        cardDiv.style.background = 'black';
        cardDiv.style.color = 'white';
        cardDiv.style.border = '2px solid red';
        cardDiv.style.margin = '50px 50px 10px 0px'; //top right down left
        cardDiv.style.maxWidth = '400px';
        cardDiv.style.padding = '5px 0px 5px 5px';


    })
    disableButton();

});
function disableButton() {
    btnProfile.disabled = true;
}

