import {createStore, applyMiddleware, compose} from "redux";
import { thunkMiddleware } from "redux-thunk";
import reducer from './reducer';

//La linea de abajo es la config para poder usar redux devtools, ESTA INSTALADA EN FIREFOX
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer, 
    composeEnhancer(applyMiddleware(thunkMiddleware)) //Esta linea es para poder hacer
    //peticiones a un server
    );

    export default store;