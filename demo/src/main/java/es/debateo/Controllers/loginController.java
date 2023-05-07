package es.debateo.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import es.debateo.Model.Users;
import es.debateo.Services.iServices;
import es.debateo.Services.iServices;

@RestController
@RequestMapping("/login")

public class loginController {


	

	@Autowired
	private iServices servicio;
	

	
	@PostMapping
	@CrossOrigin(origins = "http://localhost:1234")
	public ResponseEntity<Boolean> validarLogin(@RequestBody Users credentials) {
		
	
		return  new ResponseEntity<Boolean>(servicio.login(credentials.getUsername(), credentials.getPassword()),HttpStatus.CREATED);
	}
	
	
	
	
}