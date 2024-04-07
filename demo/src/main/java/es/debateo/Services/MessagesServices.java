package es.debateo.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import es.debateo.DTO.ServiceResponse;
import es.debateo.Repositories.messagesRepo;
import jakarta.persistence.Tuple;
@Service
public class MessagesServices {

	@Autowired
	messagesRepo repo;
	
	
	public ServiceResponse<Object> RetrieveChats(String username){
		
		return new ServiceResponse<Object>(repo.RetrieveChats(username),HttpStatus.OK);
		
	}
	
	
}
