import { useEffect } from "react";
import { useGlobalContext } from "../contexts/GlobalContext";

export function Main() {
    const { filmsList, getFilms } = useGlobalContext();

    useEffect(() => {
        getFilms()
    }, []);

    return (
        <main>
            <h2>Main</h2>

            <div>
                {
                    filmsList.map((film) => {
                        const { id, title, original_title, original_language, vote_average } = film;

                        return (
                            <div key={id}>
                                <h3>Titolo: {title}</h3>
                                <h3>Titolo originale: {original_title}</h3>
                                <span>Lingua: {original_language}</span>
                                <span>Voto: {vote_average}</span>
                            </div>
                        )
                    })
                }
            </div>
        </main>
    )
};