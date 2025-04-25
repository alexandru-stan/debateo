import React, { useEffect, useState } from "react";
import { getUsers } from "../../../js/getUsers";
import { useDispatch, useSelector } from "react-redux";
import { assign } from "../../../redux-store/slices/PopUp";
import { VetoMenu } from "./subcomponents/vetoMenu";
import { unban } from "../../../js/unBan";
import { Info } from "../reusable/popup/Info";
export const UsuariosVetados = (props) => {

    const [users, setUsers] = useState(null);
    const [selected, setSelected] = useState([]);
    const popUp = useSelector(state => state.popUp.value);
    const dispatch = useDispatch();

    useEffect(() => {


        getUsers(props.id,props.type).then(response => {

            setUsers([...response.data])

        })





    }, [])


    useEffect(() => {

        console.log(selected);

    },

        [selected])



    return (
        <div id={props.type} className=" rounded-2xl p-2 mt-5 w-full flex flex-col items-center border-1  border-moradoLight">

            <div id={props.type + 'Header'} className='flex flex-row w-full border-b-2 p-2 w-full  items-center border-naranjaMolon'>
                <h1 className="text-naranjaMolon  text-lg font-bold     p-2" >{props.type == 'banned' ? 'Usuarios vetados' : 'Moderadores'}</h1>
                {selected.length > 0 ? <button onClick={() => {
                    unban(selected, props.id,props.type)
                    setUsers(prev => prev.filter(e => !selected.includes(e)));
                    setSelected(prev => prev.filter(e => !selected.includes(e)));

                }} className=" hover:bg-moradoLight ml-auto   rounded-md p-1  w-2/6 border-2 border-moradoLight bg-moradoFondo placeholder-gray-400  placeholder-gray-400 ">{props.type == 'banned' ? 'Eliminar veto' : 'Degradar usuario'}</button> : null}

                <button onClick={() => { dispatch(assign({ block: true, value: <VetoMenu type={props.type} banned={users} setBanned={setUsers} id={props.id} /> })) }} className=" hover:bg-moradoLight ml-auto   rounded-md p-1  w-2/6 border-2 border-moradoLight bg-moradoFondo placeholder-gray-400  placeholder-gray-400 ">{props.type == 'banned' ? 'Vetar usuario' : 'Ascender usuario'}</button>

            </div>
            <div className="flex flex-col w-full p-2">
                {users != null ?

                    users.map((item) => {
                        return (
                            <div className='flex mt-2 ' key={props.type + item}>
                                {/* <p style={{ }} className='text-naranjaMolon text-center Kanit font-bold'>{index++}</p> */}
                                <label className='custom-checkbox text-lg ' onChange={(event) => {

                                    event.target.checked == true
                                        ?
                                        setSelected(prevSelected => [...prevSelected, item])

                                        :
                                        setSelected(prevSelected => prevSelected.filter(e => e != item));

                                    console.log(selected);

                                }} for={props.type + item}>
                                    <input id={props.type + item} className='cursor-pointer' style={{ verticalAlign: 'middle' }} type="checkbox" />
                                    <span className='checkmark'></span>
                                    {item}
                                </label>


                            </div>)
                    })


                    : <p>jeje cargando</p>}

            </div>


        </div>
    )

}