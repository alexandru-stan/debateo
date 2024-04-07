package es.debateo.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import es.debateo.DTO.ServiceResponse;
import es.debateo.Services.MessagesServices;
import jakarta.persistence.Tuple;

@RestController
@RequestMapping("/messages")
public class MessagesController {

	@Autowired
	MessagesServices services;
	
	
	@GetMapping("/RetrieveChats/{username}")
	public ResponseEntity<List<Object>> RetrieveChats(@PathVariable String username) {
	
		ServiceResponse<Object> respuesta = services.RetrieveChats(username);
		
		return new ResponseEntity<List<Object>>(respuesta.getLista(),respuesta.getStatus());
		
	}
	
	

	
	
	
	
}
