var form = document.getElementById('convert');
var type = "miles";
document.addEventListener('keydown', function(event) {
    event.preventDefault();
  var key = event.code;

  if (key === "KeyM") {
  type = "Miles";
  document.querySelector('h1').innerHTML = "Convert MILES to KM";
} else if (key === "KeyK") {
  type = "Km";
  document.querySelector('h1').innerHTML = "Convert KM to Miles";
}


});
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  if (type == "Miles") {
    var distance = parseFloat(document.getElementById('distance').value);
    var result = distance * 1.6;
    document.getElementById('h12').innerHTML = result; // Display result
  } else if (type == "Km") {
    var distance = parseFloat(document.getElementById('distance').value);
    var result = distance / 1.6;
    document.getElementById('h12').innerHTML = result; 
  }
});