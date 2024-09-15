// ------------ START-UP ------------ //

import { evaluateExpression, handleFunctionClick, clearDisplay, deleteLastDigit } from './functions.js';

// Elements
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

// Track the state of the calculator modes (Shift, Alpha, Degrees/Radians)
let shiftMode = false;
let alphaMode = false;
let isDegreeMode = true;

// ------------ EVENTS ------------ //

// Listens to clear, click, del and equals
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonValue = button.textContent;

        if (button.classList.contains('clear')) {
            clearDisplay(display);
        } else if (button.classList.contains('del')) {
            deleteLastDigit(display);
        } else if (button.classList.contains('equals')) {
            evaluateExpression(display);
        } else if (button.classList.contains('btn-function')) {
            handleFunctionClick(display, button.classList[1], isDegreeMode);
        } else if (button.classList.contains('shift')) {
            shiftMode = !shiftMode;
        } else if (button.classList.contains('alpha')) {
            alphaMode = !alphaMode;
        } else if (button.classList.contains('mode')) {
            toggleMode();
            isDegreeMode = !isDegreeMode;
        } else {
            appendToDisplay(display, buttonValue);
        }
    });
});

// ------------ FUNCTION ------------ //

// Displays what is being typed on the "screen"
function appendToDisplay(display, value) {
    if (display.textContent === '0') {
        display.textContent = value;
    } else {
        display.textContent += value;
    }
}
