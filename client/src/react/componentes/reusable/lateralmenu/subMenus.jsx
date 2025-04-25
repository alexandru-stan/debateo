import React from "react";
import Image from "../img";
import collapse from "../../../../assets/img/collapse.png"
import { useState } from "react";
import { getSubscriptions } from "../../../../js/getSubscriptions";
import { formatImage } from "../../../../js/imageFormatting";
import { useNavigate } from "react-router-dom";
import { getHot } from "../../../../js/getHot";
import { useEffect } from "react";
import { useSelector } from "react-redux";
export const ComunidadesMasActivas = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [items, setItems] = useState(null);
    const nav = useNavigate();

    useEffect(() => {
        retrieve();
    }, []);

    function retrieve() {
        let temp = [];
        getHot().then(r => {
            
            r.data.forEach(e => {
                temp.push(
                    <div 
                        onClick={() => {
                            localStorage.setItem('cid', e.communityId);
                            nav('/community/' + e.communityId);
                        }}
                        className="w-full p-2 hover:cursor-pointer hover:brightness-125 bg-moradoOscuro flex items-center mt-2"
                        key={e.communityId}
                    >
                        <img
                            style={{ width: '50px', height: '50px', borderRadius: '100%' }}
                            src={formatImage(e.communityImage)}
                            alt={e.communityName}
                        />
                        <div  className="w-full p-2">
                            <p style={{textOverflow:'ellipsis',whiteSpace:'nowrap',overflow:'hidden', width:'90%'}}>{e.communityName}</p>
                        </div>
                    </div>
                );
            });
            setItems(temp); // Update the state after data is fetched
        });
    }

    return (
        <div className=" border-moradoLight">
            <div
                onClick={() => setCollapsed(!collapsed)}
                className="p-2 flex flex-col items-center hover:cursor-pointer hover:brightness-125 bg-moradoOscuro w-full justify-between"
            >
                <div className="flex p-1 items-center w-full">
                    <p className="Kanit  text-bold text-naranjaMolon">Comunidades más activas</p>
                    <Image style={{ width: '15%', marginLeft: 'auto' }} clase={collapsed ? "rotate-180" : ""} ruta={collapse} />
                </div>
            </div>
            {!collapsed && items ? (
                <div style={{ marginLeft: '10px' }}>
                    {items}
                </div>
            ) : null}
        </div>
    );
};

export const Suscripciones = (props) => {
    const [collapsed,setCollapsed] = useState(false);
    const [items,setItems] = useState(null);
    // const user = JSON.parse(localStorage.getItem('userData'));
    const nav = useNavigate();
    useEffect(() => {
        retrieve();
    }, []);

    function retrieve() {
        let temp = [];
        getSubscriptions(props.userData.username).then(r => {
            
            r.data.forEach(e => {
                temp.push(
                    <div
                        onClick={() => {
                            localStorage.setItem('cid', e.communityId);
                            nav('/community/' + e.communityId);
                        }}
                        className="w-full p-2 hover:cursor-pointer hover:brightness-125 bg-moradoOscuro flex items-center mt-2"
                        key={e.communityId}
                    >
                        <img
                            style={{ width: '50px', height: '50px', borderRadius: '100%' }}
                            src={formatImage(e.communityImage)}
                            alt={e.communityName}
                        />
                        <div className="w-full p-2">
                            <p>{e.communityName}</p>
                        </div>
                    </div>
                );
            });
            setItems(temp); // Update the state after data is fetched
        });
    }




    return (
    <div className="  border-moradoLight">
        <div onClick={()=> {
            setCollapsed(!collapsed)
            
            getSubscriptions(props.userData.username).then(r => {
                let temp = [];
                               r.data.forEach(e => {
             
                    temp.push(
                    <div onClick={()=> {
                        localStorage.setItem('cid',props.communityId);
                        nav('/community/'+props.communityId)
                    }} className="w-full items-center p-2 hover:cursor-pointer hover:brightness-125 bg-moradoOscuro  flex items-center mt-2 " key={e.communityId}>
                        
                            <img className={''} style={{width:'50px', height:'50px', borderRadius:'100%'}}  src={formatImage(e.communityImage)} alt={e.communityName} />
                       
                        <div className="w-full p-2">
                            <p>{e.communityName}</p>
                        </div>
                    </div>
               
                    )
               
                })

                
              

                setItems(temp);
            
            } )
            
          
            
            } } className="p-2   flex flex-col justify-center items-center hover:cursor-pointer hover:brightness-125 bg-moradoOscuro w-full justify-between ">
        <div className="flex p-1 items-center w-full">
        <p className="Kanit p-1 text-bold text-naranjaMolon">Suscripciones</p>
        <Image style={{width:'15%', marginLeft:'auto'}} clase={collapsed ? "rotate-180" : ""} ruta={collapse}/>
        </div>
        <div>
    
        </div>
       
       </div>
       {!collapsed ?
       <div style={{marginLeft:'10px'}}>
        {items} 
        </div>
       : null
       }
        </div>
    )

}

export const ComunidadesRecientes= () => {
  
    const [collapsed,setCollapsed] = useState(false);
    const [items,setItems] = useState(null);
    const comunidadesRecientes = localStorage.getItem("comunidadesRecientes");
    const rct = useSelector(state => state.recentCommunityTrigger.value);

    useEffect(()=>{

        
        let temp = [];
  
       comunidadesRecientes?.length > 0 ?
        
        JSON.parse(comunidadesRecientes).forEach(e => {
                temp.push(
            <div  onClick={()=> {
                localStorage.setItem('cid',e.communityId);
                nav('/community/'+e.communityId)
            }} className="w-full items-center p-2 hover:cursor-pointer hover:brightness-125 bg-moradoOscuro  flex items-center mt-2 " key={e.communityId}>
                
                    <img className={''} style={{width:'50px', height:'50px', borderRadius:'100%'}}  src={e.communityImage}  />
               
                <div className="w-full p-2">
                    <p>{e.communityName}</p>
                </div>
            </div>
       
        )

        setItems(temp);

        })

    
 
        : null


    },[rct])

    return (
        <div className="flex flex-col">
        <div onClick={()=> {
            
            setCollapsed(!collapsed)
           
            }} className="p-2  flex items-center hover:cursor-pointer hover:brightness-125 bg-moradoOscuro w-full justify-between ">
        <p className="Kanit p-1 text-bold text-naranjaMolon">Comunidades Recientes</p>
        <Image style={{width:'15%'}} clase={collapsed ? "rotate-180" : ""} ruta={collapse}/>
        </div>
        <div className="border-b-2 border-moradoLight">
        {items}
        </div>
   
       </div>
    )

}