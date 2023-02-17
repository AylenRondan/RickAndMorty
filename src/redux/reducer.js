import { CLEAN_CHARACTER_DETAIL, GET_ALL_CHARACTERS, GET_CHARACTER_DETAIL } from "./actions.types";

const initialState = {
    characters : [],
    charactersDetail : {},
};


const reducer = (state = initialState, action) => {
    switch(action.type){
        case GET_ALL_CHARACTERS:
            return {
                ...state,
                characters: action.payload
        }

        case GET_CHARACTER_DETAIL:
            return {
                ...state,
                characterDetail:action.payload
            }
        case CLEAN_CHARACTER_DETAIL:
            return {
                ...state,
                characterDetail:{}
            }    
        default:
            return {...state}
    }
}

export default reducer;