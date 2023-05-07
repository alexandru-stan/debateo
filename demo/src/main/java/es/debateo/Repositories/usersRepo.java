package es.debateo.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import es.debateo.Model.Users;
@Repository
public interface  usersRepo extends JpaRepository<Users,String>{

	public boolean existsByUsernameAndPassword(String username, String password);
	
}