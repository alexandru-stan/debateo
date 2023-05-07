package es.debateo.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import es.debateo.Repositories.usersRepo;
@Service
public class Services implements iServices {
	@Autowired
	usersRepo repo;
	
	
	
	
	public Services(usersRepo repo) {
		super();
		this.repo = repo;
	}




	public boolean login(String username,String password) {
	
		
		return repo.existsByUsernameAndPassword(username, password);
	}
	
	
	
}
