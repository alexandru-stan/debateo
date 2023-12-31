import React from "react";

const CommunityCard = (props)=> {
    return <div className="w-1/6  backdrop-brightness-125 flex items-center
     justify-evenly m-3">
                <div className=" p-3 w-2/4  ">
                <img style={{ height:'100px', width:'100%' }} src={props.communityImage}></img>
                </div>

                <div className=" p-3  w-2/4 ">
                <h5>{props.communityName}</h5> 
                </div>

            </div>
}

export default CommunityCard;