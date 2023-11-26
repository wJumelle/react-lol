import './ChampionsList.css';

// Composants
import Champion from '../Champion/Champion.jsx';

export default function ChampionsList({champions}) {

  // Travail autour de la variable d'état champion afin de dissocier la logique du rendu
  const properChampions = champions.map((champ) => <Champion key={champ.id} champ={champ}/>);

  return (
    <>
      <h1>Liste des champions</h1>
      {properChampions.length > 0 &&
        <ul className="championList">
          {properChampions}
        </ul>
      }
    </>
  )
}
