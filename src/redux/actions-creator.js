export const SEARCH_ANIME = 'SEARCH_ANIME';
export const GET_SCHEDULE = 'GET_SCHEDULE';
export const GET_ANIME_DETAIL = 'GET_ANIME_DETAIL';
export const GET_ANIME_VIDEOS = 'GET_ANIME_VIDEOS';

export function searchAnime(anime, page = 1){
    return function(dispatch) {
        return fetch(`https://api.jikan.moe/v3/search/anime?q=${anime}&page=${page}`)
            .then(response => response.json())
            .then(response => {
                dispatch({ type: SEARCH_ANIME, payload: response.results });
            });
    };
}

export function getSchedule(){
    return function(dispatch) {
        return fetch(`https://api.jikan.moe/v3/schedule`)
            .then(response => response.json())
            .then(response => {
                dispatch({ type: GET_SCHEDULE, payload: [
                    response.sunday,
                    response.monday,
                    response.tuesday,
                    response.wednesday,
                    response.thursday,
                    response.friday,
                    response.saturday,
                    response.other
                ]});
            });
    };
}

export function getAnimeDetail(id){
    return function(dispatch) {
        return fetch(`https://api.jikan.moe/v3/anime/${id}`)
            .then(response => response.json())
            .then(response => {
                dispatch({ type: GET_ANIME_DETAIL, payload: response});
            });
    };
}

export function getAnimeVideos(id){
    return function(dispatch) {
        return fetch(`https://api.jikan.moe/v3/anime/${id}/videos`)
            .then(response => response.json())
            .then(response => {
                dispatch({ type: GET_ANIME_VIDEOS, payload: {
                    id: id,
                    trailers: response.promo,
                    episodes: response.episodes
                }});
            });
    };
}