var rangeSelector = document.getElementById('myRange');
var box = document.querySelector('.anotherbox');

rangeSelector.addEventListener('mousemove', setSpeedValue);

function setSpeedValue() {
  box.style.animationDuration=rangeSelector.value + 's';
  console.log(rangeSelector.value);
}