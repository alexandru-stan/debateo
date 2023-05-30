package es.debateo.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import DTO.ServiceResponse;
import es.debateo.Model.Users;
import es.debateo.Repositories.usersRepo;
import es.debateo.Services.Interfaces.IUsersServices;
@Service
public class UserServices implements IUsersServices{
	@Autowired
	usersRepo repo;
	
	
	
	
	public UserServices(usersRepo repo) {
		super();
		this.repo = repo;
	}




	public ServiceResponse<String> login(String username,String password) {
	
		boolean exists = repo.existsByUsernameAndPassword(username, password);
		
		if(exists) {
			
			return new ServiceResponse<String>("",HttpStatus.OK);
			
		} else {
			
			return new ServiceResponse<String>("NOMBRE DE USUARIO O CONTRASEÑA INCORRECTOS",HttpStatus.NOT_FOUND);
			
		}
		
		
		
	}
	
	
	public ServiceResponse<String> signin(Users user) {
		
		if(repo.existsById(user.getUsername())) {
			return new ServiceResponse<String>("EL NOMBRE DE USUARIO YA EXISTE",HttpStatus.CONFLICT);
		} else {
			
			repo.save(user);
			return new ServiceResponse<String>("CUENTA CREADA CORRECTAMENTE",HttpStatus.OK);
			
			
		}
	
		
		
		

	}
	
	
}
