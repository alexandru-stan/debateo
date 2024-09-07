package es.debateo.Services;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import es.debateo.DTO.MessagesDTO;
import es.debateo.DTO.ServiceResponse;
import es.debateo.Model.Messages;
import es.debateo.Repositories.messagesRepo;
import jakarta.persistence.Tuple;
@Service
public class MessagesServices {

	@Autowired
	messagesRepo repo;
	
	
	public List<MessagesDTO> RetrieveChats(String username){
		List<MessagesDTO> messages = new ArrayList<MessagesDTO>();
		List<Tuple> tuple = repo.RetrieveChats(username);
		
		tuple.forEach(e -> {
			
			MessagesDTO message = new MessagesDTO(null, (String) e.get(1), (Date) e.get(2), (int) e.get(3), (String) e.get(4), (Long)e.get(5));
		
		
			List<String> extensions = Arrays.asList(".jpg", ".jpeg", ".png", ".gif",".webp");
		    boolean imageFound = false;
		    
		    for(String ext : extensions) {
		    	 String imagePath = "static/profileImages/" + message.getInteractuer() + ext;
		 	     InputStream imageStream = getClass().getClassLoader().getResourceAsStream(imagePath);
		 	    
		 	     if(imageStream!=null) {
		 	    	 byte[] image;
					try {
						image = imageStream.readAllBytes();
						message.setProfile_image(image);
					} catch (IOException e1) {
						// TODO Auto-generated catch block
						e1.printStackTrace();
					}
		 	    	 
		 	    	
		 	    	 break;
		 	     }
		 	    
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
