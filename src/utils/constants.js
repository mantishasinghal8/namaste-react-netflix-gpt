export const LOGO = "https://occ.a.nflxso.net/dnmt/api/v6/iL4oJVDYZ8KLSrJ6eG2OwtghbfQ/AAAAAVBEN9I57czDc_uW4ZnDTNTb9hWvK70hYAqf0VNv_dsufIxZqfNclKrp7ugn5j0DkKCYy_4ncEpi6fJk1wpPuLO61r5YUWiEbVjxFpCESIWdJwAAOvAX.svg";


export const PHOTO_URL = "https://occ-0-2991-3646.1.nflxso.net/dnm/api/v6/SO2HoVCx33X8phZh2pZZmQ4QgNY/AAAABS8sWFjSyj1zyfgcnGamqyJ1E2ZubZGo8dndCM_ipf_5UpmVlkuf8IXzQlmPZQqTMWNjWukESRdLkFGHnf7zbY3MJCO3r4s.png?r=229";
export const BACKGROUND_IMG = "https://assets.nflxext.com/ffe/siteui/vlv3/2f42605e-e786-4a06-8612-ebc67c55ba6c/web/IN-en-20260629-TRIFECTA-perspective_76b17e8c-cff9-4c65-9938-08ca5029be6b_large.jpg";


export const LOGO_N = "https://occ-0-2991-3646.1.nflxso.net/dnm/api/v6/1yqKxSrpVn39llMySll9RaDLTRY/AAAABTeU9-rQPSFAhNlJOcbClXq5rvHyruQdFfDZYGrjWDiNjNLS291skOTwkzdlt2UKu9vJHC9iiFlRykQTf_RC7VqF5CK27cssdcQNZRk.webp?r=a67";


export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";
export const API_OPTIONS = {
    method: 'GET',
    headers: { accept: 'application/json', Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_KEY }
};
export const SUPPORTED_LANGUAGE = [
    {
        identifier: "en",
        name: "English",
    },
    {
        identifier: "hindi",
        name: "Hindi",
    },
    {
        identifier: "spanish",
        name: "Spanish",
    },
    {
        identifier: "korean",
        name: "Korean",
    },
];

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;
export const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_API_KEY;
