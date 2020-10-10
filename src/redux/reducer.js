import {SEARCH_ANIME} from './actions-creator.js';

const initialState = {
    lastSearch: []
}

export default (state = initialState, action)=>{
    switch (action.type) {
        case SEARCH_ANIME:
            return {...state, lastSearch: action.payload}
        default:
            return state;
    }
}