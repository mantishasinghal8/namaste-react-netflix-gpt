import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
const Browse = () => {
    useNowPlayingMovies();

    return (
        <div className="browse">
            <MainContainer />
            <SecondaryContainer />
        </div>
    );
};

export default Browse;