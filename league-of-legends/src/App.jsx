import './App.css';

// Config
import { VERSION } from './config';

// Router
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

// Composants
import ChampionsList from './ChampionsList/ChampionsList';

function App() {
  return (
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
          <ChampionsList v={VERSION} />
        </Route>
        <Route path="champions-list">
          <ChampionsList v={VERSION} />
        </Route>
      </Switch>
    </Router>
  )
}



export default App
