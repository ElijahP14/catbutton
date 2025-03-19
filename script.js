let count = 0;

const button = document.querySelector("button");
const counterDisplay = document.getElementById("clicks");

function btnPressed() {
    count++;
    counterDisplay.textContent = count;
}

button.addEventListener("click", btnPressed);

const redSlider = document.getElementById("rangeRed");
const greenSlider = document.getElementById("rangeGreen");
const blueSlider = document.getElementById("rangeBlue");

function updateBackgroundColor() {
    const red = redSlider.value;
    const green = greenSlider.value;
    const blue = blueSlider.value;

    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

redSlider.addEventListener("input", updateBackgroundColor);
greenSlider.addEventListener("input", updateBackgroundColor);
blueSlider.addEventListener("input", updateBackgroundColor);