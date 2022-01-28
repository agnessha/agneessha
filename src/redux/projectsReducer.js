
let defaultState = {
    cards: [
        {
            id: 1,
            img: null,
            title: 'Interpol8r',
            subTitle: 'Experimental web app with homemade recursive string interpolation.',
            details: ['Ruby on Rails backend', 'Bulma CSS frontend', 'String interpolation via recursion', 'Dependency free JS config'],
            show: 'show',
            isShowing: false
        },
        {
            id: 2,
            img: null,
            title: 'Interpol8r',
            subTitle: 'Experimental web app with homemade recursive string interpolation.',
            details: ['Ruby on Rails backend', 'Bulma CSS frontend', 'String interpolation via recursion', 'Dependency free JS config'],
            show: 'show',
            isShowing: false
        },
        {
            id: 3,
            img: null,
            title: 'Interpol8r',
            subTitle: 'Experimental web app with homemade recursive string interpolation.',
            details: ['Ruby on Rails backend', 'Bulma CSS frontend', 'String interpolation via recursion', 'Dependency free JS config'],
            show: 'show',
            isShowing: false
        }
    ],
    showing: '',

}

const projectsReducer = (state=defaultState, action) => {
    switch (action.type) {
        case 'CHANGE_CLASS':
            if (state.showing === '') {
                state.showing = 'showing'
            } else {
                state.showing = ''
            }
            return {
                ...state,
                showing: state.showing
            }
        case 'SHOW_CLASS':
            return {
                ...state,
                cards: state.cards.map(c => {
                    if (c.id === action.id && c.show === '') {
                        return {
                            ...c, show: 's.show'
                        }
                    } else if (c.id === action.id && c.show === 's.show') {
                        return {
                            ...c, show: ''
                        }
                    } else {
                        return c;
                    }
                })
            }
        case 'IS_SHOWING':
            return {
                ...state,
                cards: state.cards.map(c => {
                    if (c.id === action.id && c.isShowing === false) {
                        return {
                            ...c, isShowing: true
                        }
                    } else if (c.id === action.id && c.isShowing === true) {
                        return {
                            ...c, isShowing: false
                        }
                    } else {
                        return c;
                    }
                })}
        default:
            return state;


    }
}

export const changeCardClass = () => {
    return ({
        type: 'CHANGE_CLASS',

    })
}
export const changeshow = (id) => {
    return ({
         type: 'SHOW_CLASS',
        id: id,
        })
}
export const isShowing = (id) => {
    return {
        type: 'IS_SHOWING',
        id: id,
    }
}

export default projectsReducer;
