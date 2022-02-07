import cat from '../img/cat.png'


let defaultState = {
    cards: [
        {
            id: 1,
            img: cat,
            title: 'Interpol8r',
            subTitle: 'Experimental web app with homemade recursive string interpolation.',
            details: ['Ruby on Rails backend', 'Bulma CSS frontend', 'String interpolation via recursion', 'Dependency free JS config'],
            show: 'show',
            isShowing: false
        },
        {
            id: 2,
            img: cat,
            title: 'Interpol8r',
            subTitle: 'Experimental web app with homemade recursive string interpolation.',
            details: ['Ruby on Rails backend', 'Bulma CSS frontend', 'String interpolation via recursion', 'Dependency free JS config'],
            show: 'show',
            isShowing: false
        },
        {
            id: 3,
            img: cat,
            title: 'Interpol8r',
            subTitle: 'Experimental web app with homemade recursive string interpolation.',
            details: ['Ruby on Rails backend', 'Bulma CSS frontend', 'String interpolation via recursion', 'Dependency free JS config'],
            show: 'show',
            isShowing: false
        }
    ],

}

const projectsReducer = (state=defaultState, action) => {
    switch (action.type) {

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


export const isShowing = (id) => {
    return {
        type: 'IS_SHOWING',
        id: id,
    }
}

export default projectsReducer;
