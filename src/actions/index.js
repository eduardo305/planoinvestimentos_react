import axios from 'axios';

export const signin = ({ username, password }) => {
    return (dispatch) => {
        axios.post('http://localhost:3090/api/v1/auth/signin', {
            email: username,
            password: password
        })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
    };
};