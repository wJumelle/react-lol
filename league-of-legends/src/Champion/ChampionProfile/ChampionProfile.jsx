export default function ChampionProfile({champion}) {
    return (
        <>
            <header className="profile-header">
                <span>{champion.title}</span>
                <h1>{champion.name}</h1>
            </header>
            <main>
                <section className="profile-lore">
                    <p>{champion.lore}</p>
                </section>
            </main>
        </>
    )
}
