const tokenHeaderKey = process.env.REACT_APP_TOKEN_HEADER_KEY;

const setUserToken = (token) => {
	localStorage.setItem(tokenHeaderKey, token); //JSON.stringify(token)
};
const getUserToken = () => {
	let token = localStorage.getItem(tokenHeaderKey);
	console.log(token)
	return token
};
const removeUserToken = () => {
	localStorage.removeItem(tokenHeaderKey);
	return true;
};

export { setUserToken, getUserToken, removeUserToken };
