package es.debateo.Controllers;

import java.io.File;
import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.apache.commons.io.FilenameUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import es.debateo.DTO.ServiceResponse;
import es.debateo.Model.Messages;
import es.debateo.Model.UserRecord;
import es.debateo.Model.Users;
import es.debateo.Repositories.usersRepo;
import es.debateo.Services.MessagesServices;
import es.debateo.Services.UserServices;
import es.debateo.Utils.profileImageUtils;

@RequestMapping("/users")
@RestController
public class UsersController {

	
	@Autowired
	UserServices servicio;
	@Autowired
	MessagesServices servicioMensajes;
	
	@Autowired
	usersRepo repo;

	@PostMapping("/login")

	public ResponseEntity<Users> validarLogin(@RequestBody Users credentials) throws IOException {
		
	    ServiceResponse<Users> response = servicio.login(credentials.getUsername(), credentials.getPassword());
	    Users user = response.getObj();
	    profileImageUtils util = new profileImageUtils();
	    user.setProfileImageFile(util.returnProfileImage(user.getUsername()));
	    System.out.println(user.getProfileImageFile());
	    return new ResponseEntity<>(user, response.getStatus());
	}
	
	
	
	
	
	
	
	@PostMapping("/signin")
	public ResponseEntity<String> registrarUsuario(@RequestParam("Rusername") String username,
			@RequestParam("Rname") String name,
			@RequestParam("Rpassword") String password,
			@RequestParam("Rmail") String mail,
			@RequestParam("Rbirth_date") String birth_date,
			@RequestParam("Rprofileimg") MultipartFile file) throws ParseException, IllegalStateException, IOException {
	     SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
	     String imageExtension = FilenameUtils.getExtension(file.getOriginalFilename());
	     // Get the root directory of the project
	        String rootDir = System.getProperty("user.dir");
	        
	        System.out.println(rootDir);
	        Path filePath = Paths.get(rootDir, "/src/main/resources/static/profileImages/"+username+"."+imageExtension);
	        System.out.println(filePath.toString());
	        file.transferTo(new File((filePath.toString())));
	  
	        
		Users user = new Users(username,password,name,mail,formatter.parse(birth_date),(filePath.toString()));
		
		ServiceResponse<String> response = servicio.signin(user);
		servicioMensajes.sendMessage(new Messages("Hola "+user.getUsername()+", bienvenido a Debateo. \n Estamos aquí para cualquier cosa que necesites :) ","debateosoporte",user.getUsername(),new Date(),false));
		
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
	

	@GetMapping("/refreshProfileImage/{username}")
	public UserRecord refreshProfileImage(@PathVariable String username) throws IOException {
		System.out.println("imagen para " + username);
	    profileImageUtils util = new profileImageUtils();

		byte[] test = util.returnProfileImage(username);
		return new UserRecord(test);
		
		
	}
	

}
	
	
	
	





