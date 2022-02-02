import * as React from 'react'
import s from './Navbar.module.css'
import { Link, animateScroll as scroll } from "react-scroll";
import PersonIcon from '@mui/icons-material/Person';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SchoolIcon from '@mui/icons-material/School';
import ContactMailIcon from '@mui/icons-material/ContactMail';

const Navbar = (props) => {

    console.log(PersonIcon)


    return (

            <nav className={s.nav} id='navBar'>
                <ul className={s.navInner}>
                    <li className={s.logo}>
                        <Link to='top' className={s.logoInner} spy={true} smooth={true} offset={-70} duration={500}>
                            <h1>
                            Agne Aleknavicute
                                <br/>
                            <span className={s.smallText}>Web Developer</span>
                            </h1>
                        </Link>
                    </li>
                    <li  className={s.navItem}>
                        <Link activeClass={s.linkItem} to="aboutMe" spy={true} smooth={true} offset={-70} duration={500}>
                            <PersonIcon  sx={{ fontSize: 30 }} className={s.personIcon}/>
                            <span className={s.linkItemText}>
                            About
                            </span>
                        </Link>
                    </li>
                    <li className={s.navItem}>
                        <Link activeClass={s.linkItem} to="projects" spy={true} smooth={true} offset={-70} duration={500}>
                            <BusinessCenterIcon sx={{ fontSize: 30 }} className={s.projectsIcon}/>
                            <span className={s.linkItemText}>
                            Projects
                            </span>
                        </Link>
                    </li>
                    <li className={s.navItem}>
                        <Link activeClass={s.linkItem} to="skills" spy={true} smooth={true} offset={-70} duration={500}>
                            <SchoolIcon sx={{ fontSize: 30 }} className={s.skillsIcon}/>
                            <span className={s.linkItemText}>
                            Skills
                            </span>
                        </Link>
                    </li>
                    <li className={s.navItem}>
                        <Link activeClass={s.linkItem} to="contacts" spy={true} smooth={true} offset={-70} duration={500}>
                            <ContactMailIcon sx={{ fontSize: 30 }} className={s.contactsIcon}/>
                            <span className={s.linkItemText}>
                            Contacts
                            </span>
                        </Link>
                    </li>
                </ul>
            </nav>

    )
}




export default Navbar;