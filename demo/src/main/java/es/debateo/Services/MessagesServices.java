package es.debateo.Services;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import es.debateo.DTO.MessagesDTO;
import es.debateo.DTO.ServiceResponse;
import es.debateo.Model.Messages;
import es.debateo.Repositories.messagesRepo;
import es.debateo.Utils.ImageUtils;
import jakarta.persistence.Tuple;
@Service
public class MessagesServices {

	@Autowired
	messagesRepo repo;
	
	
	public List<MessagesDTO> RetrieveChats(String username){
		List<MessagesDTO> messages = new ArrayList<MessagesDTO>();
		
		List<Tuple> tuple = repo.RetrieveChats(username);
		
		tuple.forEach(e -> {
		
			MessagesDTO message = new MessagesDTO(null, (String) e.get(0), (Date) e.get(1), (int) e.get(2), (String) e.get(3), (Long)e.get(4));
		
			
			try {
				message.setProfile_image(ImageUtils.returnImage(message.getInteractuer(),"profileImages"));
			} catch (IOException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			}
			
		    messages.add(message);
			
		} );
		
		
		
		
		
		

		return messages;
		
	}
	
	public ServiceResponse<Messages> getMessages(String username, String interactuer){
		
		
		
		return new ServiceResponse<Messages>(repo.getMessages(username, interactuer),HttpStatus.OK);
		
	}
	
	public Messages sendMessage(Messages message) {
		
		Messages savedMessage = repo.saveAndFlush(message);
		
		
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
