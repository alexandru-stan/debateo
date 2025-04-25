import React from "react";
import Imagen from '../../../reusable/img';
import IconoComentar from '../../../../../assets/img/postFooterIcons/comentar.png';
import IconoGuardar from '../../../../../assets/img/postFooterIcons/guardar.png';
import IconoVotar from '../../../../../assets/img/postFooterIcons/votar.png';
import IconoReportar from '../../../../../assets/img/postFooterIcons/reportar.png';
import IconoVotado from '../../../../../assets/img/postFooterIcons/IconoVotado.png';
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { assign } from "../../../../../redux-store/slices/CommentPost";
import { SERV_DIR, SERV_PORT } from "../../../../../utilities";
import { useLocation } from "react-router-dom";
export const PostFooter = (props) => {
    const nav = useNavigate();
    const loc = useLocation();
    let postInfo = props.postInfo;
    const [likeImage, setLikeImage] = useState(IconoVotar);
    const [like, setLike] = useState(postInfo.liked == 1 ? true : false);
    const [likesCount, setLikesCount] = useState(postInfo.likes);
    const username = props.userData.username;

    // let username = JSON.parse(localStorage.getItem('userData')).username
    function changeLikeStatus() {

        if (!like) axios.post("http://" + SERV_DIR + ":" + SERV_PORT + "/likes/" + username + "/" + postInfo.publicationId, null, {
            headers: {
                'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('userData')).token,
                'Content-Type': 'application/json'
            }
        }).then(() => {

            setLikesCount(likesCount + 1)
            // postInfo.liked=1;
        }
        );
        else axios.delete("http://" + SERV_DIR + ":" + SERV_PORT + "/likes/" + username + "/" + postInfo.publicationId, {
            headers: {
                'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('userData')).token,
                'Content-Type': 'application/json'
            }
        }).then(() => {

            setLikesCount(likesCount - 1)
            // postInfo.liked=0;

        }
        );
        setLike(!like);

    }






    return (
        <div style={{ height: '10%' }} className='post-footer  items-center  flex p-1 text-white '>

            <span style={{}} className=" likeButton  items-center p-2  flex items-center  " onClick={() => {

                changeLikeStatus();
            }} title='Me gusta'> <Imagen
            onClick={() => {

                changeLikeStatus();
            }}
                    onmouseover={()=>{setLikeImage(IconoVotado)}}
                    onmouseout={ ()=>{setLikeImage(IconoVotar)}}



                    style={{ width: '2rem' }} clase={" likeButton hover:cursor-pointer "} ruta={like ? IconoVotado : likeImage} /> <span className="Kanit" style={{ marginLeft: '10%', fontSize: 'smaller' }}>{likesCount}</span></span>

            <span style={{}} className="  p-2  flex items-center  m-1  " onClick={() => {


                // !loc.pathname.includes("comments") ? nav("/" + postInfo.publicationId + "/comments") : null;


            }} title='Comentar'><Imagen style={{ width: '2rem' }} clase={" hover:cursor-pointer  "} ruta={IconoComentar} /> <span className="Kanit " style={{ marginLeft: '10%', fontSize: 'smaller' }}>{postInfo.comments}</span></span>



        </div>



    )
}