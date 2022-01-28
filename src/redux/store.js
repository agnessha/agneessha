import {combineReducers, createStore} from "redux";
import projectsReducer from "./projectsReducer";


let reducers = combineReducers(
    {
        projects: projectsReducer,
    }
)

let store = createStore(reducers)

export default store;