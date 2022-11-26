import './App.css';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { WeatherProvider } from './contexts/WeatherContext';

function App() {


    return (
        <>
                <WeatherProvider>
                    <Header />
                    <Main />
                </WeatherProvider>
        </>
    );
}

export default App;
