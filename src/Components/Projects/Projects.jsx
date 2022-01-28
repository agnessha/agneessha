import React from 'react'
import s from './Projects.module.css'
import './Projects.css'

const Projects = (props) => {
    console.log(props)

    let zindex = 10;

    return (
        <div className={s.cards + ' ' + props.showing}>
            {props.cards.map(c => {

                return (

                        <div className={c.isShowing ? s.card + ' ' + c.show : s.card} style={{zIndex: zindex}}
                             onClick={() => {
                            props.isShowing(c.id)
                            props.showingFun();
                        }}>
                            <div className={s.card__imageHolder}>
                                <img className={s.card__image} src="https://source.unsplash.com/300x225/?wave"
                                     alt="wave"/>
                            </div>
                            <div className={s.cardTitle}>
                                <a href="" className={s.toggleInfo + '' + s.btn}>
                                    <span className={s.left}></span>
                                    <span className={s.right}></span>
                                </a>
                                <h2>
                                    Card title
                                    <small>Image from unsplash.com</small>
                                </h2>
                            </div>
                            <div className={s.cardFlap + '' + s.flap1}>
                                <div className={s.cardDescription}>
                                    This grid is an attempt to make something nice that works on touch devices. Ignoring
                                    hover
                                    states when they're not available etc.
                                </div>
                                <div className={s.cardFlap + '' + s.flap2}>
                                    <div className={s.cardActions}>
                                        <a  className={s.btn}>Read more
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                )
            })}


        </div>
    )
}

export default Projects;