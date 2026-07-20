import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
const VideoBackground = ({ movieId }) => {
    const trailerVideo = useSelector(store => store.movies?.trailerVideo);

    useMovieTrailer(movieId);


    return (
        <div className="videobackground w-screen">
            <iframe
                className="w-screen aspect-video"
                src="https://www.youtube.com/embed/EEz5xbzYPKI?autoplay=1&mute=1&controls=0&playsinline=1&rel=0&iv_load_policy=3&fs=0&disablekb=1"
                title="YouTube player"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
            ></iframe>


        </div>
    );
};

export default VideoBackground;