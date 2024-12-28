import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BMIPage } from './pages/BMIPage.jsx'; // Component for the BMI Calculator

export function App() {
    return (
        <Router>
            <section className='main-app'>
                <main className='container'>
                    <Routes>
                        <Route path="/" element={<BMIPage />} />
                    </Routes>
                </main>
            </section>
        </Router>
    );
}