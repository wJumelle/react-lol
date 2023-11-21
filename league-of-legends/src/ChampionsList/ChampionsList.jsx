import './ChampionsList.css';

// Utils
import fetchFactory from '../Utils/fetch-utils.js';
import getRessource from '../Utils/getRessource-utils.js';

// Hooks
import { useCallback, useEffect, useState } from 'react';

export default function ChampionsList({v}) {
  // On met en cache la définition de la fonction fetchFactory afin d'éviter
  // qu'elle soit régénéré à chaque fois - ce qui reviendrait à écraser le cache à chaque
  // rendu
  const myFetch = useCallback(fetchFactory(), []);

  // On stocke les données de l'api dans une variable d'état 
  const [champions, setChampions] = useState([]);

  // Au montage du composant nous allons chercher les données
  useEffect(() => {
    myFetch(`https://ddragon.leagueoflegends.com/cdn/${v}/data/fr_FR/championFull.json`, [])
    .then((res) => {
      setChampions(res.data);
    })
  }, []);

  // Travail autour de la variable d'état champion afin de dissocier la logique du rendu
  const properChampions = [];
  Object.entries(champions).forEach((champ) => {
    properChampions.push(champ[1]);
  });

  return (
    <>
      <h1>ChampionsList</h1>
      {properChampions.length > 0 &&
        <ul>
          {properChampions.map((champ) => (
            <li key={champ.id}>{champ.name}</li>
          ))}
        </ul>
      }
    </>
  )
}
