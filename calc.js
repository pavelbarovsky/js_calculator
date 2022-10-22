let a = ''; // первое число
let b = ''; // второе число
let sign = ''; // знак операции
let finish = false; // чтобы делать операцию a + = = = = = ..

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'x', '/'];


const out = document.querySelector('.calc-screen p'); // экран калькулятора

function clearAll () {
    a = ''; 
    b = ''; 
    sign = '';
    finish = false;
    out.textContent = 0;
}

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
    if (!event.target.classList.contains('btn')) return;  // если класс buttons не содержит на клике класс btn - это не кнопка
    if (event.target.classList.contains('ac')) return;   // нажатие на кнопку ac

    out.textContent = ''; // очистка экрана

    const key = event.target.textContent; // получение value из кнопки и занос в key

    if (digit.includes(key)) { // если нажаты кнопки цифры или точка заносим в a и b
        if (b === '' && sign === '') {
            a+=key;;
            out.textContent = a;
        }
        else if (a !== '' && b !== '' && finish) {
            b = key;
            finish = false;
            out.textContent = b;
        }
        else {
            b+=key;
            out.textContent = b;
        }
        console.log(a, sign, b);
        return;
    }

    if (action.includes(key)) { // если нажаты кнопки знаки
        sign = key;
        console.log(a, sign, b);
        out.textContent = sign;
        return;
    }

    if (key === '=') {  // если нажата кнопка равно
        if (b === '') b = a;
        switch (sign) {
            case "+":
                a = (+a) + (+b);
                break;
            case "-":
                a = a - b;
                break;
            case "x":
                a = a * b;
                break 
            case "/":
                if (b === '0') {
                    out.textContent = "ERROR";
                    a='';
                    b='';
                    sign='';
                    return;
                }
                a = a / b;
                break;
        }


        finish = true;
        out.textContent = a;
        console.log(a, sign, b);
    }

}