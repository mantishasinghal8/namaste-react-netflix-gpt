import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { toggleGptSearchView } from "../utils/gptSlice";
const Browse = () => {
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();

    const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

    return (
        <div className="browse">

            {showGptSearch ? <GptSearch /> : (<><MainContainer /> <SecondaryContainer /></>)}

        </div>
    );
};

export default Browse;