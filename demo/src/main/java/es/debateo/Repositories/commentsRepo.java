package es.debateo.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import es.debateo.DTO.CommentsDTO;
import es.debateo.Model.Comments;

public interface commentsRepo extends JpaRepository<Comments,Long> {

	
	@Query("SELECT new es.debateo.DTO.CommentsDTO(c.commentId,c.postId,c.username,c.commentDate,c.commentText) "
			+ " FROM Comments c "
			+ " WHERE c.postId=:id "
			+ "	ORDER BY c.commentDate DESC")
	public List<CommentsDTO> getComments(@Param("id") long id);
	
	
	public int countByPostId(@Param("id") long id);
	
	@Query(value="SELECT COUNT(*) FROM replies WHERE comment_id = :id",nativeQuery=true)
	public int getRepliesByCommentId(@Param("id") long id);
	
	
}
