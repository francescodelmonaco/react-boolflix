import { createContext, useContext, useState } from "react";
import axios from "axios";

// "https://api.themoviedb.org/3/search/movie?api_key=02b32d59ae781353108a120a4811a881&query=the+revenant"
const apiUrl = import.meta.env.VITE_BASE_URL;
const apiKey = import.meta.env.VITE_BASE_KEY;

// creazione provider per api calls
const GlobalContext = createContext();
const GlobalProvider = ({ children }) => {
    // ricerca
    const [query, setQuery] = useState("");

    // lista film
    const [filmsList, setFilmsList] = useState([]);

    const getFilms = () => {
        axios.get(`${apiUrl}movie?api_key=${apiKey}&query=${query}`)
            .then((res) => setFilmsList(res.data.results))
            .catch((error) => { console.error("Errore durante la ricerca dei film:", error) })
    };

    // lista serie tv
    const [seriesList, setSeriesList] = useState([]);

    const getSeries = () => {
        axios.get(`${apiUrl}tv?api_key=${apiKey}&query=${query}`)
            .then((res) => setSeriesList(res.data.results))
            .catch((error) => { console.error("Errore durante la ricerca delle serie tv:", error) })
    };

    // destructuring
    const value = {
        query,
        setQuery,
        filmsList,
        seriesList,
        getFilms,
        getSeries
    };

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    );
};

const useGlobalContext = () => useContext(GlobalContext);

export { GlobalProvider, useGlobalContext };