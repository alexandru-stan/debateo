import axios from "axios";
import { SERV_PORT,SERV_DIR } from "../utilities";
export default  function  getRecommendations(){

    return  axios.get("http://"+SERV_DIR+":"+SERV_PORT+"/communities/recommend",{
        headers:{
            'Authorization':'Bearer '+ JSON.parse(localStorage.getItem('userData')).token,
            'Content-Type': 'application/json'
        }
    })


}