// Import CSS - see line 5 for challenge instructions
import './style.css';

/*
Each step of this challenge will ask you to change and update the content of the HTML.
We'll do all of the editing through JavaScript without changing any of the HTML.
Look at the CSS selectors in order to understand how we might grab some elements which don't have classes or ID's.
*/

// STEP ONE

/*
Grab the two headings from within the `header` tag. 

Alter the content of the `h1` to be your name instead.

Alter the content of the `h3` to give a brief description of you!
*/

// Write your code here...

const header = document.querySelector('#page-header').children;
header[0].textContent = 'Raymond';
header[1].textContent = 'Big Dog';

// STEP TWO

/*
Grab the image from the page. Update its source to another picture. You could download one and add it to the files here or use a url from the web.

Update the alt text to be a meaningful description of your image

Update the content of the `figcaption` to give a description of your image.
*/

// Your code here...

const image = document.querySelector('#page-picture').children;
//console.log(image[0]);
image[1].textContent = 'Me when I was about 4 years Old';
// STEP THREE

/*
In the About Me section, there is currently one <p> tag.

Remove the current <p> tag from the page.

Insert an ordered list with some details about yourself
*/

// Your code here...

const about = document.querySelector('#about-section').children;
const aboutPage = document.querySelector('#about-section');

let text = [
  'May name is Raymond',
  'I live in London',
  'I enjoy Web Development',
  'I Love Marvel movies',
  'I love standup comedy'
];

const oldElement = about[1];
const ul = document.createElement('ol');
//const li = document.createElement('li');
let i = 0;

for( i = 0; i <= text.length; i = i + 1 ){
  var li = document.createElement('li');  // create a new li element
  li.textContent = text[i];        // .textContent is mush shorter than creating a textNode
  ul.appendChild( li );                   // every time append a new item
}

aboutPage.replaceChild(ul, oldElement);

// STEP FOUR

/*
Replace the link within the <a> tag in the final section with a link to your own GitHub profile!
*/

// Your code here...
