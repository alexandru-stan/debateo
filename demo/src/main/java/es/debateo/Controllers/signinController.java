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

@RestController
@RequestMapping("/signin")
public class signinController {

	@Autowired
	private iServices servicio;
	
	
	@PostMapping
	@CrossOrigin(origins="http://localhost:1234")
	public ResponseEntity<Users> registrarUsuario(@RequestBody Users user) {
		
		
		return new ResponseEntity<Users>(servicio.signin(user),HttpStatus.CREATED);
		
	}
	
}
