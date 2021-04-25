import React, { useState } from 'react';

import { Input, Button  } from 'antd';

// styles
import './style.css';

// components
import PageTitle from '../../components/PageTitle';

function checkCorrectPalindrome(value) {
    return value.toLowerCase() === value.split("").reverse().join("").toLowerCase();
}

export const Palindrome = () => {
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');

    function onSubmit(e) {
        e.preventDefault();
        
        if (checkCorrectPalindrome(value) === true) {
            setResult('Success: Palindrome is correct!');
        } else {
            setResult('Error: Palindrome is not correct!');
        }
    }

    return (
        <section className="container">
            <PageTitle title="Palindrome"/>
            <form className="Palindrome__form" onSubmit={onSubmit}>
                <Input onChange={event => setValue(event.target.value)} placeholder="Enter text" />
                <Button className="Palindrome__button" htmlType="submit" type="primary">
                    Check
                </Button>
            </form>
            <p className="Palindrome__result">{result}</p>
        </section>
    );
}

export default Palindrome;