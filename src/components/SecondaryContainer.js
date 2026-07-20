// Movielist of Continue watching - MovieCards -Movielist of Popular -Movielist of TopRated 
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
    const movies = useSelector(store => store.movies);



    return (


        <section className="secondarycontainer">
            {movies.nowPlayingMovies && (
                <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
            )}

            {movies.topRatedMovies && (
                <MovieList title="Top Rated" movies={movies.topRatedMovies} />
            )}

            {movies.popularMovies && (
                <MovieList title="Popular" movies={movies.popularMovies} />
            )}
            {movies.upcomingMovies && (
                <MovieList title="Upcoming" movies={movies.upcomingMovies} />
            )}
        </section>
    );
};

export default SecondaryContainer;

