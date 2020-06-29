import axios from 'axios';

export const createUser = (name, email, password) => async (dispatch) => {
	try {
		const res = await axios.post('/users', { name, email, password });
		dispatch({
			type: 'create-user',
			payload: res.data,
		});
	} catch (e) {
		alert(e);
	}
};
