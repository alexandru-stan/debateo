import React from "react";
import { useEffect,useState } from "react";
import { getCommentsByUsername } from "../../../../../js/getCommentsByUsername";
import { Comment } from "../../../reusable/comment";
export const UserComments = (props) => {
   
    const [commentsArr,setCommentsArr] = useState(<div>a</div>);
    
    useEffect(() => {

        getCommentsByUsername(JSON.parse(sessionStorage.getItem('user')).username).then(e => {
            let temp = [];
            console.log(e.data);
            e.data.forEach(obj => {
                temp.push(<Comment
                profileImage = {null}
                commentText={obj.commentText} 
                id = {obj.commentId}
                commentDate={obj.commentDate}
                username={'Tú'}


                />);

            


            })
            console.log(temp);
            setCommentsArr(temp);
        })



    },[])
    
    return (
        <div className="w-full flex flex-col items-center mt-5 p-1">
      {commentsArr}
        </div>
     
    )
}