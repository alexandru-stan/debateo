package es.debateo.Services;

import java.util.List;

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
	
	
	public ServiceResponse<String> RetrieveChats(String username){
		
		return new ServiceResponse<String>(repo.RetrieveChats(username),HttpStatus.OK);
		
	}
	
	
}
