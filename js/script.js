/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator created by  adrian (:
******************************************/


// This is a collection of quotes with sources, citations, and year if found.this is achieved by using an array that contains objects 

var quotes = [
  {
quote:" before you judge a man, walk a mile in his shoes. After that who cares?... He’s a mile away and you’ve got his shoes! ",source:'Billy Connolly',citation:'',year:''
},

{quote:" The best thing about the future is that it comes one day at a time ",source:'Abraham Lincoln',citation:'',year:''
},

{quote:" Anyone who has ever made anything of importance was disciplined ",source:' Andrew Hendrixson ',citation:'',year:''
},

{quote:" Don’t spend time beating on a wall, hoping to transform it into a door ",source:' Coco Chanel ',citation:'',year:''
},

{quote:" Creativity is intelligence having fun ",source:' Albert Einstein ',citation:'',year:''
},

{quote:" Optimism is the one quality more associated with success and happiness than any other ",source:' Brian Tracy ',citation:'',year:''
},

{quote:" Always keep your eyes open. Keep watching. Because whatever you see can inspire you ",source:'  Grace Coddington ',citation:'',year:''
},
  {quote:" The only way out of the labyrinth of suffering is to forgive ",source:'  john green ',citation:'looking for alaska',year:'2019'
},
  {quote:" We accept the love we think we deserve ",source:'  Stephen Chbosky ',citation:'The Perks of Being a Wallflower',year:'2012'
}
]

// The purpose of this function is to generate a random number that corresponds to the index value of a quote 
function getRandomQuote (){
  var randomNumber = Math.floor(Math.random() * quotes.length); 
  var arrayObject = quotes[randomNumber];

  return (arrayObject);
  
}


// This is a function that displays the generated quote by using HTML and checks to see if theirs additional properties that it can display
function printQuote(){
  let quote = getRandomQuote();
  let HTML = ``
  HTML += `<p class="quote">${quote['quote']}</p>
           <p class="source">${quote['source']}`
  if(quote['citation']){
    HTML += `<span class="source">${quote['citation']}</span>`;
  }
  if(quote['year']){
    HTML+= `<span class="year">${quote["year"]}</span>`;
  }
  HTML += `</p>`
  document.getElementById('quote-box').innerHTML = HTML;
  return HTML;
}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
