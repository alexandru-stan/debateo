package es.debateo.Controllers;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import es.debateo.DTO.ServiceResponse;
import es.debateo.Model.Messages;
import es.debateo.Services.MessagesServices;

@RestController
@RequestMapping("/messages")
public class MessagesController {

	@Autowired
	MessagesServices services;
	
	@Autowired
	SimpMessagingTemplate simpMessagingTemplate;
	
	
	
	@GetMapping("/RetrieveChats/{username}")
	public ResponseEntity<List<Object>> RetrieveChats(@PathVariable String username) {
	
		ServiceResponse<Object> respuesta = services.RetrieveChats(username);
		
		return new ResponseEntity<List<Object>>(respuesta.getLista(),respuesta.getStatus());
		
	}
	
	@GetMapping("/getMessages/{user}/{interactuer}")
	public ResponseEntity<List<Messages>> GetMessages(@PathVariable String user, @PathVariable String interactuer){
		ServiceResponse<Messages> respuesta = services.getMessages(user, interactuer);
		return new ResponseEntity<List<Messages>>(respuesta.getLista(),respuesta.getStatus());
	}
	
	
	@MessageMapping("/send")
	public void sendMessage( Messages message) {
		
		
		
		services.sendMessage(message);
		
		System.out.println(message.toString());
		
		simpMessagingTemplate.convertAndSend("/"+message.getMessageReceiver(), message);
	}


	@PostMapping("/read/{sender}/{receiver}")
	public void readMessages(@PathVariable String sender, @PathVariable String receiver) {
		
		services.ReadMessages(sender, receiver);
		
		
	}

	
	
	
}
