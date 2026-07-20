import { useSelector } from "react-redux";
import MovieList from "./MovieList";
const GptMovieSuggestion = () => {
    const langKey = useSelector((store) => store.config.lang);
    const { movieNames, movieResults } = useSelector((store) => store.gpt);
    console.log("movieNames", movieNames);
    console.log("movieResults", movieResults);
    if (!movieNames) return null;

    return (
        <div className="gptmoviesuggestion">
            <div className="gptmoviesuggestion-wrapper">
                {movieNames.map((movieName, index) =>
                    <MovieList
                        key={movieName}
                        title={movieName}
                        movies={movieResults[index].results}
                    />
                )}
            </div>

        </div>
    );
};

export default GptMovieSuggestion;