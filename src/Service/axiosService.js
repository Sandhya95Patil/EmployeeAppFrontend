import axios from "axios";

const baseUrl="https://localhost:44382/api/Employee/";
export default class Axios {
   get() {
        return axios.get(baseUrl, {
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            }
        });
    }
      post(url, data) {
        return axios.post(baseUrl+url, data, {
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            }
        });
    }
    
      put(id, data) {
        return axios.put(baseUrl+id, data, {
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            }
        });
    }

    delete(id){
        return axios.delete(baseUrl+id,{
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            }
        });
    }
}

