export const SEARCH_ANIME = 'SEARCH_ANIME'

export function searchAnime(anime, page = 1){
    return function(dispatch) {
        return fetch(`https://api.jikan.moe/v3/search/anime?q=${anime}&page=${page}`)
            .then(response => response.json())
            .then(response => {
                dispatch({ type: SEARCH_ANIME, payload: response.results });
            });
    };
}