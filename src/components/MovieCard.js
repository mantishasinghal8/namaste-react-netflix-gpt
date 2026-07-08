import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {







    return (


        <div className="moviecard">
            <div className="card-img">
                <img src={IMG_CDN_URL + posterPath} alt="Movie Card" />

            </div>
            <div className="progress-bar">
                ----------
            </div>
        </div>
    );
};

export default MovieCard;