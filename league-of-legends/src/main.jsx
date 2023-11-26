import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Config
import { VERSION } from './config';

ReactDOM.createRoot(document.getElementById('root')).render(<App v={VERSION} />);