import React from 'react'
import Skills from "./Skills";
import {connect} from "react-redux";
import {change} from "../../redux/skillsReducer";


const SkillContainerFun = (props) => {



    return (
        <div>
            <Skills skills={props}/>
        </div>
    )
}

let mapStateToProps = (state) => {
    console.log(state.skillsPart)
    return {
        skills: state.skillsPart.skills
    }
}
let mapDispatchToProps = (dispatch) => {
    return{
        change: () => {
            dispatch(change());
        }
    }
}


const SkillContainer = connect(mapStateToProps, mapDispatchToProps)(SkillContainerFun)

export default SkillContainer;