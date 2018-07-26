var fridge = [];
var date = [];
var days = [];

function calendar() {

  // page is now ready, initialize the calendar...

  $('#calendar').fullCalendar({
    // put your options and callbacks here
  })

};

function addFood(){
  var food = prompt("Type the name of the food you want to add");
  var date2 = prompt("Type the dat that food expires");
  var date1 = '7/24/2018';
  var i = fridge.length + 0;
  fridge.push(food);
  date.push(date2);
  
  dt1 = new Date(date1);
  dt2 = new Date(date2);
  var diff = Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) -
    Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /
    (1000 * 60 * 60 * 24));
  days.push(diff)
  document.getElementById("dateDiff").innerHTML =
  "Days left: " + days;
}


function create_table(){
  var table = ''
  for (var i = 0; i<fridge.length; i++) {
    table += '<tr>';
      table += '<td>' + fridge[i] + '</td>';
      table += '<td>' + date[i] + '</td>';
    table += '</tr>';
  }
  document.getElementById("tab").innerHTML = ('<table>' + table + '</table>')
}
