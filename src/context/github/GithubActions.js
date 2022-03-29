import axios from 'axios'    
    
    const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
    const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

    const github = axios.create({
      baseURL: GITHUB_URL,
      headers: {Authorization: `Token ${GITHUB_TOKEN}`}
    })


    //Get search Results
    export const searchUsers = async (text) => {

        const params = new URLSearchParams({
          q: text,
        })

        //Axios Fetch
        const response = await github.get(`/search/users/?${params}`)
        return response.data.items
  
        //Classic Fetch
        // const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
        //     headers: {
        //       Authorization: `Token ${GITHUB_TOKEN}`
        //     }
        //   })
      
        //   const {items} = await response.json()
      
        //   return items
      }


      //Changed to Axios getUserAndReposn function below
      // export const getUser = async (login) => {
      //   // setLoading()
      //   const response = await fetch(`${GITHUB_URL}/users/${login}`, {
      //       headers: {
      //         Authorization: `Token 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`
      //       }
      //     })
          
      //     if(response.status === 404){
      //       window.location = '/notfound'
      //     }
      //     else{
      //       const data = await response.json()
      //       return data
      //     }
      // }
  
      // export const getRepos = async (login) => {
      //   const params = new URLSearchParams({
      //     sort: 'created',
      //     per_page: 10,
      //   })
      //   const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
  
      //       headers: {
      //         Authorization: `Token ${GITHUB_TOKEN}`
      //       }
      //     })
          
      //       const data = await response.json()
      //       return data
  
      // }


      export const getUserAndRepos = async(login) => {
        const [user, repos] = await Promise.all([
          github.get(`/users/${login}`),
          github.get(`/users/${login}/repos`)
        ])
        return { user: user.data, repos: repos.data }
      }