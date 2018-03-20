function randomQuote(){
  
  var random = Math.floor(Math.random() * quotes.length); 
  
  document.querySelector("h2").innerHTML = quotes[random]; 
  
}

var quotes = [
  'You\'re like a breath of fresh air',
  'There\'s ordinary, and then there\'s you.',
  'You\'re even better than a unicorn, because you\'re real',
  'You should be thanked more often. So thank you!',
  'Being around you is like being on a happy little vacation',
  'You could survive a Zombie apocalypse',
  'You\'re more fun than bubble wrap',
  'Everything would be better if more people were like you!',
  'You were cool way before hipsters were cool',
  'Wanting to be someone else is a waste of the person you are',
   'You\'re awsome. Don\'t let anyone tell you otherwise',
   'Love yourself as if you were a rainbow with gold at both ends',
   'You\'re a legend!',
  'You deserve a hug right now',
  'Is that your picture next to "charming" in the dictionary?',
  'On a scale from 1 to 10, you\'re an 11',

];

