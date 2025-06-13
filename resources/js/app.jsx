import './bootstrap';
import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import {Button, createTheme, ThemeConfig, ThemeProvider} from "flowbite-react";
import Base from "@/layouts/Base.jsx";
import LandingPage from "@/pages/LandingPage.jsx";

const customTheme = createTheme({

});

const App = () => {
    return (
        <ThemeProvider theme={customTheme}>
            <ThemeConfig dark={false} />
            <LandingPage />
        </ThemeProvider>
    );
};

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);
