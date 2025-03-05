import { createContext, useContext, useState } from "react";
import axios from "axios";

const apiUrl = import.meta.env.VITE_BASE_API_URL;

// creazione provider per api calls
const GlobalContext = createContext();
const GlobalProvider = ({ children }) => {
    // lista film
    const [filmsList, setFilmsList] = useState([]);

    const getFilms = () => {
        axios.get(apiUrl)
            .then((res) => setFilmsList(res.data.results))
    };

    // lista serie tv
    const [seriesList, setSeriesList] = useState([]);

    const getSeries = () => {
        axios.get(apiUrl)
            .then((res) => setSeriesList(res.data.results))
    };

    // destructuring
    const value = {
        filmsList,
        seriesList,
        getFilms,
        getSeries
    }

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
};

const useGlobalContext = () => useContext(GlobalContext);

export { GlobalProvider, useGlobalContext };