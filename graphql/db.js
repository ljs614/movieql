import fetch from "node-fetch";

const API_URL_LIST = "https://yts.mx/api/v2/list_movies.json?";
const API_URL_DETAIL = "https://yts.mx/api/v2/movie_details.json?"

export const getMovies = async (limit, rating) => {
    let REQUEST_URL = API_URL_LIST;
    if(limit > 0){
        REQUEST_URL += `&limit=${limit}`;
    }
    if(rating > 0){
        REQUEST_URL += `&minimum_rating=${rating}`;
    }
    const res = await fetch(REQUEST_URL);
    const json = await res.json();
    return json.data.movies;
}

export const getMovie = async (id) => {
    const res = await fetch(API_URL_DETAIL+`movie_id=${id}`);
    const json = await res.json();
    return json.data.movie;
}

