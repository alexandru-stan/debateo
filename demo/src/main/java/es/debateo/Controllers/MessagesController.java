package es.debateo.Controllers;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import es.debateo.DTO.ChatAndUnreadMessagesDTO;
import es.debateo.DTO.MessagesDTO;
import es.debateo.DTO.ServiceResponse;
import es.debateo.Model.Messages;
import es.debateo.Repositories.messagesRepo;
import es.debateo.Services.MessagesServices;

@RestController
@RequestMapping("/messages")
public class MessagesController {

	@Autowired
	MessagesServices services;
	
	@Autowired
	SimpMessagingTemplate simpMessagingTemplate;
	
	@Autowired 
	messagesRepo repo;
	
	
	
	@GetMapping("/RetrieveChats/{username}")
	public ResponseEntity<List<MessagesDTO> > RetrieveChats(@PathVariable String username) {
	
		List<MessagesDTO> respuesta = services.RetrieveChats(username);
		
		return new ResponseEntity<List<MessagesDTO> >(respuesta,HttpStatus.OK);
		
	}
	
	@GetMapping("/getMessages/{user}/{interactuer}")
	public ResponseEntity<List<Messages>> GetMessages(@PathVariable String user, @PathVariable String interactuer){
		ServiceResponse<Messages> respuesta = services.getMessages(user, interactuer);
		return new ResponseEntity<List<Messages>>(respuesta.getLista(),respuesta.getStatus());
	}
	
	
	@MessageMapping("/send")
	public void sendMessage( Messages message) {
		
		
		
		
		Messages savedMessage = services.sendMessage(message);

		// Check if the message was saved successfully
		if (savedMessage != null) {
		    System.out.println("EL MENSAJE ID"+ savedMessage.getMessageId());
		    simpMessagingTemplate.convertAndSend("/" + savedMessage.getMessageReceiver(), savedMessage);
		} else {
		    // Handle the case where saving failed, if needed
		}
	}


	@PostMapping("/read/{sender}/{receiver}")
	public void readMessages(@PathVariable String sender, @PathVariable String receiver) {
		
		services.ReadMessages(sender, receiver);
		
		
	}

	@PutMapping("/read/{id}")
	public void readMessage(@PathVariable int id) {
		System.out.println(id);
		services.ReadMessage(id);
		
	}
	
	@GetMapping("/unread/{messageReceiver}")
	public int getUnreadMessages(@PathVariable String messageReceiver) {
		return services.getUnreadMessages(messageReceiver);
	}
	
	@GetMapping("/unreadByChat/{messageReceiver}")
	public List<ChatAndUnreadMessagesDTO> getUnreadMessagesByChat(@PathVariable String messageReceiver){
		
		return repo.getUnreadMessagesbyChat(messageReceiver);
	}
	
	
}
