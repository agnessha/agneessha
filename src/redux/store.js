import {combineReducers, createStore} from "redux";
import projectsReducer from "./projectsReducer";
import skillsReducer from "./skillsReducer";
import contactsReducer from "./contactsReducer";


let reducers = combineReducers(
    {
        projects: projectsReducer,
        skillsPart: skillsReducer,
        contactsPart: contactsReducer,
    }
)

let store = createStore(reducers)

export default store;