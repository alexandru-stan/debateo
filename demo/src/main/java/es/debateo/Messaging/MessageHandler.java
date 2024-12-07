//package es.debateo.Messaging;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.messaging.handler.annotation.MessageMapping;
//import org.springframework.messaging.simp.SimpMessagingTemplate;
//import org.springframework.stereotype.Component;
//
//@Component
//public class MessageHandler {
//
//	String channel;
//	
//	private final SimpMessagingTemplate messagingTemplate;
//	
//	 @Autowired
//	    public MessageHandler(SimpMessagingTemplate messagingTemplate) {
//	        this.messagingTemplate = messagingTemplate;
//	    }
//
//	@MessageMapping("/send")
//		public void onReceiveMessage(String message) {
//	    	
//		}
//
//
//
//}