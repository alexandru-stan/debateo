import axios from "axios";
export function deleteFunction(id){

    return axios.delete("http://localhost:8080/posts/"+id);

}