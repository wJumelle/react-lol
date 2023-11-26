import './ItemsList.css';

export default function ItemsList({items}) {
    // Travail autour de la variable d'état items afin de dissocier la logique du rendu
    const properItems = items.map((item) => <li key={item.id}>{item.name}</li>);

    return (
    <>
        <h1>Liste des objets</h1>
        {properItems.length > 0 &&
        <ul className="itemsList">
            {properItems}
        </ul>
        }
    </>
    )
}
