import {SEARCH_ANIME, GET_SCHEDULE, GET_ANIME_DETAIL, GET_ANIME_VIDEOS, GET_ANIME_EPISODES} from './actions-creator.js';

const initialState = {
    lastSearch: [],
    schedule: [],
    animeDetail: {},
    animeVideos: {},
    animeEpisodes: {}
}

export default (state = initialState, action)=>{
    let newState;
    switch (action.type) {
        case SEARCH_ANIME:
            return {...state, lastSearch: action.payload}
        case GET_SCHEDULE:
            return {...state, schedule: action.payload}
        case GET_ANIME_DETAIL:
            return {...state, animeDetail: action.payload}
        case GET_ANIME_VIDEOS:
            newState = {...state}
            newState.animeVideos[action.id] = action.payload;
            return newState
        case GET_ANIME_EPISODES:
            newState = {...state}
            newState.animeEpisodes[action.id] = action.payload;
            return newState
        default:
            return state
    }
}
