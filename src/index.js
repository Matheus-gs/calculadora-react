import React from 'react';
import ReactDOM from 'react-dom';

// Global CSS
import './styles/index.css'

// Import App file
import {App} from './App'

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
  );