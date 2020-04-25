let calculInput = document.getElementById('calculInputCurrent');
let previousNumberText = document.getElementById('calculInputPrevious');

let currentNumber = null;
let previousNumber = null;
let operator = null;
let result;
let isCalculate = false;
let isNegativeCurNum = false;

let plusButton = document.getElementById('buttonPlus');
let minusButton = document.getElementById('buttonMinus');
let multiplyButton = document.getElementById('buttonMultiplication');
let divideButton = document.getElementById('buttonDivision');
let equalButton = document.getElementById('buttonEqual');
let deleteButton = document.getElementById('buttonDelete');
let clearButton = document.getElementById('buttonClear');
let plusMinusButton = document.getElementById('buttonPlusMinus');
let percentButton = document.getElementById('buttonPercent');
let buttonDot = document.getElementById('buttonDot');

plusButton.addEventListener('click', onPlusButtonClick);
minusButton.addEventListener('click', onMinusButtonClick);
multiplyButton.addEventListener('click', onMultiplyButtonClick);
buttonDivision.addEventListener('click', onDivideButtonClick);
equalButton.addEventListener('click', calculate);
deleteButton.addEventListener('click', onDeleteButtonClick);
clearButton.addEventListener('click', onClearButtonClick);
plusMinusButton.addEventListener('click', onPlusMinusButton);
percentButton.addEventListener('click', onPercentButton);
buttonDot.addEventListener('click', onDotButton);


function setCurrentNumber() {
    currentNumber = Number(calculInput.value);
    console.log(currentNumber);
}

function onPlusButtonClick() {
    if (isCalculate == true) {
        operator = '+';
        previousNumberText.innerText = `${currentNumber} ${operator}`;
        previousNumber = currentNumber;
        calculInput.value = null;
        currentNumber = null;
        console.log(`${previousNumber} ${operator}`);
        isCalculate = false;
        calculInput.focus();
    } else if (operator !== null) {
        operator = '+';
        previousNumberText.innerText = `${previousNumber} ${operator}`;
        console.log(`${previousNumber} ${operator}`);
        calculInput.value = null;
        isCalculate = false;
        calculInput.focus();
    } else if (currentNumber == null) {
        calculInput.value = null;
        calculInput.focus();
    } else {
        operator = '+';
        previousNumberText.innerText = `${currentNumber} ${operator}`;
        previousNumber = currentNumber;
        calculInput.value = null;
        currentNumber = null;
        console.log(`${previousNumber} ${operator}`);
        isCalculate = false;
        calculInput.focus();
    }
}

function onMinusButtonClick() {
    if (isCalculate == true) {
        operator = '-';
        previousNumberText.innerText = `${currentNumber} ${operator}`;
        previousNumber = currentNumber;
        calculInput.value = null;
        currentNumber = null;
        console.log(`${previousNumber} ${operator}`);
        isCalculate = false;
        calculInput.focus();
    } else if (operator !== null) {
        operator = '-';
        previousNumberText.innerText = `${previousNumber} ${operator}`;
        console.log(`${previousNumber} ${operator}`);
        calculInput.value = null;
        isCalculate = false;
        calculInput.focus();
    } else if (currentNumber == null) {
        calculInput.value = null;
        calculInput.focus();
    } else {
        operator = '-';
        previousNumberText.innerText = `${currentNumber} ${operator}`;
        previousNumber = currentNumber;
        calculInput.value = null;
        currentNumber = null;
        console.log(`${previousNumber} ${operator}`);
        isCalculate = false;
        calculInput.focus();
    }
}

function onMultiplyButtonClick() {
    if (isCalculate == true) {
        operator = '*';
        previousNumberText.innerText = `${currentNumber} ×`;
        previousNumber = currentNumber;
        calculInput.value = null;
        currentNumber = null;
        console.log(`${previousNumber} ${operator}`);
        isCalculate = false;
        calculInput.focus();
    } else if (operator !== null) {
        operator = '*';
        previousNumberText.innerText = `${previousNumber} ×`;
        console.log(`${previousNumber} ${operator}`);
        calculInput.value = null;
        isCalculate = false;
        calculInput.focus();
    } else if (currentNumber == null) {
        calculInput.value = null;
        calculInput.focus();
    } else {
        operator = '*';
        previousNumberText.innerText = `${currentNumber} ×`;
        previousNumber = currentNumber;
        calculInput.value = null;
        currentNumber = null;
        console.log(`${previousNumber} ${operator}`);
        isCalculate = false;
        calculInput.focus();
    }
}

function onDivideButtonClick() {
    if (isCalculate == true) {
        operator = '/';
        previousNumberText.innerText = `${currentNumber} ÷`;
        previousNumber = currentNumber;
        calculInput.value = null;
        currentNumber = null;
        console.log(`${previousNumber} ${operator}`);
        isCalculate = false;
        calculInput.focus();
    } else if (operator !== null) {
        operator = '/';
        previousNumberText.innerText = `${previousNumber} ÷`;
        console.log(`${previousNumber} ${operator}`);
        calculInput.value = null;
        isCalculate = false;
        calculInput.focus();
    } else if (currentNumber == null) {
        calculInput.value = null;
        calculInput.focus();
    } else {
        operator = '/';
        previousNumberText.innerText = `${currentNumber} ÷`;
        previousNumber = currentNumber;
        calculInput.value = null;
        currentNumber = null;
        console.log(`${previousNumber} ${operator}`);
        isCalculate = false;
        calculInput.focus();
    }
}

