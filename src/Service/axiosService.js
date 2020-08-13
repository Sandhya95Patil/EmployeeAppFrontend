import axios from "axios";


export function get(url) {
    console.log("############");

    return axios.get(url, {
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        }
    });
}

export function post(url, data) {
    return axios.post(url, data, {
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        }
    });
}

export function put(url, data) {
    return axios.put(url, data, {
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        }
    });
}
