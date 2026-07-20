import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";
import { useDispatch, useSelector } from "react-redux";
const usePopularMovies = () => {
    const dispatch = useDispatch();
    // Fetch Data from TMDB 
    const popularMovies = useSelector((store) => store.movies.popularMovies)

    const getPopularMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS)
        const json = await data.json();
        // pass this json data to redux via dipatch  
        dispatch(addPopularMovies(json.results))
    }


    useEffect(() => {
        !popularMovies && getPopularMovies();
    }, [dispatch])
}

export default usePopularMovies;