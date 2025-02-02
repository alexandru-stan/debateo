import {SERV_PORT,SERV_DIR} from "../utilities";
import {useSelector, useDispatch} from "react-redux";
import React from "react";
import * as StompJs from "@stomp/stompjs";
import messagenot from "../assets/audio/newMessage.mp3"

console.log("jeje");
let audio = new Audio(messagenot)
export let stompClient;
let subscription1;
let subscription2;

export function initializeStompClient(userData, dispatch, incoming,condiscon){
    stompClient = new StompJs.Client({
        brokerURL: `ws://${SERV_DIR}:${SERV_PORT}/websocket/${userData.token}`,
        reconnectDelay: 0,
      });



      stompClient.onConnect = (frame) => {
        console.log(userData.username)
       subscription1 =  stompClient.subscribe('/'+userData.username,(message) => {
          let mensaje = JSON.parse(message.body);
          audio.play();
          dispatch(incoming(mensaje));
    
        // stompClient.subscribe("/"+connectedUsers)
    
    
        
      }, {username : userData.username}
    
    
    
    );
    
      subscription2 = stompClient.subscribe('/onlineUsers',(message) => {
       
        dispatch(condiscon(JSON.parse(message.body)));
    
      // stompClient.subscribe("/"+connectedUsers)
    
    
      
    }, {username : userData.username }
    
    
    );
    
    
    
    
        } 
        window.addEventListener("beforeunload", function (event) {
          disconnect(userData.username);
        });
        // stompClient.onDisconnect(() => alert("a"))

stompClient.onWebSocketError = (error) => {
    console.error('Error with websocket', error);
    return;
};

stompClient.onStompError = (frame) => {
    console.error('Broker reported error: ' + frame.headers['message']);
    console.error('Additional details: ' + frame.body);
};

      


}


// const userData = JSON.parse(localStorage.getItem('userData')); 

// const username = JSON.parse(localStorage.getItem("user"))?.username;





// function connect() {
//     stompClient.activate();
// }

// function disconnect() {
//     stompClient.deactivate();
//     setConnected(false);
//     
// }

// function sendName() {
//     stompClient.publish({
//         destination: "/app/hello",
//         body: JSON.stringify({'name': $("#name").val()})
//     });
// }

// function showGreeting(message) {
//     $("#greetings").append("<tr><td>" + message + "</td></tr>");
// }

// $(function () {
//     $("form").on('submit', (e) => e.preventDefault());
//     $( "#connect" ).click(() => connect());
//     $( "#disconnect" ).click(() => disconnect());
//     $( "#send" ).click(() => sendName());
// });

export function disconnect(username) {
stompClient.publish(
{
    destination: "/app/disconnect/"+username,

}
    
)
subscription1.unsubscribe();
subscription2.unsubscribe();
stompClient.deactivate();


}

 
