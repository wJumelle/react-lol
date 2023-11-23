import './ItemsList.css';

// Utils
import fetchFactory from '../Utils/fetch-utils.js';
import getRessource from '../Utils/getRessource-utils.js';

// Hooks
import { useCallback, useEffect, useState } from 'react';

export default function ItemsList({v}) {
    // On met en cache la définition de la fonction fetchFactory afin d'éviter
    // qu'elle soit régénéré à chaque fois - ce qui reviendrait à écraser le cache à chaque
    // rendu
    const myFetch = useCallback(fetchFactory(), []);

    // On stocke les données de l'api dans une variable d'état 
    const [items, setItems] = useState([]);

    // Au montage du composant nous allons chercher les données
    useEffect(() => {
    myFetch(`https://ddragon.leagueoflegends.com/cdn/${v}/data/fr_FR/item.json`, [])
    .then((res) => {
        // On ajoute les images aux données retournées
        let its = []
        for(const item in res.data) {
        // Récupération de l'URL de l'image de l'item
        // res.data[item].image.square = getRessource(v, 'default', { champ_id: res.data[champ].id, skin_number: '0' });

        // Injection de l'id dans le tableau à retourner
        res.data[item].id = item;

        // Injection de l'élément dans le tableau à retourner
        its.push(res.data[item]);
        }
        setItems(its);
    })
    }, []);

    // Travail autour de la variable d'état items afin de dissocier la logique du rendu
    const properItems = items.map((item) => <li key={item.id}>{item.name}</li>);

    return (
    <>
        <h1>ChampionsList</h1>
        {properItems.length > 0 &&
        <ul className="itemsList">
            {properItems}
        </ul>
        }
    </>
    )
}
