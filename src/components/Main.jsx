import { useEffect } from "react";
import { useGlobalContext } from "../contexts/GlobalContext";

export function Main() {
    const { filmsList, getFilms, seriesList, getSeries, query } = useGlobalContext();

    useEffect(() => {
        getFilms()
        getSeries()
    }, [query]);

    return (
        <main>
            <div className="main-container">
                <h2>Film</h2>

                <div className="cards-container">
                    {
                        filmsList ? (
                            filmsList.map((film) => {
                                const { id, title, original_title, original_language, vote_average } = film;

                                return (
                                    <div key={id} className="film-card">
                                        <h3>Titolo: {title}</h3>
                                        <h3>Titolo originale: {original_title}</h3>
                                        <span>Lingua: {original_language}</span>
                                        <span>Voto: {vote_average}</span>
                                    </div>
                                )
                            })
                        ) : (
                            <span>Nessun film trovato</span>
                        )
                    }
                </div>
            </div>

            <div className="main-container">
                <h2>Serie TV</h2>

                <div>
                    {
                        seriesList ? (
                            seriesList.map((serie) => {
                                const { id, name, original_name, original_language, vote_average } = serie;

                                return (
                                    <div key={id}>
                                        <h3>Titolo: {name}</h3>
                                        <h3>Titolo originale: {original_name}</h3>
                                        <span>Lingua: {original_language}</span>
                                        <span>Voto: {vote_average}</span>
                                    </div>
                                )
                            })
                        ) : (
                            <span>Nessuna serie trovata</span>
                        )
                    }
                </div>
            </div>
        </main>
    )
};