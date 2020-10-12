import {SEARCH_ANIME, GET_SCHEDULE, GET_ANIME_DETAIL, GET_ANIME_VIDEOS} from './actions-creator.js';

const initialState = {
    lastSearch: [],
    schedule: [],
    animeDetail: {},
    animeVideos: {id: null, trailers:[], episodes:[]}
}

export default (state = initialState, action)=>{
    switch (action.type) {
        case SEARCH_ANIME:
            return {...state, lastSearch: action.payload}
        case GET_SCHEDULE:
            return {...state, schedule: action.payload}
        case GET_ANIME_DETAIL:
            return {...state, animeDetail: action.payload}
        case GET_ANIME_VIDEOS:
            return {...state, animeVideos: action.payload}
        default:
            return state;
    }
}
