/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/**
 * Create an array with 8 quotes, including their authors.
 * At least one quote must also include a citation and a year.
 */

let quotes = [
  {
    quote:
      "The most damaging phrase in the language is: ‘We’ve always done it this way.’",
    source: "Grace Hopper",
    citation: "From the conference - Keynote speech at the National Press Club",
    year: 1981,
  },
  {
    quote:
      "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    source: "Martin Fowler",
  },
  {
    quote:
      "If you don’t give up, you still have a chance. Giving up is the greatest failure.",
    source: "Ada Lovelace",
  },
  {
    quote:
      "Debugging is like being the detective in a crime movie where you are also the murderer.",
    source: "Filipe Fortes",
  },
  {
    quote:
      "Success is liking yourself, liking what you do, and liking how you do it.",
    source: "Maya Angelou",
    citation: "From the book - Wouldn't Take Nothing for My Journey Now",
    year: 1993,
  },
  {
    quote:
      "The most disastrous thing you can do is to think that you know everything.",
    source: "Mattias Petter Johansson (MPJ)",
  },
  {
    quote:
      "The most important thing is to keep going. No matter how slow, you’re still lapping everyone who isn’t trying.",
    source: "Esther Dyson",
  },
  {
    quote: "Talk is cheap. Show me the code.",
    source: "Linus Torvalds",
  },
];

/**
 * getRandomQuote function: This function generates a random number
 * that will be used as an index for the quotes array.
 */

function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * 8);
  console.log(randomNumber);

  let quoteIndex = quotes[randomNumber];
  console.log(quoteIndex);

  return quoteIndex;
}

/***
 * `printQuote` function
 ***/

function printQuote() {
  let quoteToShow = getRandomQuote();
  let html = `
    <p class="quote">${quoteToShow.quote}</p>
    <p class="source">${quoteToShow.source}
  
  `;

  if (quoteToShow.citation) {
    html += `<span class="citation">${quoteToShow.citation}</span>`;
  }
  if (quoteToShow.year) {
    html += `<span class="year">${quoteToShow.year}</span>`;
  }

  html += `</p>`;

  document.getElementById("quote-box").innerHTML = html;
}

printQuote();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
