import React, { useEffect, useState } from 'react';
import Image from '../../reusable/img';
import { formatImage } from '../../../../js/imageFormatting';
import { useLocation, useNavigate } from 'react-router-dom';
import SpinnerLoader from '../../reusable/SpinnerLoader';
import sensible from "../../../../assets/img/sensible.png"

export const CommunityInfo = (props) => {


    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [bannedButton, setBannedButton] = useState();
    const [subscribeButton, setSubscribeButton] = useState();
    const [adminButton, setAdminButton] = useState();
    const [createButton, setCreateButton] = useState();





    useEffect(() => {
        setSubscribeButton();
        setAdminButton();
        setCreateButton();
        setBannedButton();
        console.log(props.communityInfo);
        if (props.communityInfo.subscription?.subscriptionLevel != 'BANNED') {

            // console.log("no estas baneado");

            if (!(props.communityInfo.subscription?.subscriptionLevel == null && props.communityInfo.privateCommunity && props.communityInfo.communityCreator != JSON.parse(localStorage.getItem("userData")).username)) {
                setCreateButton(<button style={{ marginRight: '2%' }} className=" hover:bg-moradoLight  rounded-md p-2  border-2 border-moradoLight bg-moradoFondo placeholder-gray-400  placeholder-gray-400 " onClick={() => {
                    navigate("/upload/" + props.communityInfo.communityId);
                }}>Crear publicación</button>)
            }

            if (props.communityInfo.subscription?.subscriptionLevel != 'MOD' && props.communityInfo.communityCreator != JSON.parse(localStorage.getItem("userData")).username) {

                setSubscribeButton(<button onClick={props.recallPostRequest} className=" hover:bg-moradoLight  rounded-md p-2  border-2 border-moradoLight bg-moradoFondo placeholder-gray-400  placeholder-gray-400 ">{props.communityInfo.subscription==null ? 'Suscribirse' : 'Desuscribirse'}</button>)


            } else {



                setAdminButton(<button onClick ={() => navigate("/admin/"+props.communityInfo.communityId)} className=" hover:bg-moradoLight  rounded-md p-2  border-2 border-moradoLight bg-moradoFondo placeholder-gray-400  placeholder-gray-400 ">Administrar</button>)
            }






        } else {
            // console.log("estas baneado");
            setBannedButton(<p className='Kanit font-bold text-lg text-naranjaMolon'>&#128274; HAS SIDO VETADO DE ESTA COMUNIDAD &#128274;</p>)
        }


    }, [props.communityInfo])


    //     {

    //         props.communityInfo.subscription?.subscriptionLevel == 'BANNED' ?

    //             <p className='Kanit font-bold text-lg text-naranjaMolon'>&#128274; HAS SIDO VETADO DE ESTA COMUNIDAD &#128274;</p>

    //             :


    //             props.communityInfo.subscription?.subscriptionLevel == null && props.communityInfo.privateCommunity ?

    //                 null

    //                 :

    //                 <button style={{ marginRight: '2%' }} className=" hover:bg-moradoLight  rounded-md p-2  border-2 border-moradoLight bg-moradoFondo placeholder-gray-400  placeholder-gray-400 " onClick={() => {
    //                     navigate("/upload/" + props.state);
    //                 }}>Crear publicación</button>
    // }

    // {props.communityInfo.subscription?.subscriptionLevel props.communityInfo.subscription?.subscriptionLevel=='MOD' || props.communityInfo.communityCreator == JSON.parse(localStorage.getItem("userData")).username ?




    //          <button className=" hover:bg-moradoLight  rounded-md p-2  border-2 border-moradoLight bg-moradoFondo placeholder-gray-400  placeholder-gray-400 ">Administrar</button>

    //          : 

    //          <button className=" hover:bg-moradoLight  rounded-md p-2  border-2 border-moradoLight bg-moradoFondo placeholder-gray-400  placeholder-gray-400 ">Suscribirse</button>
    // }




    return (

        <div style={{}} className='community-info  Kanit p-2   flex flex-col justify-center items-center  w-2/6 border-b border-moradoLight rounded-lg '>
            {props.communityInfo == undefined ? <SpinnerLoader hijoStyle={{ width: '4rem' }} id='loaderCommunityInfo' /> : <div className='info      w-5/6'>

                <div className='  communityImageAndInfo flex flex-col '>

                    <div className='flex flex-row  items-center'>
                        <div style={{ marginRight: 'auto', width: '5rem' }} className='community-image  flex  items-center  h-comInfo justify-center   '><img src={formatImage(props.communityInfo.communityImage)} className='imagenComunidad ' style={{ borderRadius: '50%', height: '5rem', width: '100%' }} /></div>


                        <div style={{ width: '80%' }} className=' community-name p-3    '>
                            <p style={{ fontSize: '1rem', overflowWrap: 'break-word' }} className='Kanit font-bold'>{props.communityInfo.communityName}</p>
                            <p className="text-naranjaMolon Kanit">{props.communityInfo.communityMembers} miembros</p>
                            <p className='community-creator Kanit '>Creada por <span className='text-naranjaMolon font-bold'>{props.communityInfo.communityCreator}</span></p>
                        </div>
                        {/* <div  className=' bg-emerald-950 admin '>{props.communityInfo.admin}</div> */}


                    </div>
                </div>
                <div className=' p-2 description'>{props.communityInfo.communityDescription}
                    <div className='flex p-2 justify-center' style={{ marginTop: '2%' }} id='communityButtons'>


                        {bannedButton}
                        {createButton}
                        {subscribeButton}
                        {adminButton}





                    </div>


                </div>
                {props.communityInfo.sensitiveContent ? <div className='flex flex-row items-center justify-center  '> <img className='' style={{ width: '10%' }} src={sensible} /><p className='Kanit  text-naranjaMolon text-center text-sm'>Esta comunidad puede incluir contenido sensible</p></div> : null}

            </div>
            }


        </div>

    );
}