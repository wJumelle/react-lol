// Le principe derrière cet utilitaire est de vérifier l'existence d'un cache
// Si le cache existe alors on le retourne, sinon nous allons chercher les données
// ToDo : résoudre le problème de mise en cache - la fonction semble être appelé plusieurs fois

/**
 * handleFetchError - Fonction qui va gérer la lecture du statut du fetch
 * @param {Object} response 
 * @returns 
 */
function handleFetchError(response) {
    if(response.ok) {
        return response;
    } else {
        throw new Error(response.statut);
    }
}

/**
 * responseToJSON - Fonction qui va transmettre les données au format JSON
 * @param {Object} response 
 * @returns 
 */
function responseToJSON(response) {
    return response.json();
}

/**
 * fetchFactory - Fonction qui va retourner une Promesse contenant les données
 * @param {String} url 
 * @param {Object} options 
 * @returns 
 */
export default function fetchFactory(url, options) {
    console.log('fetchFactory init', url);
    const cache = {};

    return function(url, options) {
        // On boucle sur les propriétés de l'objet cache afin de déterminer 
        // l'existence du cache autour de l'URL

        console.log('fetchFactory', url, cache, url in cache, cache[url]);

        if(url in cache) {
            return Promise.resolve(cache[url]);
        }

        return fetch(url, options)
            .then(handleFetchError)
            .then(responseToJSON)
            .then((data) => {
                cache[url] = data;
                return data;
            })
    }
}