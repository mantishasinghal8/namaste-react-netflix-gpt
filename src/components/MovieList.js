import { useRef } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
    const sliderRef = useRef(null);

    const scrollLeft = () => {

        if (!sliderRef.current) return;

        sliderRef.current.scrollBy({
            left: -sliderRef.current.clientWidth,
            behavior: "smooth",
        });
    };

    const scrollRight = () => {
        if (!sliderRef.current) return;

        sliderRef.current.scrollBy({
            left: sliderRef.current.clientWidth,
            behavior: "smooth",
        });
    };

    return (
        <div className="movielist">
            <h2>{title}</h2>
            <div className="movies-card-list">
                <button className="left-button" onClick={scrollLeft}><svg viewBox="0 0 48 48" width="48" height="48" data-icon="ChevronRightExtraLarge" data-icon-id=":rf1:" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" role="img"><path fill="currentColor" fillRule="evenodd" d="M32.586 24 17.293 8.707l1.414-1.414 16 16a1 1 0 0 1 0 1.414l-16 16-1.414-1.414z" clipRule="evenodd"></path></svg></button>

                <div className="moviecard-wrapper" ref={sliderRef}>
                    {movies?.map((movie) => (
                        <MovieCard
                            key={movie.id}
                            posterPath={movie.poster_path}
                        />
                    ))}
                </div>

                <button className="right-button" onClick={scrollRight}><svg viewBox="0 0 48 48" width="48" height="48" data-icon="ChevronRightExtraLarge" data-icon-id=":rf0:" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" role="img"><path fill="currentColor" fillRule="evenodd" d="M32.586 24 17.293 8.707l1.414-1.414 16 16a1 1 0 0 1 0 1.414l-16 16-1.414-1.414z" clipRule="evenodd"></path></svg></button>
            </div>
        </div>
    );
};

export default MovieList;