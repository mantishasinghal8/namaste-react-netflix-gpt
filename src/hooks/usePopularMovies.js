import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";
const usePopularMovies = () => {
    const dispatch = useDispatch();
    // Fetch Data from TMDB 

    const getPopularMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS)
        const json = await data.json();
        // pass this json data to redux via dipatch  
        dispatch(addPopularMovies(json.results))
    }


    useEffect(() => {
        getPopularMovies();
    }, [])
}

export default usePopularMovies;