import {combineReducers, createStore} from "redux";
import projectsReducer from "./projectsReducer";
import skillsReducer from "./skillsReducer";


let reducers = combineReducers(
    {
        projects: projectsReducer,
        skillsPart: skillsReducer,
    }
)

let store = createStore(reducers)

export default store;