import React from "react";
import ReactDOM from "react-dom"; // Correct import statement for ReactDOM
import { ContextProvider } from "./contexts/contextProvider";

import './index.css';
import App from './App';

ReactDOM.render(
    <ContextProvider>
        <App />
    </ContextProvider>
    , document.getElementById('root'));
