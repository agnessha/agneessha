import React from 'react'
import s from './Top.module.css'

const Top = (props) => {

    return (
        <div className={s.background}>
            <div className={s.cube}></div>
            <div className={s.cube}></div>
            <div className={s.cube}></div>
            <div className={s.cube}></div>
            <div className={s.cube}></div>
            <div className={s.cube}></div>
            <div className={s.cube}></div>

        </div>
    )
}

export default Top;