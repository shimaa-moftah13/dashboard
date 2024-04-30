import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ContextProvider } from './contexts/ContextProvider';





ReactDOM.render(
    <ContextProvider>
        <App/>
    </ContextProvider>,
 document.getElementById('root') )
