import React from 'react'
import s from './Contacts.module.css'

const Contacts = (props) => {
    console.log(props)

    return (
        <div className={s.contacts}>
            <div className={s.contactsTitle}>
                <h3>Contacts</h3>
            </div>
            <div className={s.contactsInner}>
                {props.contacts.map(c => {
                    return (
                        <div className={s.contact}>
                            <a href={c.link} target='_blank'>
                            <img src={c.img} alt=""/>
                            <div className={s.contactTitle}>
                                {c.name}
                            </div>
                            </a>
                        </div>
                    )
                })}
            </div>
        </div>

    )
}

export default Contacts;