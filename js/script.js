
/*
  Creates an array named quotes that hold objects that hold various quotes 
  and the information around the quotes, such as source, citation and the 
  year they were stated.
 */

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


/*
  Returns a random number between 0 and the given upperBound
 */
function getRandomNumber(upperBound){
  return Math.floor(Math.random() * upperBound);
}

/*
 Returns a random quote object from the quotes array
 */
function getRandomQuote(){
  var random = getRandomNumber(quotes.length);

  return quotes[random];
}


/*
 Returns a random string containing the name of a color
 */

function getRandomColor(){
  var colors = ['gold', 'red', 'blue', 'green', 'orange', 'purple'];
  return colors[getRandomNumber(colors.length)];
}

/*
  Creates a string of text formatted with html tags and class declarations 
  from the properties within 
  a quote object and adds it to the html document connect to this script
 */

function printQuote(){
  var quote = getRandomQuote();

  var quoteToHtml = "";
  quoteToHtml += '<p class="quote">' + quote.quote + '</p>';
  quoteToHtml += '<p class="source">' + quote.source;

  // The following properties are only added to quoteToHtml if they are present within the quote object
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


  // Adds quoteToHtml to the inner html of element that contains the id quote-box
  document.getElementById("quote-box").innerHTML = quoteToHtml;
  // Changes the background color of the body tag and button tag of the html 
  var randomColor = getRandomColor();
  document.getElementById('loadQuote').style = 'background-color: ' + randomColor;
  document.getElementsByTagName('body')[0].style = 'background-color: ' + randomColor;
}


// calls printQuote() every thirty seconds
setInterval(() => {
  printQuote();
}, 30000);

// Adds an on click event listener to an element with the loadQuote id
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
