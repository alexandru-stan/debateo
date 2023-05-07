package es.debateo.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import es.debateo.Model.Users;
import es.debateo.Repositories.usersRepo;
import es.debateo.Services.Services;

@RestController
@RequestMapping("/")
public class loginController {

	Services servicio;
	usersRepo repo;
	@PostMapping("/login")
	@CrossOrigin(origins = "http://localhost:1234")
	public ResponseEntity<Boolean> validarLogin(@RequestBody Users credentials) {
		
	
		return  new ResponseEntity<Boolean>(repo.existsByUsernameAndPassword(credentials.getUsername(),credentials.getPassword()),HttpStatus.CREATED);
	}
	
	
	
	
}