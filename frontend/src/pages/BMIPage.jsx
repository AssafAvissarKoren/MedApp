import React, { useState } from 'react';

export const BMIPage = () => {
    const [weight, setWeight] = useState(''); // weight in kilograms
    const [height, setHeight] = useState(''); // height in meters
    const [bmi, setBmi] = useState(''); // BMI value
    const [isCalculable, setIsCalculable] = useState(false); // state to determine button functionality

    const handleHeightChange = (event) => {
        const inputHeight = parseFloat(event.target.value);
        setHeight(inputHeight || '');
    };

    const handleWeightChange = (event) => {
        const inputWeight = parseFloat(event.target.value);
        setWeight(inputWeight || '');
    };

    const handleBmiChange = (event) => {
        const inputBmi = parseFloat(event.target.value);
        setBmi(inputBmi || '');
    };

    const handleCalculateOrReset = () => {
        if (isCalculable) {
            setWeight('');
            setHeight('');
            setBmi('');
            setIsCalculable(false);
        } else {
            if (height && weight) {
                const calculatedBmi = weight / (height * height);
                setBmi(calculatedBmi.toFixed(2));
            } else if (height && bmi) {
                const calculatedWeight = bmi * (height * height);
                setWeight(calculatedWeight.toFixed(2));
            }
            setIsCalculable(true);
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '1rem' }}>
            <h2>BMI Calculator</h2>

            <label>
                Height (m):
                <input
                    type="number"
                    value={height}
                    step="0.01"
                    min="0.5"
                    onChange={handleHeightChange}
                />
            </label>

            <label>
                Weight (kg):
                <input
                    type="number"
                    value={weight}
                    step="0.1"
                    min="0"
                    onChange={handleWeightChange}
                    disabled={height && bmi}
                />
            </label>

            <label>
                BMI:
                <input
                    type="number"
                    value={bmi}
                    step="0.01"
                    min="0"
                    onChange={handleBmiChange}
                    disabled={height && weight}
                />
            </label>

            <button onClick={handleCalculateOrReset} style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}>
                {isCalculable ? 'Reset' : 'Calculate'}
            </button>
        </div>
    );
};
