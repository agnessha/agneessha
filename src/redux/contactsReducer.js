import gitHub from '../img/premium-icon-github-4926624.png'
import linkedIn from '../img/premium-icon-linkedin-3536505.png'
import mail from '../img/premium-icon-gmail-2504727.png'


let defaultState = {
    contacts: [
        {
            name: 'GitHub',
            link: 'https://github.com/agnessha',
            img: gitHub
        },
        {
            name: 'LinkedIn',
            link: 'https://www.linkedin.com/in/agne-aleknavicute-819702201/',
            img: linkedIn
        },
        {
            name: 'Mail',
            link: 'mailto:aleknavicute@gmail.com',
            img: mail
        }
    ]
}

const contactsReducer = (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default contactsReducer;