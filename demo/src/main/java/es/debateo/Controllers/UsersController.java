package es.debateo.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import es.debateo.DTO.ServiceResponse;
import es.debateo.Model.Users;
import es.debateo.Services.Interfaces.IUsersServices;

@RequestMapping("/users")
@RestController
@CrossOrigin(origins="*")
public class UsersController {

	@Autowired
	IUsersServices servicio;

	@PostMapping("/login")
	
	public ResponseEntity<String> validarLogin(@RequestBody Users credentials) {

		ServiceResponse<String> response = servicio.login(credentials.getUsername(), credentials.getPassword());

		return new ResponseEntity<String>(response.getObj(), response.getStatus());
	}
	
	@PostMapping("/signin")
	public ResponseEntity<String> registrarUsuario(@RequestBody Users user) {
		
		ServiceResponse<String> response = servicio.signin(user);
		
		return new ResponseEntity<String>(response.getObj(),response.getStatus());
	
	}
	
	
	
	
	

}
