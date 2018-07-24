var fridge = [];
var date = [];
var days = [];

function addFood(){
  var food = prompt("Type the name of the food you want to add");
  var date2 = prompt("Type the dat that food expires")
  var date1 = '7/24/2018'
  fridge.push(food)
  date.push(date2)
  if (food != null) {
        document.getElementById("foods").innerHTML =
        "Fridge: " + fridge;
    }
  if (date2 != null) {
        document.getElementById("dates").innerHTML =
        "Date of expiration: " + date;
    }

  dt1 = new Date(date1);
  dt2 = new Date(date2);
  var diff = Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) -
    Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /
    (1000 * 60 * 60 * 24));
  days.push(diff)
  document.getElementById("dateDiff").innerHTML =
  "Days left: " + days;

}
