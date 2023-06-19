import axios from "axios";
export function getComments(post){

return axios.get('http://localhost:8080/comments/'+post);


}