package es.debateo.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import es.debateo.Model.Messages;

public interface messagesRepo extends JpaRepository<Messages,Integer> {
	@Query(value = "SELECT DISTINCT message_sender,MAX(message_date) "
			+ "FROM Messages "
			+ "WHERE message_sender <> :username AND message_reciever = :username "
			+ " GROUP BY message_sender "
			+ "UNION "
			+ "SELECT DISTINCT message_reciever, MAX(message_date) "
			+ "FROM MESSAGES "
			+ "WHERE message_reciever <> :username AND message_sender = :username "
			+ " GROUP BY message_reciever ;", nativeQuery=true)
	List<String> RetrieveChats(@Param("username") String username);

}
