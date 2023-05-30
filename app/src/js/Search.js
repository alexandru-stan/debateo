import axios from "axios";
export function searchRequest(string){

    return axios.get('http://localhost:8080/communities/search/'+string);

}