var fridge = [];
var date = [];
var days = [];


var dict = {
  'banana': 6,
  'milk': 7,
  'butter': 14,
  'yogurt': 30,
  'bacon': 7,
  'eggs': 21,
  'fish': 2,
  'melon': 7,
  'broccoli': 4,
  'mushrooms': 4,
  'green beans': 4,
  'cabbage': 7,
  'celery': 7,
  'tomatoes': 7,
  'peppers': 7,
  'crackers': 60,
  'mayonnaise': 77,
  'herbs': 180,
  'meat': 4
}


var dict_recipe = {
  'tomato, butter, onion': "tomato soup".link("https://www.inspiredtaste.net/27956/easy-tomato-soup-recipe/")"target="_blank",
  'chicken, lemon': "lemon chicken".link("https://thestayathomechef.com/easy-lemon-chicken/"),
  'chicken, celary, egg noodles' : "chicken noodle soup".link("https://www.allrecipes.com/recipe/26460/quick-and-easy-chicken-noodle-soup/"),
  'green bean' : "Buttery Garlic Green Beans".link("https://www.allrecipes.com/recipe/230103/buttery-garlic-green-beans/"),
  'ground beef' : "40 Ground Beef Recipes".link("https://www.southernliving.com/food/whats-for-supper/ground-beef-recipes"),
  'carrot' : "20 Carrot Recipes".link("https://www.rachaelraymag.com/recipes/20-carrot-recipes"),
  'bell pepper' : "25 Creative & Healthy Ways to Cook with Bell Peppers".link("https://paleogrubs.com/bell-pepper-recipes"),
  'bell peppers' : "25 Creative & Healthy Ways to Cook with Bell Peppers".link("https://paleogrubs.com/bell-pepper-recipes"),
  'apples' : "30 Essential Apple Recipes for Fall".link("https://www.thekitchn.com/30-must-make-apple-recipes-for-fall-223857"),
  'apple' : "30 Essential Apple Recipes for Fall".link("https://www.thekitchn.com/30-must-make-apple-recipes-for-fall-223857")
}


  function calendar() {
  
    // page is now ready, initialize the calendar...
    //document.getElementById("calendar").innerHTML = "It has been reached";
  
    $('#calendar').fullCalendar({
      // put your options and callbacks here
  
    })
  
  };

function addFood(){
  var food = prompt("Type the name of the food you want to add");
  var date2 = prompt("Type the date that food expires", "M/D/YY or idk");
  var date1 = '7/26/2018';
  var i = fridge.length + 0;
  fridge.push(food);

  dt1 = new Date(date1);
  dt2 = new Date(date2);
  var diff = Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) -
    Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /
    (1000 * 60 * 60 * 24));

  if (date2 == 'idk'){
    for (var key in dict){
      if (key == food){
        var myDate = new Date(new Date().getTime()+(dict[key]*24*60*60*1000));
        date.push(myDate)
        days.push(dict[key])
      }
    }
  }
  else {
    date.push(new Date(date2));
    days.push(diff)
  }
}



function create_table(){
  var table = ''
  for (var i = 0; i<fridge.length; i++) {
    table += '<tr>';
      table += '<td>' + fridge[i] + '</td>';
      table += '<td>' + date[i] + '</td>';
      table += '<td>' + days[i] + '</td>';
    table += '</tr>';
  }
  document.getElementById("tab").innerHTML = ('<table>' + table + '</table>')
}





function makeRecipe(){
  var cat = prompt("Type the food you have");
  for (var key in dict_recipe){
    if (cat == key){
      document.getElementById("recip").innerHTML = (dict_recipe[key]);
    }
  }
}
