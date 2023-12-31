// Le principe derrière cet utilitaire est de vérifier l'existence d'un cache
// Si le cache existe alors on le retourne, sinon nous allons chercher les données
// ToDo : le cache ne fonctionne pas car on démonte le composant et le cache est stocké dans le composant

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
export default function fetchFactory() {
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