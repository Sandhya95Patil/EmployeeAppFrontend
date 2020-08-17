import Axios from "../Service/axiosService";

const axiosService = new Axios();

export function getAllEmployee() {
  return axiosService.get()
}

export function employeeRegister(url, data) {
  return axiosService.post("SignUp", data);
}

export function employeeAdd(url, data) {
  return axiosService.post("AddEmployee", data)
}

export function employeeLogin(url, data) {
  console.log("Login", data);

  return axiosService.post("Login", data)
}

export function employeeUpdate(id, data) {
  return axiosService.put(`${id}`, data)
}

export function employeeDelete(id){
  return axiosService.delete(`${id}`)
}

