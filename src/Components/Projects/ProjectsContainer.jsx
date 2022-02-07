import React from 'react'
import Projects from "./Projects";
import {connect} from "react-redux";
import {changeCardClass, changeshow, isShowing} from "../../redux/projectsReducer";
import store from "../../redux/store";


const ProjectsContainer = (props) => {


    return (
        <Projects cards={props.cards}
                  isShowing={props.isShowing}/>
    )
}

let mapStateToProps = (state) => {
    return {
        cards: state.projects.cards,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        isShowing: (id) => {
            dispatch(isShowing(id))
        }
    }
}

const ProjectsContainerMap = connect(mapStateToProps, mapDispatchToProps)(ProjectsContainer)


export default ProjectsContainerMap;