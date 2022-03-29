import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext()


export const GithubProvider = ({children}) => {
    const initialState = {
      users: [],
      user: {},
      loading: false,
      repos: []
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)


    //Set loading
    // const setLoading = () => dispatch({
    //   type: 'SET_LOADING'
    // })

    // const clearUsers = () => dispatch({
    //   type: 'CLEAR_USERS'
    // })
    // console.log(state)

    return <GithubContext.Provider value={{
        ...state,
        dispatch,
        // users: state.users,
        // loading: state.loading,
        // user: state.user,
        // repos: state.repos,
    }}>
        {children}
    </GithubContext.Provider>
}

export default GithubContext