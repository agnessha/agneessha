import htmlImg from '../img/html.png'
import jsxImg from '../img/jsx.png'
import cssImg from '../img/css-3.png'
import sassImg from '../img/sass.png'
import materialImg from '../img/material.png'
import jsImg from '../img/js.png'
import reactImg from '../img/atom.png'
import jQueryImg from '../img/jquery.gif'
import wordPress from '../img/wordPress.png'
import gitHub from '../img/gitHub.jpg'
import figma from '../img/figma.png'

let defaultState = {
    skills: [
        {
            id: 1,
            title: 'HTML',
            subSkill: [
                {
                    title: 'HTML5',
                    img: htmlImg
                },
                {
                    title: 'JSX',
                    img: jsxImg
                }

            ]
        },
        {
            id: 2,
            title: 'CSS',
            subSkill: [
                {
                    title: 'CSS3',
                    img: cssImg
                },
                {
                    title: 'SASS',
                    img: sassImg
                },
                {
                    title: 'Material UI',
                    img: materialImg
                }
            ]
        },
        {
            id: 3,
            title: 'JavaScript',
            subSkill: [
                {
                    title: 'JavaScript',
                    img: jsImg
                },
                {
                    title: 'React',
                    img: reactImg
                },
                {
                    title: 'jQuery',
                    img: jQueryImg
                }
            ]
        },
        {
            id: 4,
            title: 'CMS',
            subSkill: [
                {
                    title: 'WordPress',
                    img: wordPress
                }
            ]
        },
        {
            id: 5,
            title: 'Other',
            subSkill: [
                {
                    title: 'GitHub',
                    img: gitHub
                },
                {
                    title: 'Figma',
                    img: figma
                }
            ]
        }
    ]
}

const skillsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'CHANGE':
            return {
                ...state
            }
        default:
            return {
                ...state,
                ...state.skills.subSkill
            };
    }
}

export const change = () => {
    return{
        type: 'CHANGE'
    }
}

export default skillsReducer;