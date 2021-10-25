const pageURL = 'https://api.themoviedb.org/3/';
const api_key = '2e7682b1d7783938ddf98fa7ea561f2e';
const serverRespListOfFilms = (period) =>{
   return fetch(`${pageURL}trending/all/${period}?api_key=${api_key}&language=en-US&page=1`)
    .then( res => res.json())
}

const serverRespFilm = (film_name) =>{
    return fetch(`${pageURL}search/movie?api_key=${api_key}&query=${film_name}`)
    .then( res => res.json())
}

const serverRespFilmInfo = (film_id) =>{
    return fetch(`${pageURL}movie/${film_id}?api_key=${api_key}`)
    .then( res => res.json())
}

const serverRespFilmCast = (film_id) =>{
    return fetch(`${pageURL}movie/${film_id}/credits?api_key=${api_key}`)
    .then( res => res.json())
}

const serverRespFilmReviews = (film_id) =>{
    return fetch(`${pageURL}movie/${film_id}/reviews?api_key=${api_key}`)
    .then( res => res.json())
}

const logger = {
    serverRespListOfFilms, serverRespFilmInfo, serverRespFilmCast, serverRespFilmReviews, serverRespFilm
  };

export default logger;