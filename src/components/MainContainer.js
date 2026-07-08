import { useSelector } from "react-redux";
import Billboard from "./Billboard";

const MainContainer = () => {

    const movies = useSelector(store => store.movies?.nowPlayingMovies);

    if (!movies) return;

    const mainMovie = movies[0];

    return (
        <section className="maincontainer">
            <Billboard data={mainMovie} />

        </section>
    );
};

export default MainContainer;