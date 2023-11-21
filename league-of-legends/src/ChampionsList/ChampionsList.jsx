import './ChampionsList.css';

// Utils
import fetchFactory from '../Utils/fetch-utils.js';
import getRessource from '../Utils/getRessource-utils.js';

// Hooks
import { useCallback, useEffect } from 'react';

export default function ChampionsList() {
  // On met en cache la définition de la fonction fetchFactory afin d'éviter
  // qu'elle soit régénéré à chaque fois - ce qui reviendrait à écraser le cache à chaque
  // rendu
  const myFetch = useCallback(fetchFactory(), []);

  // Au montage du composant nous allons chercher les données
  useEffect(() => {
    myFetch()
  }, []);

  return (
    <>
      <h1>ChampionsList</h1>
    </>
  )
}
