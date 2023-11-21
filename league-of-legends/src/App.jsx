import './App.css';

// Config
import { VERSION } from './config';

// Composants
import ChampionsList from './ChampionsList/ChampionsList';

function App() {
  return (
    <>
      <ChampionsList v={VERSION} />
    </>
  )
}

export default App
