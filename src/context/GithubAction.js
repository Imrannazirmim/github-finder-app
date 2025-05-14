const GITHUB_URL = import.meta.env.VITE_GITHUB_URL;
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

//fetching data
export const fetchingData = async () => {
  const response = await fetch(`${GITHUB_URL}/users`, {
    headers: {
      Authorization: `token${GITHUB_TOKEN}`,
    },
  });
  const data = await response.json();

  return data;
};

//get single user
export const getUser = async (login) => {
  const response = await fetch(`${GITHUB_URL}/users/${login}`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  });
  if (response.status === 404) {
    window.location = "/error";
  } else {
    const data = await response.json();

    return data;
  }
};

//searching data
export const searchUser = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });

  const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
    headers: {
      Authorization: `token${GITHUB_TOKEN}`,
    },
  });
  const { items } = await response.json();
  return items;
};

// export const clearUsers = () => dispatch({ type: "CLEAR_USERS" });

//get repos
export const getUserRepos = async (login) => {
  const params = new URLSearchParams({
    q: "created",
    per_page: 10,
  });
  const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
    headers: {
      Authorization: `token${GITHUB_TOKEN}`,
    },
  });
  const data = await response.json();
  return data;
};
