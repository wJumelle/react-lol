import './ChampionProfile.css';

export default function ChampionProfile({champion}) {
    return (
        <>
            <header className="profile-header">
                <span className="profile-title">{champion.title}</span>
                <h1 className="profile-name">{champion.name}</h1>
            </header>
            <main>
                <section className="profile-lore">
                    <p>{champion.lore}</p>
                </section>
            </main>
        </>
    )
}
