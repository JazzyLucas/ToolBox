// JavaScript Document
// This is Lucas's first ever javascript
// Get ready lol
function dropDown(category) {
  var string1 = category.toString;
  var x = document.getElementById(string1);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
} 