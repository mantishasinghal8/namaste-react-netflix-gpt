import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";
const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    // Fetch Data from TMDB 
    const getUpcomingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS)
        const json = await data.json();
        console.log("json of top rated", json);

        // pass this json data to redux via dipatch  
        dispatch(addUpcomingMovies(json.results))
    }


    useEffect(() => {
        getUpcomingMovies();
    }, [dispatch])
}

export default useUpcomingMovies;