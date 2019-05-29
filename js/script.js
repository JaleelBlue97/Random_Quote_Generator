/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/

var quotes = [
  {quote : "I am the Senate.", source : "Emperor Palpatine aka Darth Sidious",
  citation : "Coruscant", year : "19BBY", tags : ['political', 'Fantasy']},
  {quote : "You must have chaos within you to birth to a dancing star.", source : "Friedrich Nietzsche",
  citation : "Thus Spoke Zarathustra", year :  "1883", tags : ['philosophy']},
  {quote : "Few of the birds Maester Aemon had returned as of yet. One found Stannis, though. One found Dragonstone, and a king who still cared."
    , source : "Samwell Tarly"
  , citation : "A Storm of Swords", year : 2000 , tags : ['Adventure', 'Fantasy'] },
  { quote : "You should have gone for the head... \"snap\" ", source : "Thanos"
   , citation : "Avengers: Infinity War", year : 2018, tags : ['Movie', 'CGI', 'Sci-Fi']},
  {quote : "You can lead a horse to water but you can't make it drink", source : "unknown"
  , citation : "Unknown", year : "12th century \"exact date unknown\"", tags : ['Proverb']}
]


/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/


function getRandomNumber(upperBound){
  return Math.floor(Math.random() * upperBound);
}

function getRandomQuote(){
  var random = getRandomNumber(quotes.length);

  return quotes[random];
}



function getRandomColor(){
  var colors = ['gold', 'red', 'blue', 'green', 'orange', 'purple'];
  return colors[getRandomNumber(colors.length)];
}

/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/

function printQuote(){
  var quote = getRandomQuote();

  var quoteToHtml = "";
  quoteToHtml += '<p class="quote">' + quote.quote + '</p>';
  quoteToHtml += '<p class="source">' + quote.source;

  if (quote.citation){
    quoteToHtml += '<span class="citation">' + quote.citation + '</span>';
  }
  if (quote.year){
    quoteToHtml += '<span class="year">' + quote.year + '</span>';
  }

  if (quote.tags && quote.tags.length > 0){
    quoteToHtml += ' <span class="tags">';
    for (var i = 0; i < quote.tags.length; i++){
      quoteToHtml += quote.tags[i];
      if (quote.tags.length > 1){
        quoteToHtml += ", ";
      }
    }
    quoteToHtml += '</span>';
  }
  
  quoteToHtml += '</p>';



  document.getElementById("quote-box").innerHTML = quoteToHtml;
  document.getElementsByTagName('body')[0].style = 'background-color: ' + getRandomColor();
}



setInterval(() => {
  printQuote();
}, 30000);

/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.