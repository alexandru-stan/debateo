package es.debateo.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import es.debateo.Model.Messages;
import jakarta.persistence.Tuple;

public interface messagesRepo extends JpaRepository<Messages,Integer> {
	@Query(value = "SELECT " +
            "m1.interactuer, " +
            "m1.last_interaction, " +
            "m2.message_id, " +
            "m2.message_body " +
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
            "    interactuer " +
            "HAVING " +
            "    interactuer IS NOT NULL"
            + " ORDER BY m1.last_interaction DESC",nativeQuery=true)
	List<Object> RetrieveChats(@Param("username") String username);

}
