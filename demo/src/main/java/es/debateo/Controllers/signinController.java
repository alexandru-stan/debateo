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
	public ResponseEntity<String> registrarUsuario(@RequestBody Users user) {
	
		boolean result = servicio.signin(user);
		
		if(result) {
			
			return  new ResponseEntity<String>("Cuenta creada correctamente",HttpStatus.CREATED);
			
		} else {
			
			return new ResponseEntity<String>("El nombre de usuario ya existe",HttpStatus.CONFLICT);
		}
		
		
		
		
		
		
	}
	
}
