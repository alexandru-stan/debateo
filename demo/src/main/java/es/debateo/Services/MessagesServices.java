package es.debateo.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import es.debateo.DTO.ServiceResponse;
import es.debateo.Model.Messages;
import es.debateo.Repositories.messagesRepo;
@Service
public class MessagesServices {

	@Autowired
	messagesRepo repo;
	
	
	public ServiceResponse<Object> RetrieveChats(String username){
		
		return new ServiceResponse<Object>(repo.RetrieveChats(username),HttpStatus.OK);
		
	}
	
	public ServiceResponse<Messages> getMessages(String username, String interactuer){
		
		
		
		return new ServiceResponse<Messages>(repo.getMessages(username, interactuer),HttpStatus.OK);
		
	}
	
	public Messages sendMessage(Messages message) {
		
		Messages savedMessage = repo.saveAndFlush(message);
		
		System.out.println("SERVICE "+ savedMessage.getMessageId());
		return savedMessage;
	
	}
	
	
	public void ReadMessages(String sender,String receiver) {
		repo.ReadMessages(sender, receiver);
	}
	
	public void ReadMessage(int id) {
		 repo.ReadMessage(id);
	} 
	
	public int getUnreadMessages(String messageReceiver) {
		
		return repo.countByIsReadFalseAndMessageReceiver(messageReceiver);
	}
	
	
}
