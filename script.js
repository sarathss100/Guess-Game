'use strict';

let number = Math.trunc( Math.random() * 20 ) + 1;

let score = 5;
document.querySelector(".score").textContent = score;

let highScore = 0;
document.querySelector(".highscore").textContent = highScore;

document.querySelector('.check').addEventListener
('click', function() {
   const guess = Number(document.querySelector(".guess").value);
   if (!guess) {
      document.querySelector(".message").textContent = `👹No number!`
   } else if ( guess === number ) {
      document.querySelector(".message").textContent = `Your gussed it Right!`;
      score++;
      document.querySelector(".score").textContent = score;
      document.querySelector(".number").textContent = number;
      document.querySelector("body").style.backgroundColor = '#60b347';
      document.querySelector(".number").style.width = '30rem';
      if ( highScore < score ) {
         highScore = score;
         document.querySelector(".highscore").textContent = highScore;
      }
      document.querySelector(".next").addEventListener('click', function( ) {
         if ( score === 0 ) return document.querySelector(".message").textContent = `Game over!`;
         number = Math.trunc( Math.random() * 20 ) + 1;
         document.querySelector(".message").textContent = `Let's see... guess this then...`;
         document.querySelector(".guess").value = '';
         document.querySelector("body").style.backgroundColor = '#222';
         document.querySelector(".number").textContent = '?';
         document.querySelector(".score").textContent = score;
      });
   } else if ( guess > number ) {
      if ( score > 0 ) {
         document.querySelector(".message").textContent = `Too High!`;
         score--;
         document.querySelector(".score").textContent = score;
      } else {
         document.querySelector(".message").textContent = `Game over!`;
      }
   } else if ( guess < number ) {
      if ( score > 0 ) {
         document.querySelector(".message").textContent = `Too Low!`;
         score--;
         document.querySelector(".score").textContent = score;
      } else {
         document.querySelector(".message").textContent = `Game over!`;
      }
   }
});

document.querySelector(".again").addEventListener('click', function( ) {
   score = 5;
   document.querySelector(".score").textContent = score;
   number = Math.trunc( Math.random() * 20 ) + 1;
   document.querySelector(".message").textContent = `Start guessing...`;
   document.querySelector(".guess").value = '';
   document.querySelector("body").style.backgroundColor = '#222';
   document.querySelector(".number").textContent = '?';
});


