var events = [
  {'Date': new Date(2018, 7, 7), 'Title': 'Tomatoes'},
  {'Date': new Date(2018, 8, 18), 'Title': 'Fish', 'Link': 'https://garfield.com'},
  {'Date': new Date(2018, 7, 27), 'Title': 'Watermelon', 'Link': 'https://www.google.com.au/#q=anniversary+gifts'},
];

var settings = {};
var element = document.getElementById('caleandar');
caleandar(element, events, settings);
