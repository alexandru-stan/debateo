import React, { useState } from "react";
import { Menu } from "../header/menu";
import collapse from "../../../../assets/img/collapse.png"
import Image from "../img"
import profileImage from "../../../../assets/img/stockProfileImage.jpg"
import { useWindowSize } from "@uidotdev/usehooks";
import { useRef } from "react";
import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
// import { update } from "../../../../redux-store/slices/LateralMenuRightVisibility";
// import { ComunidadesMasActivas,ComunidadesRecientes,Suscripciones } from "./subMenus";
import { refreshProfileImage } from "../../../../js/RefreshProfileImage";
import { formatImage } from "../../../../js/imageFormatting";
import { NewsCard } from "./news";
import { getNews } from "../../../../js/getNews";
import SpinnerLoader from "../SpinnerLoader";
import { Spinner } from "react-bootstrap";
import { setRightVisibility as update } from "../../../../redux-store/slices/LateralMenuVisibility";
export const LateralMenuRight = (props) => {
    
    const dispatch = useDispatch();
    const isFirstRender = useRef(true);
    const lateralMenuVisibilityRight = useSelector(state => state.lateralMenuVisibilty.value.right);
    const user = JSON.parse(sessionStorage.getItem('user'))
    const [profileImage,setProfileImage] = useState(JSON.parse(sessionStorage.getItem('user')).profileImageFile);
    const [news,setNews] = useState([]);

    const windowWidth = useWindowSize().width;

    useEffect(() => {
      
        windowWidth< 1101 ? dispatch(update('none')) : dispatch(update('flex'));
    },[windowWidth])

    useEffect(()=>{
        let temp = [];
        getNews().then(response => {
            
           
                        response.data.data.forEach(element => {
                console.log(element)
                temp.push(<NewsCard id={element.uuid} imagen ={element.image_url} titular={element.title} cuerpo = {element.description} enlace = {element.url} />  )
            });
            setNews(temp);
        }).catch(e => {
            temp.push(<NewsCard id={1} imagen ={"https://images.ecestaticos.com/_Oun23mlaCdecRt3xOetFB_lLlE=/0x0:2272x1497/600x315/filters:fill(white):format(jpg):quality(99):watermark(f.elconfidencial.com/file/0f2/6d9/13e/0f26d913e1b27ca111e62b656aa354da.png,0,275,1)/f.elconfidencial.com/original/fff/023/462/fff023462c3dc46315249549c4696fed.jpg"} titular={"James Middleton, hermano de Kate Middleton, relata como nunca su intento de suicidio y cómo su perra evitó que saltara al vacío"} cuerpo = {"En uno de los capítulos de sus memorias, que serán publicadas en pocos días, el cuñado del príncipe Guillermo recuerda al detalle la terrible noche que viv..."} enlace = {"https://www.vanitatis.elconfidencial.com/casas-reales/2024-09-14/james-middleton-confesion-depresion-intento-suicidio_3962126/"} />  )
            temp.push(<NewsCard id={2} imagen ={"https://www.rtpa.es/fotos//24/09/20240914121919_RTPA5539157.jpg"} titular={"La vuelta al cole, un esfuerzo añadido para los jóvenes con problemas de salud mental"
            } cuerpo = {"Los expertos recomiendan incluir la salud mental como uno de los pilares educativos"
            } enlace = {"https://www.rtpa.es/noticias-nacional/2024-09-14/La-vuelta-al-cole,-un-esfuerzo-añadido-para-los-jovenes-con-problemas-de-salud-mental_111726314504.html"
            } />  )
            temp.push(<NewsCard id={2} imagen ={"https://www.rtpa.es/fotos//24/09/20240914122559_RTPA5539184.jpg"} titular={"La Fundación Síndrome de Dravet va a abrir un laboratorio propio"} 
            cuerpo = {"Una cena benéfica en colaboración con Asociación de Veteranos del Sporting de Gijón"
            } enlace = {"https://www.rtpa.es/noticias-asturias/2024-09-14/La-Fundacion-Sindrome-de-Dravet-va-a-abrir-un-laboratorio-propio_111726314819.html"
            } />  )
            temp.push(<NewsCard id={3} imagen ={null} titular={"Ha subido el precio de la luz "} cuerpo = {"Ha subido el precio de la luz "} enlace = {"Ha subido el precio de la luz "} />  )
            setNews(temp);
        })
        
    },[]);

    return (


  

        <div id="lateralMenuRight" className={   "  flex  flex-col items-center bg-moradoOscuro  border-l-2 border-moradoLight"} style={{display:lateralMenuVisibilityRight,zIndex:'1',position:'fixed', overflow:'scroll',  height:'calc(100vh - 50px)', right:'0%', top:'7%', width:'21%'}}>
        {/* <NewsCard imagen={null} titular = {null} cuerpo = {null} enlace ={null}/>
         */}
         <p id="actualidad" style={{marginTop:'4rem'}} className="Kanit text-center font-bold text-3xl text-naranjaMolon">Actualidad</p>
           {news.length>0 ? news : <SpinnerLoader id='newsSpinner' />}

        </div>

    )

}