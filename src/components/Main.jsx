import { useEffect } from "react";
import { useGlobalContext } from "../contexts/GlobalContext";

// flags
import '/node_modules/flag-icon-css/css/flag-icons.min.css';

// icons
import { FaStar, FaRegStar } from "react-icons/fa6";

// posters
const postersUrl = import.meta.env.VITE_API_POSTER_URL;

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
                        filmsList && filmsList.length > 0 ? (
                            filmsList.map((film) => {
                                const { id, title, original_title, original_language, vote_average, poster_path, overview } = film;

                                const vote = () => {
                                    const rating = parseInt(Math.ceil(vote_average / 2));
                                    const stars = [];

                                    for (let i = 1; i <= 5; i++) {
                                        stars.push(
                                            i <= rating ? (
                                                <FaStar key={i} />
                                            ) : (
                                                <FaRegStar key={i} />
                                            )
                                        )
                                    };

                                    return stars
                                };

                                return (
                                    <div key={id} className="film-card">
                                        <figure>
                                            <img className="poster" src={`${postersUrl}${poster_path}`} alt={`Poster del film ${title}`} />
                                        </figure>
                                        <div className="info">
                                            <span><strong>Titolo: </strong>{title}</span>
                                            <span><strong>Titolo originale: </strong>{original_title}</span>
                                            <span className={`flag-icon flag-icon-${original_language}`} style={{ fontSize: '25px' }}></span>
                                            <span><strong>Voto: </strong></span>
                                            <p>{vote(vote_average)}</p>
                                            <p><strong>Overview: </strong>{overview}</p>
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
                        seriesList && seriesList.length > 0 ? (
                            seriesList.map((serie) => {
                                const { id, name, original_name, original_language, vote_average, poster_path, overview } = serie;

                                return (
                                    <div key={id} className="film-card">
                                        <figure>
                                            <img className="poster" src={`${postersUrl}${poster_path}`} alt={`Poster del film ${name}`} />
                                        </figure>
                                        <div className="info">
                                            <span><strong>Titolo: </strong>{name}</span>
                                            <span><strong>Titolo originale: </strong>{original_name}</span>
                                            <span className={`flag-icon flag-icon-${original_language}`} style={{ fontSize: '25px' }}></span>
                                            <span>Voto: {parseInt(Math.ceil(vote_average / 2))}</span>
                                        </div>
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