function onDeleteButtonClick() {
    if (currentNumber == null) {
        calculInput.focus();
    } else if (currentNumber == 0) {
        calculInput.value = null;
        currentNumber = null;
        console.log(currentNumber)
        calculInput.focus();
    } else if (typeof(currentNumber) == 'string') {
        currentNumber = String(currentNumber);
        currentNumber = currentNumber.slice(0, -2);
        currentNumber = Number(currentNumber);
        calculInput.value = null;
        calculInput.value = currentNumber;
        console.log(currentNumber)
        calculInput.focus();
    } else if (Number.isInteger(Number(currentNumber)) == false && (currentNumber + "").split(".")[1][1] == undefined) {
        currentNumber = String(currentNumber);
        currentNumber = currentNumber.slice(0, -2);
        currentNumber = Number(currentNumber)
        calculInput.value = null;
        calculInput.value = currentNumber;
        console.log(currentNumber)
        calculInput.focus();
    } else {
        currentNumber = String(currentNumber);
        currentNumber = currentNumber.slice(0, -1);
        calculInput.value = Number(currentNumber);
        currentNumber = Number(currentNumber)
        console.log(currentNumber)
        calculInput.focus();
    }
}

function onClearButtonClick() {
    calculInput.value = null;
    currentNumber = null;
    previousNumber = null;
    previousNumberText.value = null;
    operator = null;
    previousNumberText.innerHTML = '';
    isCalculate = false;
    calculInput.focus();
}

function onPlusMinusButton() {
    if (currentNumber == null) {
        calculInput.focus();
    } else switch (isNegativeCurNum) {
        case false:
            currentNumber = -Math.abs(currentNumber);
            calculInput.value = currentNumber;
            calculInput.focus();
            isNegativeCurNum = true;
            console.log(currentNumber);
            break;
        case true:
            currentNumber = Math.abs(currentNumber);
            calculInput.value = currentNumber;
            calculInput.focus();
            isNegativeCurNum = false;
            console.log(currentNumber);
            break;
    }
}

function isNegativeCurrentNumber() {
    if (currentNumber == Math.abs(currentNumber)) {
        isNegativeCurNum = false;
    } else {
        isNegativeCurNum = true;
    }
}

function onPercentButton() {
    if (currentNumber == null || previousNumber == null) {
        calculInput.focus();
    } else {
        currentNumber = (previousNumber * currentNumber) / 100;
        calculInput.value = currentNumber;
        calculInput.focus();
    }
}

function onDotButton() {
    if (Number.isInteger(Number(currentNumber)) == true) {
        currentNumber = Number(currentNumber);
        currentNumber = currentNumber.toFixed(1);
        calculInput.value = currentNumber;
        console.log(currentNumber);
        calculInput.focus();
    } else {
        calculInput.focus();
    }
}

function calculate() {
    if (currentNumber == null || previousNumber == null) {
        calculInput.focus();
    } else if (isCalculate == true) {
        switch (operator) {
            case '+':
                result = Number(previousNumber) + Number(currentNumber);
                textResult = `${currentNumber} ${operator} ${previousNumber} = `;
                previousNumberText.innerText = textResult;
                console.log(`${textResult} ${result}`);
                calculInput.value = result;
                currentNumber = result;
                isNegativeCurrentNumber();
                calculInput.focus();
                break;
            case '-':
                result = Number(currentNumber) - Number(previousNumber);
                textResult = `${currentNumber} ${operator} ${previousNumber} = `;
                previousNumberText.innerText = textResult;
                console.log(`${textResult} ${result}`);
                calculInput.value = result;
                currentNumber = result;
                isNegativeCurrentNumber();
                calculInput.focus();
                break;
            case '*':
                result = Number(currentNumber) * Number(previousNumber);
                textResult = `${currentNumber} × ${previousNumber} = `;
                previousNumberText.innerText = textResult;
                console.log(`${textResult} ${result}`);
                calculInput.value = result;
                currentNumber = result;
                isNegativeCurrentNumber();
                calculInput.focus();
                break;
            case '/':
                result = Number(currentNumber) / Number(previousNumber);
                textResult = `${currentNumber} ÷ ${previousNumber} = `;
                previousNumberText.innerText = textResult;
                console.log(`${textResult} ${result}`);
                calculInput.value = result;
                currentNumber = result;
                isNegativeCurrentNumber();
                calculInput.focus();
                break;
        }
    } else {
        switch (operator) {
            case '+':
                result = Number(previousNumber) + Number(currentNumber);
                textResult = `${previousNumber} ${operator} ${currentNumber} = `;
                previousNumberText.innerText = textResult;
                console.log(`${textResult} ${result}`);
                previousNumber = currentNumber;
                calculInput.value = result;
                currentNumber = result;
                isCalculate = true;
                isNegativeCurrentNumber();
                calculInput.focus();
                break;
            case '-':
                result = Number(previousNumber) - Number(currentNumber);
                textResult = `${previousNumber} ${operator} ${currentNumber} = `;
                previousNumberText.innerText = textResult;
                console.log(`${textResult} ${result}`);
                previousNumber = currentNumber;
                calculInput.value = result;
                currentNumber = result;
                isCalculate = true;
                isNegativeCurrentNumber();
                calculInput.focus();
                break;
            case '*':
                result = Number(previousNumber) * Number(currentNumber);
                textResult = `${previousNumber} × ${currentNumber} = `;
                previousNumberText.innerText = textResult;
                console.log(`${textResult} ${result}`);
                previousNumber = currentNumber;
                calculInput.value = result;
                currentNumber = result;
                isCalculate = true;
                isNegativeCurrentNumber();
                calculInput.focus();
                break;
            case '/':
                result = Number(previousNumber) / Number(currentNumber);
                textResult = `${previousNumber} ÷ ${currentNumber} = `;
                previousNumberText.innerText = textResult;
                console.log(`${textResult} ${result}`);
                previousNumber = currentNumber;
                calculInput.value = result;
                currentNumber = result;
                isCalculate = true;
                isNegativeCurrentNumber();
                calculInput.focus();
                break;
        }
    }
}

