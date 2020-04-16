const baseURL = 'http://localhost:3001';
const loginURL = `${baseURL}/login`;
const validateURL = `${baseURL}/validate`;

const post = (url, data) => {
	const configurationObject = {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	};
	return fetch(url, configurationObject);
};

const get = (url, token) => {
	return token ? fetch(url, { headers: { AUTHORIZATION: token } }) : fetch(url);
};

const validate = (token) => {
	return get(validateURL, token).then((response) => response.json());
};

const login = (data) => {
	return post(loginURL, data).then((response) => response.json());
};

export default { login, validate };

//covers local storage token
const BASE_URL = 'http://localhost://3001/';
const fetchUserSurveys = () => {
	return fetch('http://localhost:3001/users/1');
};
