import './Champion.css';

// Router
import { Link } from 'react-router-dom';

export default function Champion({champ}) {
    return (
        <li>
            <Link to={"/champion/" + champ.id}>
                <img src={champ.image.square} alt={champ.name} />
            </Link>
        </li>
    )
}
