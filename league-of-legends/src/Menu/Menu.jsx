import './Menu.css';

// Hooks 
import { useState } from 'react';

// Router
import { Link } from 'react-router-dom';

export default function Menu() {
    const [isOpenned, setIsOpenned] = useState(false);

    return (
        <>
            {isOpenned && 
                <nav role="navigation" className="main-navigation">
                    <ul>
                        <li><Link to="/">Accueil</Link></li>
                        <li><Link to="/champions-list">Liste des champions</Link></li>
                        <li><Link to="/items-list">Liste des objets</Link></li>
                    </ul>
                </nav>
            }
        </>
        
    )
}
