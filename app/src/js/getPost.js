import axios from "axios";
export function getPost(username,post){


    return axios.get("http://localhost:8080/posts/getPost/"+username+"/"+post);


}