import './ChampionsList.css';

import fetchFactory from '../Utils/fetch-utils.js';
import { useCallback } from 'react';

export default function ChampionsList() {
  // On met en cache la définition de la fonction fetchFactory afin d'éviter
  // qu'elle soit régénéré à chaque fois - ce qui reviendrait à écraser le cache à chaque
  // rendu
  const myFetch = useCallback(fetchFactory(), []);

  return (
    <>
      <h1>ChampionsList</h1>
    </>
  )
}
