import axios from "axios";

export function getAllEmployee() {
  console.log("############");

    return axios.get("https://localhost:44382/api/Employee", {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      }
    });
  }             
      
  export function employeeRegister(data) {
    console.log("register", data);
  
      return axios.post("https://localhost:44382/api/Employee/SignUp", data,{
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        }
      });
    }

    export function employeeAdd(data) {
      console.log("register", data);
    
        return axios.post("https://localhost:44382/api/Employee/AddEmployee", data,{
          headers: {
            "Content-Type": "application/json; charset=utf-8",
          }
        });
      }

    export function employeeLogin(data) {
      console.log("Login", data);
    
        return axios.post("https://localhost:44382/api/Employee/Login", data,{
          headers: {
            "Content-Type": "application/json; charset=utf-8",
          }
        });
      }

      export function employeeUpdate(id,data) {
        console.log("update", id);
        console.log("update data", data);

      
          return axios.put(`https://localho   st:44382/api/Employee/${id}`,data,{
            headers: {
              "Content-Type": "application/json; charset=utf-8",
            }
          });
        }
  
      