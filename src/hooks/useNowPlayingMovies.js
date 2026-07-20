import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useDispatch, useSelector } from "react-redux";
const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies)

    // Fetch Data from TMDB 
    const getNowPlayingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS)
        const json = await data.json();
        // pass this json data to redux via dipatch  
        dispatch(addNowPlayingMovies(json.results))
    }


    useEffect(() => {
        !nowPlayingMovies && getNowPlayingMovies();
    }, [dispatch])
}

export default useNowPlayingMovies;