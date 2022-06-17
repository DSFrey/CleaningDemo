'use strict';
console.log('app js file is connected');

function iscolor(strcolor) {
    let s = new Option().style;
    s.color = strcolor;
    return s.color == strcolor;
}

function askcolor() {
    let color = prompt('What color do you want?').toLowerCase();
    if(iscolor(color)){
        document.getElementById('background').style.backgroundColor = color;
    } else {
    alert('I do not know that color');
    }
}

function guessingGame() {
    let difficulty;
    let target;
    let attempts = 0;
    let guess;
    do  {
        difficulty = parseInt(prompt('How many numbers do you want to guess from?'));
        if (isNaN(difficulty)) {
            alert('That is not a number. Stop being difficult.');
        }
    } while(isNaN(difficulty));

    target = Math.floor(Math.random() * (difficulty)) + 1;
    do {
        guess = parseInt(prompt('Guess a number between 1 and ' + difficulty + '.'));
        attempts++;
        if (isNaN(guess)) {
            alert('That is not a number. Stop being difficult.');
        }
    } while(target != guess);
    if(attempts == 1) {
        alert('Wow! You guessed it on your first try!');
    } else if(attempts < 5) {
        alert('That\'s right! It took you ' + attempts + ' guesses.');
    } else {
        alert('Ugh, finally. It took you ' + attempts + ' guesses.');
    }
}

function rate() {
    console.log('It is running');
    let rating = parseInt(prompt('On a scale of 1 to 10, how clean are we?'));
    let ratingOutput = '';
    while (isNaN(rating)) {
        rating = parseInt(prompt('That is not a number.\nOn a scale of 1 to 10, how clean are we?'));
    }
    if (rating > 11) {
        alert('Thanks for the enthusiasm, but it is a scale of 1 to 10')
        for(let i = 1; i <= 10; i++) {
            ratingOutput += '<img src="images/CleaningBucket.png" />';
            ratingOutput += i;
        }
        return document.getElementById('aboutMain').innerHTML = ratingOutput;
    } else if (rating == 11) {
        for(let i = 1; i <= 10; i++) {
            ratingOutput += '<img src="images/CleaningBucket.png" />';
            ratingOutput += i;
        }
        ratingOutput += '<img src="images/spinalTap.gif" />';
        ratingOutput += 11;
        return document.getElementById('aboutMain').innerHTML = ratingOutput;
    }
    for(let i = 1; i <= rating; i++) {
        ratingOutput += '<img src="images/CleaningBucket.png" />';
        ratingOutput += i;
    }
    return document.getElementById('aboutMain').innerHTML = ratingOutput;
}