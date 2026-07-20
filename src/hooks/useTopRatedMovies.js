import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useDispatch, useSelector } from "react-redux";
const useTopRatedMovies = () => {
    const dispatch = useDispatch();

    const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);
    // Fetch Data from TMDB 
    const getTopRatedMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS)
        const json = await data.json();

        // pass this json data to redux via dipatch  
        dispatch(addTopRatedMovies(json.results))
    }


    useEffect(() => {
        !topRatedMovies && getTopRatedMovies();
    }, [dispatch])
}

export default useTopRatedMovies;