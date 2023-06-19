import axios from "axios";
export function getPost(post){


    return axios.get("http://localhost:8080/posts/"+post);


}