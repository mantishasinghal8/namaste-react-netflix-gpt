import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GptSearchBar = () => {

    const langKey = useSelector((store) => store.config.lang);

    console.log("langKey", langKey);

    return (
        <div className="gptsearchbar">

            <h1>{lang[langKey].heading}</h1>

            <form action="">
                <input type="search" placeholder={lang[langKey].gptSearchPlaceholder} />
                <button>{lang[langKey].search}</button>
            </form>
        </div>
    );
};

export default GptSearchBar;