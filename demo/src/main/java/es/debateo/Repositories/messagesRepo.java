package es.debateo.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import es.debateo.Model.Messages;

public interface messagesRepo extends JpaRepository<Messages,Integer> {
	@Query(value = "SELECT DISTINCT message_sender "
			+ "FROM Messages "
			+ "WHERE message_sender <> :username "
			+ "UNION "
			+ "SELECT DISTINCT message_reciever "
			+ "FROM MESSAGES "
			+ "WHERE message_reciever <> :username ;", nativeQuery=true)
	List<String> RetrieveChats(@Param("username") String username);

}
