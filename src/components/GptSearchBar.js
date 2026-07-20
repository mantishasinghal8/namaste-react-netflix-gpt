import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef, useState } from "react";
import ai from "../utils/gemini";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
    const searchText = useRef(null);
    const dispatch = useDispatch();
    // Search movie in TMDB 
    const [loadingState, setLoadingState] = useState(false);

    const searchMovieTmdb = async (movie) => {
        const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" + movie + "&include_adult=false&language=en-US&page=1", API_OPTIONS);

        const json = await data.json();

        return json;

    }

    const handleGptSearchClick = async () => {
        const prompt = searchText.current.value;

        const gptQuery = "Act as a Movie recommendation system and suggest some Movies for the query " + searchText.current.value + ". Only give me names of 5 movies, comma seperated like the given example give ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

        if (loadingState) return;
        setLoadingState(true);
        try {
            const gptResults = await ai.models.generateContent({
                model: "gemini-3-flash-preview",
                contents: gptQuery,
            });

            if (!gptResults.text) {
                // TODO: Write error handling
            }

            // Golmaal, Chupke Chupke, Jaane Bhi Do Yaaro, Padosan, Angoor
            const gptMovies = gptResults.text;
            // ['Golmaal', ' Chupke Chupke', ' Jaane Bhi Do Yaaro', ' Padosan', ' Angoor']
            // For each movie I will search TMDB API
            const gptMoviesArray = gptMovies.split(",");

            const promiseArray = gptMoviesArray.map(movie => searchMovieTmdb(movie));
            // the above line will give us array of 5 promises [Promise, Promise, Promise, Promise, Promise]
            // promise will take some time to get resolved.  

            const tmdbResults = await Promise.all(promiseArray);
            // when all the promises will be resolved only then i will get the result
            dispatch(addGptMovieResult({ movieNames: gptMoviesArray, movieResults: tmdbResults }));
        } catch (err) {
            console.error(err);
        } finally {
            setLoadingState(false);
        }

    };

    const langKey = useSelector((store) => store.config.lang);


    return (
        <div className="gptsearchbar">
            <h1>{lang[langKey].heading}</h1>

            <form action="" onSubmit={(e) => e.preventDefault()}>
                <input ref={searchText} type="search" placeholder={lang[langKey].gptSearchPlaceholder} />

                <button onClick={handleGptSearchClick}>{lang[langKey].search}</button>
            </form>
        </div>


    );
};

export default GptSearchBar;