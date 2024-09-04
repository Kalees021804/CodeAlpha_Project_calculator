function pressButton(value) {
    const display = document.getElementById('display');
    if (display.value === 'Error') {
        display.value = value;
    } else {
        display.value += value;
    }
}

function resetDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value) || '0';
    } catch {
        display.value = 'Error';
    }
}
