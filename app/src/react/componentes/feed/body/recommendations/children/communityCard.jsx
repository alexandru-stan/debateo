import React from "react";
import { useNavigate } from "react-router-dom";

const CommunityCard = (props)=> {

    const navigate = useNavigate();

    return <div onClick={ () => {

     localStorage.setItem("cid",props.communityId);
     navigate('/community/'+props.communityId);
}} className="w-1/6  backdrop-brightness-125 flex items-center
     justify-evenly m-3 hover:border-2 hover:border-naranjaMolon hover:cursor-pointer">
                <div className=" p-3 w-2/4  ">
                <img style={{ height:'100px', width:'100%' }} src={props.communityImage}></img>
                </div>

                <div className=" p-3  w-2/4 ">
                <h5>{props.communityName} {props.communityId}</h5> 
                </div>

            </div>
}

export default CommunityCard;