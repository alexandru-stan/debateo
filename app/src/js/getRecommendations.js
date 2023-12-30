import axios from "axios";
import { SERV_PORT,SERV_DIR } from "../utilities";
export default  function  getRecommendations(){

    return  axios.get("http://"+SERV_DIR+":"+SERV_PORT+"/communities/recommend")


}