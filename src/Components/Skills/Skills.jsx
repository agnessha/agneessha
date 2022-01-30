import React from 'react'
import s from './Skills.module.css'
import html from './../../img/html.png'
import jsx from './../../img/jsx.png'

const Skills = (props) => {
    console.log(props)
    return (
        <div className={s.skills}>
            <div className={s.skillsTitle}>
                <h3>
                    SKILLS
                </h3>
            </div>
            <div className={s.skillsItems}>
                {props.skills.skills.map( k => {
                    return (
                        <div className={s.skillsItem}>
                            <h4 className={s.skillsItemTitle}>
                                {k.title}
                            </h4>
                            <div className={s.skillsItemInner}>
                                {k.subSkill.map( subK => {
                                    return (
                                        <div className={s.item}>
                                            <img src={subK.img} alt=""/>
                                            <div className={s.itemText}>
                                                {subK.title}
                                            </div>
                                        </div>
                                    )
                                })}

                            </div>
                        </div>
                    )
                })}


            </div>
        </div>
    )
}

export default Skills;