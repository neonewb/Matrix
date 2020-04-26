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
divideButton.addEventListener('click', onDivideButtonClick);
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

window.mobileAndTabletCheck = function() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
  };

function disabledInputIfMobileOrTablet(){
    if (window.mobileAndTabletCheck() == true){
        calculInput.disabled = true;
    }
}

disabledInputIfMobileOrTablet();