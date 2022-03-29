const githubReducer = (state, action) => {
    switch(action.type){
        case 'GET_USERS':
            return {
                ...state,
                users: action.payload,
                loading: action.payload2,
            }
        case 'SINGLE_USER':
            return {
                ...state,
                user: action.payload,
                loading: action.payload2,
            }
        case 'SET_LOADING':
            return {
                ...state,
                loading: true
            }
        case 'GET_REPO':
            return {
                ...state,
                repos: action.payload,
                loading: false,
            }
        case 'CLEAR_USERS':
            return {
                ...state,
                users: []
            }
        default:
            return state
    }
}

export default githubReducer