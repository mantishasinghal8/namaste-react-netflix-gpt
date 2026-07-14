import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";
import { BACKGROUND_IMG } from "../utils/constants"

const GptSearch = () => {
    return (
        <div className="gptsearch" style={{ backgroundImage: `url(${BACKGROUND_IMG})` }}>

            <GptSearchBar />
            <GptMovieSuggestion />
        </div>
    );
};

export default GptSearch;