import React from "react";
import { useNavigate } from "react-router-dom";

const CommunityCard = (props)=> {

    const navigate = useNavigate();

    return <div id='individualReco'  onClick={ () => {

     localStorage.setItem("cid",props.communityId);
     navigate('/community/'+props.communityId);
}} className="w-1/6   backdrop-brightness-125 flex flex-row items-center
       hover:border-2 m-2 hover:border-naranjaMolon hover:cursor-pointer">
        
                <div className=" Reco-Imagen  w-4/6  ">
                <img style={{ height:'100px', width:'100%' }} src={props.communityImage}></img>
                </div>

                <div className="   w-full text-naranjaMolon font-bold flex justify-center ">
                <h5>{props.communityName}</h5> 
                {/* <p>{props.communityMembers}</p> */}
                </div>

            </div>
}

export default CommunityCard;