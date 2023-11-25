import './Menu.css';

// Hooks 
import { useState } from 'react';

// Router
import { Link } from 'react-router-dom';

export default function Menu() {
    const [isOpenned, setIsOpenned] = useState(false);

    function handleClickButtonMenu() {
        setIsOpenned(state => state = !isOpenned);
    }

    const labelButtonMenu = (isOpenned) ? "Fermer le menu" : "Ouvrir le menu";
    const classesButtonMenu = (isOpenned) ? "main-navigation__button is-openned" : "main-navigation__button is-closed";
    const classesNavigationContainer = (isOpenned) ? "main-navigation__container is-openned" : "main-navigation__container is-closed";

    return (
        <>
            <button onClick={handleClickButtonMenu} className={classesButtonMenu} aria-labe={labelButtonMenu}>
                <span className="main-navigation__button-inner-container">
                    <span className="line line1"></span>
                    <span className="line line2"></span>
                    <span className="line line3"></span>
                </span>
            </button>
            <div className={classesNavigationContainer}>
                <nav role="navigation" className="main-navigation">
                    <ul>
                        <li><Link to="/">Accueil</Link></li>
                        <li><Link to="/champions-list">Liste des champions</Link></li>
                        <li><Link to="/items-list">Liste des objets</Link></li>
                    </ul>
                </nav>
            </div>
        </>
        
    )
}
