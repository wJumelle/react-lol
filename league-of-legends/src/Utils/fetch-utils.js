// Le principe derrière cet utilitaire est de vérifier l'existence d'un cache
// Si le cache existe alors on le retourne, sinon nous allons chercher les données

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
 * responseToText - Fonction qui va transmettre les données au format texte
 * @param {Object} response 
 * @returns 
 */
function responseToText(response) {
    return response.text();
}

/**
 * fetchFactory - Fonction qui va retourner une Promesse contenant les données
 * @param {String} url 
 * @param {Object} options 
 * @returns 
 */
export default function fetchFactory(url, options) {
    const cache = {};

    return function(url, options) {
        // On boucle sur les propriétés de l'objet cache afin de déterminer 
        // l'existence du cache autour de l'URL
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