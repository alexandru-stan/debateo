package es.debateo.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import es.debateo.Model.Comments;

public interface commentsRepo extends JpaRepository<Comments,Long> {

	
	@Query("SELECT c "
			+ " FROM Comments c "
			+ " WHERE c.postId=:id ")
	public List<Comments> getComments(@Param("id") long id);
	
	
	public int countByPostId(@Param("id") long id);
}
