package es.debateo.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import es.debateo.Model.Users;
import es.debateo.Services.ServiceResponse;
import es.debateo.Services.iServices;

@RestController
@RequestMapping("/login")

public class loginController {


	

	@Autowired
	private iServices servicio;
	

	
	@PostMapping
	@CrossOrigin(origins = "http://localhost:1234")
	public ResponseEntity<String> validarLogin(@RequestBody Users credentials) {
		
		ServiceResponse response = servicio.login(credentials.getUsername(), credentials.getPassword());
	
		return  new ResponseEntity<String>(response.getMensaje(),response.getStatus());
	}
	
	
	
	
}