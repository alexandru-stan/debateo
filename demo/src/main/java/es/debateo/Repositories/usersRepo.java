package es.debateo.Repositories;

import java.util.Date;
import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import es.debateo.Model.Users;

public interface  usersRepo extends JpaRepository<Users,String>{

	public boolean existsByUsernameAndPassword(String username, String password);
	

	@Query("SELECT e.username FROM Users e WHERE e.username LIKE %:param% AND e.username <> :requestUser ")
    List<String> search(@Param("param") String cadena, Pageable page, @Param("requestUser") String requestUser);
	
	@Modifying
	@Transactional
	@Query(value="UPDATE Users "
			+ "SET username = :username, name=:name, mail=:mail, birth_date=:birthDate "
			+ "WHERE username = :originalUsername   ", nativeQuery=true)
	void updateUser(@Param("username") String username, @Param("name") String name, @Param("mail") String mail, @Param("birthDate") Date birthDate, @Param("originalUsername") String originalUsername);
	

}