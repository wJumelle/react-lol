import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Config
import { VERSION } from './config';

// Router
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

// Composants
import ChampionsList from './ChampionsList/ChampionsList';
import ItemsList from './ItemsList/ItemsList.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>
        <nav>
        <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/champions-list">Liste des champions</Link></li>
            <li><Link to="/items-list">Liste des objets</Link></li>
        </ul>
        </nav>
        <Switch>
            <Route path="/" exact>
                <App />
            </Route>
            <Route path="/champions-list">
                <ChampionsList v={VERSION} />
            </Route>
            <Route path="/items-list">
                <ItemsList v={VERSION} />
            </Route>
        </Switch>
    </Router>
    
)