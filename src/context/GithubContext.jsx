import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

const GITHUB_URL = import.meta.env.VITE_GITHUB_URL;
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    loading: true,
    user: {},
    repos: []
  };
  const [state, dispatch] = useReducer(githubReducer, initialState);

  //fetching data
  const fetchingData = async () => {
    const response = await fetch(`${GITHUB_URL}/users`, {
      headers: {
        Authorization: `token${GITHUB_TOKEN}`,
      },
    });
    const data = await response.json();
    dispatch({ type: "GET_USERS", payload: data });
  };

  //searching data
  const searchUser = async (text) => {
    const params = new URLSearchParams({
      q: text,
    });

    const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
      headers: {
        Authorization: `token${GITHUB_TOKEN}`,
      },
    });
    const { items } = await response.json();
    dispatch({ type: "GET_USERS", payload: items });
  };

  const clearUsers = () => dispatch({ type: "CLEAR_USERS" });

  //get single user
  const getUser = async (login) => {
  
    const response = await fetch(`${GITHUB_URL}/users/${login}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    if (response.status === 404) {
      window.location = "/error";
    } else {
      const data = await response.json();

      dispatch({ type: "GET_USER", payload: data });
    }
  };

  //get repos
  const getUserRepos = async (login) => {

    const params = new URLSearchParams({
      q: 'created',
      per_page: 10
    })
    const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
      headers: {
        Authorization: `token${GITHUB_TOKEN}`
      }
    });
    const data = await response.json();
    dispatch({type: 'GET_REPOS', payload: data})
  }
  

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        fetchingData,
        searchUser,
        clearUsers,
        user: state.user,
        getUser,
        repos: state.repos,
        getUserRepos
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
export default GithubContext;
