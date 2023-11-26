import './App.css';

// Hooks
import { useCallback, useEffect, useState } from 'react';

// Router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Utils
import fetchFactory from './Utils/fetch-utils.js';
import getRessource from './Utils/getRessource-utils.js';

// Composants
import Menu from './Menu/Menu.jsx';
import ChampionsList from './ChampionsList/ChampionsList';
import ItemsList from './ItemsList/ItemsList.jsx';
import ChampionProfile from './Champion/ChampionProfile/ChampionProfile.jsx';

function App({v}) {
  // On met en cache la définition de la fonction fetchFactory afin d'éviter
  // qu'elle soit régénéré à chaque fois - ce qui reviendrait à écraser le cache à chaque
  // rendu
  const myFetch = useCallback(fetchFactory(), []);

  // On stocke les données autour des champions dans une variable d'état 
  const [champions, setChampions] = useState([]);
  const [items, setItems] = useState([]);

  // Au montage du composant nous allons chercher les données de l'api
  useEffect(() => {
    // Pour les champions
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
    });

    // Pour les items
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

  return (
    <>
      <Router>
          <Menu />
          <Switch>
              <Route path="/" exact>
                <h1>Application autour de League of Legends</h1>
                <h2>SUUUUUUUUUUUUUUUUUUUUUUUU</h2>
              </Route>
              <Route path="/champions-list">
                  <ChampionsList champions={champions} />
              </Route>
              <Route path="/champion/:id" render={routeProps => {
                const id = routeProps.match.params.id;
                const champion = champions.filter(champ => champ.id === id);
                return <ChampionProfile champion={champion} />
              }}>
              </Route>
              <Route path="/items-list">
                  <ItemsList items={items} />
              </Route>
          </Switch>
      </Router>
    </>
  )
}

export default App
