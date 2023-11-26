import { useParams } from "react-router-dom";

export default function ChampionProfile({champion}) {
    let { id } = useParams();

    return (
        <h1>Profil du champion : {id}</h1>
    )
}
