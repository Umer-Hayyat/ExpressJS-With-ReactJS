let accessTokenName = process.env.REACT_APP_ACCESS_TOKEN_NAME;
export const setAccessToken = (token) =>
  localStorage.setItem(accessTokenName, token);
export const getAccessToken = () => localStorage.getItem(accessTokenName);
