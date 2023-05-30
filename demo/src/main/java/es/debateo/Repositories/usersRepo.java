package es.debateo.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;


import es.debateo.Model.Users;

public interface  usersRepo extends JpaRepository<Users,String>{

	public boolean existsByUsernameAndPassword(String username, String password);
	
}