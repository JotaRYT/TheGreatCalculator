// ------------ START-UP ------------ //

// Evaluate the entire expression
export function evaluateExpression(display) {
    try {
        display.textContent = eval(display.textContent.replace('×', '*').replace('÷', '/'));
    } catch (error) {
        display.textContent = 'Error';
    }
}

// ------------ FUNCTIONS ------------ //

// Handle special functions like sin, cos, tan, log
export function handleFunctionClick(display, func, isDegreeMode) {
    const currentValue = parseFloat(display.textContent);

    switch(func) {
        case 'sin':
            display.textContent = Math.sin(toRadians(currentValue, isDegreeMode)).toFixed(8);
            break;
        case 'cos':
            display.textContent = Math.cos(toRadians(currentValue, isDegreeMode)).toFixed(8);
            break;
        case 'tan':
            display.textContent = Math.tan(toRadians(currentValue, isDegreeMode)).toFixed(8);
            break;
        case 'sqrt':
            display.textContent = Math.sqrt(currentValue).toFixed(8);
            break;
        case 'x2':
            display.textContent = Math.pow(currentValue, 2).toFixed(8);
            break;
        case 'log':
            display.textContent = Math.log10(currentValue).toFixed(8);
            break;
        case 'ln':
            display.textContent = Math.log(currentValue).toFixed(8);
            break;
        default:
            break;
    }
}

// Convert degrees to radians
function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}

// Clear display
export function clearDisplay(display) {
    display.textContent = '0';
}

// Delete last digit
export function deleteLastDigit(display) {
    display.textContent = display.textContent.slice(0, -1) || '0';
}
