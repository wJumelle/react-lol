import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Config
import { VERSION } from './config';

// Router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Composants
import Menu from './Menu/Menu.jsx';
import ChampionsList from './ChampionsList/ChampionsList';
import ItemsList from './ItemsList/ItemsList.jsx';
import ChampionProfile from './Champion/ChampionProfile/ChampionProfile.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>
        <Menu />
        <Switch>
            <Route path="/" exact>
                <App />
            </Route>
            <Route path="/champions-list">
                <ChampionsList v={VERSION} />
            </Route>
            <Route path="/champion/:id">
                <ChampionProfile />
            </Route>
            <Route path="/items-list">
                <ItemsList v={VERSION} />
            </Route>
        </Switch>
    </Router>
    
)