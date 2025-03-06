import { useEffect } from "react";
import { useGlobalContext } from "../contexts/GlobalContext";
import '/node_modules/flag-icon-css/css/flag-icons.min.css';

const posterUrl = "https://image.tmdb.org/t/p/w342/";

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
                                const { id, title, original_title, original_language, vote_average, poster_path } = film;

                                return (
                                    <div key={id} className="film-card">
                                        <figure>
                                            <img className="poster" src={`${posterUrl}${poster_path}`} alt={`Poster del film ${title}`} />
                                        </figure>
                                        <div className="info">
                                            <span><strong>Titolo: </strong>{title}</span>
                                            <span><strong>Titolo originale: </strong>{original_title}</span>
                                            <span className={`flag-icon flag-icon-${original_language}`} style={{ fontSize: '25px' }}></span>
                                            <span>Voto: {parseInt(Math.ceil(vote_average / 2))}</span>
                                        </div>
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

                <div className="cards-container">
                    {
                        seriesList ? (
                            seriesList.map((serie) => {
                                const { id, name, original_name, original_language, vote_average } = serie;

                                return (
                                    <div key={id} className="film-card">
                                        <h3>Titolo: {name}</h3>
                                        <h3>Titolo originale: {original_name}</h3>
                                        <span className={`flag-icon flag-icon-${original_language}`} style={{ fontSize: '25px' }}></span>
                                        <span>Voto: {parseInt(Math.ceil(vote_average / 2))}</span>
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