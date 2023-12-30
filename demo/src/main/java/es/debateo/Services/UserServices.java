package es.debateo.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import es.debateo.DTO.ServiceResponse;
import es.debateo.Model.Users;
import es.debateo.Repositories.communitiesRepo;
import es.debateo.Repositories.subsRepo;
import es.debateo.Repositories.usersRepo;

@Service
public class UserServices{
	@Autowired
	usersRepo repo;
	@Autowired
	subsRepo subsRepo;
	@Autowired 
	communitiesRepo communitiesRepo;
	
	
	
	
	public UserServices(usersRepo repo) {
		super();
		this.repo = repo;
	}




	public ServiceResponse<Users> login(String username,String password) {
	
		boolean exists = repo.existsByUsernameAndPassword(username, password);
		
		if(exists) {
			
			Users userData = repo.findById(username).get();
			userData.setSubsCount((subsRepo.countByUsername(userData.getUsername()) + communitiesRepo.countByCommunityCreator(userData.getUsername())));
			
			
			return new ServiceResponse<Users>(repo.findById(username).get(),HttpStatus.OK);
			
		} else {
			
			return new ServiceResponse<Users>((Users) null,HttpStatus.NOT_FOUND);
			
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
