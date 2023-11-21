export default function getRessource(v, url_kind, options) {
    switch (url_kind) {
        case 'loading':
            return `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${options.champ_id}_${options.skin_number}.jpg`;
            break;
        case 'splashart':
            return `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${options.champ_id}_${options.skin_number}.jpg`;
            break;
        default:
            return `https://ddragon.leagueoflegends.com/cdn/${v}/img/champion/${options.champ_id}.png`;
            break;
    }
}