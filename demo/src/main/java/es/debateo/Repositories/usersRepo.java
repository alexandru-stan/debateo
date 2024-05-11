package es.debateo.Repositories;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import es.debateo.Model.Users;

public interface  usersRepo extends JpaRepository<Users,String>{

	public boolean existsByUsernameAndPassword(String username, String password);
	

	@Query("SELECT e.username FROM Users e WHERE e.username LIKE %:param%")
    List<String> search(@Param("param") String cadena, Pageable page);
	
}