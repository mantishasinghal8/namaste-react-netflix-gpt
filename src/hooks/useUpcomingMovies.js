import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useDispatch, useSelector } from "react-redux";
const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    // Fetch Data from TMDB 
    const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);

    const getUpcomingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS)
        const json = await data.json();

        // pass this json data to redux via dipatch  
        dispatch(addUpcomingMovies(json.results))
    }


    useEffect(() => {
        !upcomingMovies && getUpcomingMovies();
    }, [dispatch])
}

export default useUpcomingMovies;