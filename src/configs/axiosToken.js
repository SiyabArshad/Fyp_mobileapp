import axios from "./api";

const setAuthToken = (token) => {
    if (token) {
        axios.defaults.headers.common["token"] = token;
    } else {
        delete axios.defaults.headers.common["token"];
    }
};

export default setAuthToken;