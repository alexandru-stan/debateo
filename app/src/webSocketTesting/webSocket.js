import {SERV_PORT,SERV_DIR} from "../utilities";
import {useSelector, useDispatch} from "react-redux";
import React from "react";
import * as StompJs from "@stomp/stompjs";
export const stompClient = new StompJs.Client({
    brokerURL: 'ws://'+SERV_DIR+':'+SERV_PORT+'/websocket',
    reconnectDelay:0,
    
});

const username = JSON.parse(localStorage.getItem("user"))?.username;



stompClient.onWebSocketError = (error) => {
    console.error('Error with websocket', error);
    return;
};

stompClient.onStompError = (frame) => {
    console.error('Broker reported error: ' + frame.headers['message']);
    console.error('Additional details: ' + frame.body);
};




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