import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

/* this allows css variables in index.css to be used in App.css and other css files */
import './index.css'

ReactDOM.render(<App />,
    document.getElementById('root'));           