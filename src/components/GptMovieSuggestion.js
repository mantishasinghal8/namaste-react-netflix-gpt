import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GptMovieSuggestion = () => {
    const langKey = useSelector((store) => store.config.lang);

    return (
        <div className="gptmoviesuggestion">
            <h1>{lang[langKey].gptMovieSuggestion}</h1>
        </div>
    );
};

export default GptMovieSuggestion;