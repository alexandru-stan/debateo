package es.debateo.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import es.debateo.Model.Users;
import es.debateo.Repositories.usersRepo;
@Service
public class Services implements iServices {
	@Autowired
	usersRepo repo;
	
	
	
	
	public Services(usersRepo repo) {
		super();
		this.repo = repo;
	}




	public ServiceResponse login(String username,String password) {
	
		boolean exists = repo.existsByUsernameAndPassword(username, password);
		
		if(exists) {
			
			return new ServiceResponse(null,HttpStatus.OK);
			
		} else {
			
			return new ServiceResponse("NOMBRE DE USUARIO O CONTRASEÑA INCORRECTOS",HttpStatus.NOT_FOUND);
			
		}
		
		
		
	}
	
	
	public ServiceResponse signin(Users user) {
		
		if(repo.existsById(user.getUsername())) {
			return new ServiceResponse("EL NOMBRE DE USUARIO YA EXISTE",HttpStatus.CONFLICT);
		} else {
			
			return new ServiceResponse("CUENTA CREADA CORRECTAMENTE",HttpStatus.OK);
			
			
		}
	
		
		
		

	}
	
	
}
