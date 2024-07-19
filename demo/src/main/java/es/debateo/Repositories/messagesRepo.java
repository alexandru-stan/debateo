package es.debateo.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import es.debateo.Model.Messages;

public interface messagesRepo extends JpaRepository<Messages,Integer> {
	@Query(value = "SELECT " +
		    "m1.interactuer, " +
		    "m1.last_interaction, " +
		    "m2.message_id, " +
		    "m2.message_body, " +
		    "( " +
		    "    SELECT COUNT(*) " +
		    "    FROM messages m3 " +
		    "    WHERE (m3.message_sender = m1.interactuer AND m3.message_receiver = :username) AND is_read=0 " +
		    ") AS null_isRead_count " +
		    "FROM " +
		    "( " +
		    "    SELECT " +
		    "        CASE " +
		    "            WHEN m.message_receiver = :username THEN m.message_sender " +
		    "            WHEN m.message_sender = :username THEN m.message_receiver " +
		    "        END AS interactuer, " +
		    "        MAX(m.message_date) AS last_interaction " +
		    "    FROM " +
		    "        messages m " +
		    "    GROUP BY " +
		    "        interactuer " +
		    "    HAVING " +
		    "        interactuer IS NOT NULL " +
		    ") AS m1 " +
		    "JOIN messages m2 ON " +
		    "    (m2.message_sender = :username AND m2.message_receiver = m1.interactuer AND m2.message_date = m1.last_interaction) OR " +
		    "    (m2.message_sender = m1.interactuer AND m2.message_receiver = :username AND m2.message_date = m1.last_interaction) " +
		    "GROUP BY " +
		    "    interactuer, last_interaction, message_id, message_body " +
		    "HAVING " +
		    "    interactuer IS NOT NULL " +
		    "ORDER BY " +
		    "    m1.last_interaction DESC;",nativeQuery=true)
	List<Object> RetrieveChats(@Param("username") String username);
	
	
	@Query(value=""
			+ "SELECT new es.debateo.Model.Messages(m.messageId,m.messageBody,m.messageSender,m.messageReceiver,m.messageDate,m.isRead) FROM Messages m "
			+ " WHERE m.messageSender = :username AND m.messageReceiver = :interactuer	OR m.messageSender = :interactuer AND m.messageReceiver = :username "
			+ " ORDER BY m.messageDate DESC ")
	List<Messages> getMessages(@Param("username") String username, @Param("interactuer") String interactuer);
	
	@Modifying
	@Transactional
	@Query("UPDATE Messages m "
			+ " SET m.isRead = TRUE "
			+ " WHERE m.messageSender = :sender AND m.messageReceiver = :receiver")
	void ReadMessages(@Param("sender") String sender, @Param("receiver") String receiver);

	
	@Modifying
	@Transactional
	@Query(value="UPDATE Messages m "
			+ " SET m.is_read = TRUE "
			+ " WHERE m.message_id = :id ",nativeQuery=true)
	void ReadMessage(@Param("id") int id);
	
	int countByIsReadFalseAndMessageReceiver(String messageReceiver);
}
