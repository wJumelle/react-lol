import './Champion.css';

export default function Champion({champ}) {
  return (
    <li>
        <img src={champ.image.square} alt={champ.name} />
    </li>
  )
}
