import React from 'react'
import Projects from "./Projects";
import {connect} from "react-redux";
import {changeCardClass, changeshow, isShowing} from "../../redux/projectsReducer";
import store from "../../redux/store";


const ProjectsContainer = (props) => {


    return (
        <Projects cards={props.cards}
                  showing={props.showing}
                  showingFun={props.showingFun}
                  isShowing={props.isShowing}/>
    )
}

let mapStateToProps = (state) => {
    return {
        cards: state.projects.cards,
        showing: state.projects.showing
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        showingFun: () => {
            dispatch(changeCardClass())
        },
        showFun: (id, show) => {
            dispatch(changeshow(id, show))
        },
        isShowing: (id) => {
            dispatch(isShowing(id))
        }
    }
}

const ProjectsContainerMap = connect(mapStateToProps, mapDispatchToProps)(ProjectsContainer)


export default ProjectsContainerMap;