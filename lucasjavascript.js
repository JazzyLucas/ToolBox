// JavaScript Document
// This is Lucas's first ever javascript
// Get ready lol
function dropDown(category) {
  var x = document.getElementById(category);
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
