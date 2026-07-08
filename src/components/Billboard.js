import { LOGO_N } from "../utils/constants"
import VideoBackground from "./VideoBackground"
const Billboard = (mainMovie) => {


    const { original_title, overview, id } = mainMovie.data;

    console.log(mainMovie.data);
    console.log(mainMovie.data.id);

    return (
        <section className="billboard">
            <div className="billboard-wrapper">
                <VideoBackground movieId={id} />
                <div className="billboard-content">
                    <div className="billboard-top">
                        <img src={LOGO_N} alt="Logo N" />
                    </div>
                    <div className="billboard-bottom">

                        <div className="title-img">
                            {original_title}

                        </div>
                        <ul className="movie-type">
                            <li>2021</li>
                            <li>2 Seasons</li>
                            <li>U/A 16+</li>
                        </ul>

                        <div className="movie-desc">
                            {overview}
                        </div>

                        <div className="movie-play-info">
                            <button>
                                <svg viewBox="0 0 16 16" width="16" height="16" data-icon="PlaySmall" data-icon-id=":r4:" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" role="img"><path fill="currentColor" d="M3.5 2.16c0-.51.56-.83 1-.58l10.01 5.84c.44.26.44.9 0 1.16l-10 5.84a.67.67 0 0 1-1.01-.58z"></path></svg>
                                Play
                            </button>
                            <button>More Info</button>
                        </div>
                    </div>
                </div>
            </div>

        </section >
    );
};

export default Billboard;