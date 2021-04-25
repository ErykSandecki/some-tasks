import React, { useState } from 'react';

import { Input, Button  } from 'antd';

// styles
import './style.css';

// components
import PageTitle from '../../components/PageTitle';

const { TextArea } = Input;

function getSign(text) {
    const values = text.split("").map(v => parseInt(v));
    const code = values.reduce((a, b) => a + b);
    return String.fromCharCode(code);
}

function decodeText(text) {
    return text.replace(/ +(?= )/g,'').split(" ").reduce(
        (a, b, i) => (i === 1 ? getSign(a) : a) + getSign(b)
    );
}

export const Decoder = () => {
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');

    function onSubmit(e) {
        e.preventDefault(); 
        setResult(value === '' ? '' : decodeText(value));
    }

    return (
        <section className="container">
            <PageTitle title="Decoder"/>
            <form className="Decoder__form" onSubmit={onSubmit}>
                <TextArea rows={4} onChange={event => setValue(event.target.value)} placeholder="Enter text"/>
                <Button className="Decoder__button" htmlType="submit" type="primary">
                    Show
                </Button>
            </form>
            <p className="Decoder__result">{result}</p>
        </section>
    );
}

export default Decoder;