import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {

    if (!posterPath) return null;

    return (


        <div className="moviecard">
            <div className="card-img">
                <img src={IMG_CDN_URL + posterPath} alt="Movie Card" />

            </div>
        </div>
    );
};

export default MovieCard;