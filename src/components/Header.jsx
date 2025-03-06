import { useGlobalContext } from "../contexts/GlobalContext";

export function Header() {
    const { query, setQuery, getFilms, getSeries } = useGlobalContext();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(query);
        getFilms();
        getSeries();
    };

    return (
        <header>
            <div className="header-container">
                <h1>BoolFlix</h1>

                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Cerca il nome del film"
                        value={query}
                        onChange={e => setQuery(e.target.value)} />
                    <button type="submit">Cerca</button>
                </form>
            </div>
        </header>
    );
};