calculInput.addEventListener('keyup', function (event) {
    switch (event.code) {
        case 'Digit1':
            setCurrentNumber()
            break;
        case 'Digit2':
            setCurrentNumber()
            break;
        case 'Digit3':
            setCurrentNumber()
            break;
        case 'Digit4':
            setCurrentNumber()
            break;
        case 'Digit5':
            setCurrentNumber()
            break;
        case 'Digit6':
            setCurrentNumber()
            break;
        case 'Digit7':
            setCurrentNumber()
            break;
        case 'Digit8':
            setCurrentNumber()
            break;
        case 'Digit9':
            setCurrentNumber()
            break;
        case 'Digit0':
            setCurrentNumber()
            break;
        case 'Numpad1':
            setCurrentNumber()
            break;
        case 'Numpad2':
            setCurrentNumber()
            break;
        case 'Numpad3':
            setCurrentNumber()
            break;
        case 'Numpad4':
            setCurrentNumber()
            break;
        case 'Numpad5':
            setCurrentNumber()
            break;
        case 'Numpad6':
            setCurrentNumber()
            break;
        case 'Numpad7':
            setCurrentNumber()
            break;
        case 'Numpad8':
            setCurrentNumber()
            break;
        case 'Numpad9':
            setCurrentNumber()
            break;
        case 'Numpad0':
            setCurrentNumber()
            break;
        case 'NumpadAdd':
            onPlusButtonClick();
            break;
        case 'Equal':
            onPlusButtonClick();
            break;
        case 'NumpadSubtract':
            onMinusButtonClick();
            break;
        case 'Minus':
            onMinusButtonClick();
            break;
        case 'NumpadMultiply':
            onMultiplyButtonClick();
            break;
        case 'NumpadDivide':
            onDivideButtonClick();
            break;
        case 'NumpadEnter':
            calculate();
            break;
        case 'Enter':
            calculate();
            break;
        case 'Backspace':
            onDeleteButtonClick();
            break;
        // case 'NumpadDecimal':
        //     onDotButton();
        //     break;
    }
});

let number1 = document.getElementById('number1Button');
number1.addEventListener('click', onButtonNumberClick);
let number2 = document.getElementById('number2Button');
number2.addEventListener('click', onButtonNumberClick);
let number3 = document.getElementById('number3Button');
number3.addEventListener('click', onButtonNumberClick);
let number4 = document.getElementById('number4Button');
number4.addEventListener('click', onButtonNumberClick);
let number5 = document.getElementById('number5Button');
number5.addEventListener('click', onButtonNumberClick);
let number6 = document.getElementById('number6Button');
number6.addEventListener('click', onButtonNumberClick);
let number7 = document.getElementById('number7Button');
number7.addEventListener('click', onButtonNumberClick);
let number8 = document.getElementById('number8Button');
number8.addEventListener('click', onButtonNumberClick);
let number9 = document.getElementById('number9Button');
number9.addEventListener('click', onButtonNumberClick);
let number0 = document.getElementById('number0Button');
number0.addEventListener('click', onButtonNumberClick);

function onButtonNumberClick() {
    if (currentNumber == null) {
        currentNumber = (this.innerText);
        calculInput.value = (this.innerText);
        currentNumber = Number(currentNumber);
        calculInput.focus();
        console.log(currentNumber);
    } else if (typeof(currentNumber) == 'string') {
        currentNumber = currentNumber.slice(0, -1);
        currentNumber += (this.innerText);
        currentNumber = Number(currentNumber);
        calculInput.value = currentNumber;
        calculInput.focus();
        console.log(currentNumber);
    }else {
        currentNumber += (this.innerText);
        currentNumber = Number(currentNumber);
        calculInput.value = currentNumber;
        calculInput.focus();
        console.log(currentNumber);
    }
}