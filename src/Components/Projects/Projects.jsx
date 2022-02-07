import React from 'react'
import s from './Projects.module.css'
import './Projects.css'

const Projects = (props) => {
    console.log(props)

    let notShowing = 'projectDetailsHide'
    let isShowing = 'projectDetails'


    return (
        <div className={s.projects}>
            <div className={s.projectsTitle}>
                <h3>
                    Projects
                </h3>
            </div>
            <div className={s.projectCards}>
                {props.cards.map(c => {
                    return (
                        <div>
                            <div className={s.project}>
                                <img className={s.projectImg} src={c.img} alt=""/>
                                <div className={s.projectTitle}>
                                    {c.title}
                                </div>
                                <div className={s.projectSubTitle}>
                                    {c.subTitle}
                                </div>
                                <div className={s.projectBtn}>
                                    <button onClick={() => {
                                        props.isShowing(c.id)
                                    }} className={s.btn}>
                                        Show more
                                    </button>
                                </div>

                            </div>
                            <div className={c.isShowing ? isShowing : notShowing}>
                                <ul>
                                    {c.details.map(d => {
                                        console.log(c.details)
                                        return (
                                            <li>
                                                {d}
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default Projects;