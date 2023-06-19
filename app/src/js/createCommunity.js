import axios from "axios";
export function createCommunity(form){

let formData = new FormData(form.current);
console.log(formData);
formData.append('creator',JSON.parse(sessionStorage.getItem('user')).username);


return axios.post("http://localhost:8080/communities/add",formData)

}