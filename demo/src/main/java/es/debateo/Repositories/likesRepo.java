package es.debateo.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import es.debateo.Model.Likes;

public interface likesRepo extends JpaRepository<Likes,Long>{

	
	@Query(value=""
			+ "SELECT 		"
			+ "EXISTS(SELECT l.username FROM likes l WHERE l.username=:name AND l.post_id=:post );"
			+ "",nativeQuery=true)
		int Likes(@Param("name")String name,@Param("post")int publicationId);

	
	@Query(value=""
			+ "SELECT "
			+ " COUNT(*) "
			+ " FROM Likes"
			+ " WHERE post_id=:id",nativeQuery=true)
	int likeCount(@Param("id") long id);
	
	
	
}
