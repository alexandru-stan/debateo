import axios from "axios";
export function getNews(){
    let token1 = '8WSavm9sOG2NxHgYHIrz6XRdNFLQkMhCGAO3BU1F';
    return axios.get("https://api.thenewsapi.com/v1/news/all?language=es&api_token="+token1+"&locale=es&page=2")

}