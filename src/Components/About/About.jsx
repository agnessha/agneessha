import * as React from 'react'
import s from './About.module.css'

const About = (props) => {

    return (
        <div>
            <div className={s.aboutHeader}>
                <h3>
                    About
                </h3>
            </div>
            <div className={s.aboutInner}>
                <div className={s.aboutInnerTitle}>
                    Mission-driven full stack developer with a passion for thoughtful UI design, collaboration, and
                    teaching.
                </div>
                <div className={s.aboutInnerText}>
                    I’ve always sought out opportunities and challenges that are meaningful to me. Although my
                    professional path has taken many twists and turns — from touring and recording artist, to employee
                    of the year at a non-profit, to dean's scholar at UPenn, to small business owner and entrepreneur —
                    I've never stopped engaging my passion to help others and solve problems.
                </div>
                <div className={s.aboutInnerTextSecond}>
                    As a web developer, I enjoy using my obsessive attention to detail, my unequivocal love for making
                    things, and my mission-driven work ethic to literally change the world. That's why I’m excited to
                    make a big impact at a high growth company.

                </div>

            </div>
        </div>
    )
}

export default About;