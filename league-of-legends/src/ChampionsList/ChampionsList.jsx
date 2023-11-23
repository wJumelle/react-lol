import './ChampionsList.css';

// Utils
import fetchFactory from '../Utils/fetch-utils.js';
import getRessource from '../Utils/getRessource-utils.js';

// Hooks
import { useCallback, useEffect, useState } from 'react';

// Composants
import Champion from '../Champion/Champion.jsx';

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
      // On ajoute les images aux données retournées
      let champs = []
      for(const champ in res.data) {
        // Récupération des URLs des images standard du champion
        res.data[champ].image.square = getRessource(v, 'default', { champ_id: res.data[champ].id, skin_number: '0' });
        res.data[champ].image.splashart = getRessource(v, 'splashart', { champ_id: res.data[champ].id, skin_number: '0' });
        res.data[champ].image.loading = getRessource(v, 'loading', { champ_id: res.data[champ].id, skin_number: '0' });

        // Récupération des URLS des skins
        res.data[champ].skins.forEach((skin, i) => {
          res.data[champ].skins[i].image = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${res.data[champ].id}_${skin.num}.jpg`;
        });

        // Injection de l'élément dans le tableau à retourner
        champs.push(res.data[champ]);
      }
      setChampions(champs);
    })
  }, []);

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
