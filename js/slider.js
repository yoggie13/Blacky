var slider = document.getElementById('myRange');
var output = document.getElementById('price');

var gram = parseInt(slider.value);
var price = Math.floor(gram / 200) * 360 + gram % 200 * 2;

output.innerHTML = gram + "g = " + price + "din";

slider.oninput = function() {
    var gram = parseInt(this.value);
    var price = Math.floor(gram / 200) * 360 + (gram % 200) * 2;
    output.innerHTML = gram + "g = " + price + "din";
}

slider.addEventListener("mousemove", function() {
    var x = slider.value;
    var color = 'linear-gradient(90deg,rgb(117,252,117)' + x + '%, rgb(214,214,214)' + x + '%)';
    slider.style.background = color;
})

function openForm() {

}