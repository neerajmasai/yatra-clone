import axios from 'axios';

function fetchUser({email, password}) {
    if (!email || !password) {
        console.log("No value is entered");
        return;
    }

    const config = {
        method: 'get',
        url: "http://localhost:2345/users"
    };

    return axios(config);
}

export { fetchUser };