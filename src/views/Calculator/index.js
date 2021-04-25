import React, { useState } from 'react';

// styles
import './style.css';

const symbols = ['%', '+/-', 'C', '/', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', ',', '='];
let chars = [];

const isPrevNumber = (symbol) => {
    if (!isNaN(parseFloat(symbol))) {
       return true;
    }
    return false;
}

const isSpecialSign = (symbol) => {
    return ['+', '-', 'x', '/', '%'].some(sign => sign === symbol);
}

const isCommas = (symbol) => {
    return symbol.search(',') === -1 ? false : true;
}

const reverseNumber = (symbol) => {
    if (symbol.search('-') !== -1) {
        symbol = symbol.replace('(', "");
        symbol = symbol.replace(')', "");
        symbol = symbol.replace('-', "");
    } else {
        symbol = `(-${symbol})`;
    }
    return symbol;
}

const checkSign = (symbol) => {
    switch(symbol) {
        case '+':
        case '-':
        case '/':
        case 'x':
        case '%':
            if (chars.length > 0) {
                if (isSpecialSign(chars[chars.length - 1])) {
                    chars[chars.length - 1] = symbol;
                } else {
                    chars.push(symbol);
                }
            }
            break;
        case ',':
            if (isCommas(chars[chars.length - 1]) === false && isPrevNumber(chars[chars.length - 1])) {
                chars[chars.length - 1] += ',';
            }
            break;
        case '+/-':
            if (isPrevNumber(chars[chars.length - 1]) || symbol.search('-') !== -1) {
                chars[chars.length - 1] = reverseNumber(chars[chars.length - 1]);
            }
            break;   
        default:
            if (isPrevNumber(chars[chars.length - 1])) {
                chars[chars.length - 1] += symbol;
            } else {
                chars.push(symbol);
            }
            break;
    }
    return chars.join(" ");
}

export const Calculator = () => {
    const [text, setText] = useState(''); 
    const [score, setScore] = useState(0);

    const addEvent = (symbol) => {
        switch(symbol) {
            case 'C':
                chars = [];
                setText('');
                setScore(0);
                break;
            case '=':
                calculate();
                break;
            default:
                setText(checkSign(symbol));
                break;
        }
    }

    const calculate = () => {
        let value = text.replace(/x/g, "*");
        value = value.replace(/,/g, ".");

        /* eslint no-eval: 0 */
        setScore(eval(value));
        setText('');
        chars = [];
    }

    return (
        <section className="Calculator container">
            <div className="Calculator__container">
                {/* Result */}
                <div className="Calculator__window">
                    <p className="window__numbers">
                        <bdi>{text}</bdi>
                    </p>
                    <h3 className="window__result">{score}</h3>
                </div>

                {/* Buttons */}
                <div className="Calculator__tiles">
                    {symbols.map((sym, i) => 
                        <button 
                            key={i}
                            className="Calculator__button" 
                            onClick={() => addEvent(sym)}>
                            {sym}
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Calculator;