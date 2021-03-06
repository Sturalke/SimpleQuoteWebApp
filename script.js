const quoteContainer = document.getElementById("quotecontent");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const newQuoteBtn = document.getElementById("newquote");
//const loader = document.getElementById("loader");

var recentData;

// Get Quote From Forismatic API
async function getQuote() {

  // Showing loading screen
  
  
  
  // We need to use a Proxy URL to make our API call in order to avoid a weird yet specific error
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  const apiUrl = 'https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';

  try {
      // retrieve response from fetch JS function
      const response = await fetch(proxyUrl + apiUrl);
      const data = await response.json();
	  recentData = data;


    // Check if Author field is available, if not replace it with 'Not Available'
    if (data.quoteAuthor === "") {
        authorText.innerHTML = "- Unknown";
    } 
    // If there is a Owner/Author, set the data of the Quote to authorText
    else {
	  // Write somethign here
		authorText.innerHTML = "- " + data.quoteAuthor;
    }

    // Dynamically reduce font size for long quotes
    if (data.quoteText.length > 120) {
      quoteText.classList.add("long-quote");
    } 
     else {
      quoteText.classList.remove("long-quote");
    }

    quoteText.innerHTML = data.quoteText;

    // Stop Loading, Show Quote: write code here
  
  } catch (error) {
        //getQuote();
  }
}