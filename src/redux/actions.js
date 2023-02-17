import { GET_ALL_CHARACTERS, GET_CHARACTER_DETAIL, CLEAN_CHARACTER_DETAIL} from "./actions.types";
import axios from 'axios';


export const getAllCharacters = ()=>{ //SIEMPRE que queramos solicitar info a un server(usar 
    //fetch o axios) la action retorna otra funcion e inteviene el middleware.
    return function(dispatch){
        fetch('https://rickandmortyapi.com/api/character/')
        //.jason: agarra la info q traje y lo parsea(traduce) a obj de JS
        .then(response => response.json()) 
        //el segundo THEN, agarra la info traducida
        .then(data =>{
            return dispatch({type: GET_ALL_CHARACTERS, payload: data.results })
        })
    }
}

export const getCharacterDetail = (id) => {
    return function(dispatch){
        axios(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => response.data)
        .then(data => {
            return dispatch({type: GET_CHARACTER_DETAIL, payload: data})
        })
    }
}

export const cleanCharacterDetail = ()=>{
    return {type: CLEAN_CHARACTER_DETAIL}
}
