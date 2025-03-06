import { createContext, useContext, useState } from "react";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;

// creazione provider per api calls
const GlobalContext = createContext();
const GlobalProvider = ({ children }) => {
    // ricerca
    const [query, setQuery] = useState("");

    // lista film
    const [filmsList, setFilmsList] = useState([]);

    const getFilms = () => {
        // console.log(query)
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