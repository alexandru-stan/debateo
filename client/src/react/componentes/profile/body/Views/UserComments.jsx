import React from "react";
import { useEffect,useState } from "react";
import { getCommentsByUsername } from "../../../../../js/getCommentsByUsername";
import { Comment } from "../../../reusable/comment";
export const UserComments = (props) => {
   
    const [commentsArr,setCommentsArr] = useState(<div>a</div>);
    
    useEffect(() => {
       
        getCommentsByUsername(props.user.username).then(e => {
            let temp = [];
                        e.data.forEach(obj => {
                temp.push(<Comment
                profileImage = {null}
                commentText={obj.commentText} 
                id = {obj.commentId}
                commentDate={obj.commentDate}
                username={'Tú'}


                />);

            


            })
                        setCommentsArr(temp);
        })



    },[])
    
    return (
        <div className={props.visibility ? "w-full flex flex-col items-center mt-5 p-1" : "hidden"}>
      {commentsArr}
        </div>
     
    )
}