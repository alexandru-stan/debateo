package es.debateo.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import es.debateo.DTO.ServiceResponse;
import es.debateo.Model.Users;
import es.debateo.Repositories.usersRepo;
import es.debateo.Services.UserServices;

@RequestMapping("/users")
@RestController
public class UsersController {

	
	@Autowired
	UserServices servicio;
	
	@Autowired
	usersRepo repo;

	@PostMapping("/login")

	public ResponseEntity<Users> validarLogin(@RequestBody Users credentials) {

		System.out.println("logeao");
		
		ServiceResponse<Users> response = servicio.login(credentials.getUsername(), credentials.getPassword());

		return new ResponseEntity<Users>(response.getObj(), response.getStatus());
	}
	
	@PostMapping("/signin")
	public ResponseEntity<String> registrarUsuario(@RequestBody Users user) {
		
		ServiceResponse<String> response = servicio.signin(user);
		
		return new ResponseEntity<String>(response.getObj(),response.getStatus());
	
	}
	
	
	@GetMapping("/exists/{username}")
	public boolean exists(@PathVariable String username) {
		
		return repo.existsById(username); 
		
	}
	
	@GetMapping("/search/{username}/{requestUser}")
	public ResponseEntity<List<String>> searchUsers(@PathVariable String username, @PathVariable String requestUser){
		
		
		ServiceResponse<String> response = servicio.search(username,requestUser);
		return new ResponseEntity<List<String>>(response.getLista(),response.getStatus());
		
	}
	

	@PutMapping("/update/{originalUsername}")
	public void updateUser(@RequestBody Users user, @PathVariable String originalUsername) {
		System.out.println(user.toString());
		servicio.userUpdate(user, originalUsername);
		
	}
	
	
	

}
