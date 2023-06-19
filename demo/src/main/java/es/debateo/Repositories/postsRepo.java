package es.debateo.Repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import es.debateo.Model.Posts;
import jakarta.persistence.Tuple;

public interface postsRepo extends JpaRepository<Posts,Long>{


	
	
	
	@Query(value = "SELECT "
	        + "    p.publication_id AS publicationId, "
	        + "  "
	        + "    p.publication_title AS publicationTitle, "
	        + "    p.publication_body AS publicationBody, "
	        + "    p.publication_image AS publicationImage, "
	        + "    p.user AS publicationUser, "
	        + "    "
	        + "    c.community_name AS communityName, "
	        + "    c.community_image AS communityImage, "
	        + "    p.community AS communityId, "
	        + "    s.subscription_level AS subscriptionLevel "
	        + " FROM "
	        + "    Posts p "
	        + "LEFT JOIN communities c ON p.community = c.community_id "

	        + "LEFT JOIN subscriptions s ON s.community_id = c.community_id AND s.username = :name "
	        + "WHERE "
	        + "    p.community  IN (SELECT s.community_id FROM subscriptions s WHERE s.username = :name) OR p.community IN(SELECT c.community_id FROM Communities WHERE c.community_creator=:name) AND "
	        + "	p.publication_id NOT IN (SELECT sn.publication_id FROM Seen sn WHERE username=:name ) "
	        	, nativeQuery = true)
    Page<Tuple> getPosts(@Param("name")String name,PageRequest page);
	
	
	
	
	
	@Query(value = "SELECT "
	        + "    p.publication_id AS publicationId, "
	        + "    COUNT(  l.post_id) AS likes, "
	        + "    p.publication_title AS publicationTitle, "
	        + "    p.publication_body AS publicationBody, "
	        + "    p.publication_image AS publicationImage, "
	        + "    p.user AS publicationUser, "
	        + "    COUNT(  com.post_id) AS comments "
	        + "     "
	        + " FROM "
	        + "    Posts p "
	        + "LEFT JOIN likes l ON p.publication_id = l.post_id "
	        + "LEFT JOIN comments com ON p.publication_id = com.post_id "
	        + ""
	        + "WHERE "
	        + "    p.community = :community "
	 
	        + " GROUP BY "
	        + "    p.publication_id, "
	        + "    p.publication_title, "
	        + "    p.publication_body, "
	        + "    p.publication_image, "
	        + "    p.user;"
	    
	   
	      , nativeQuery = true)
	
    Page<Tuple> getPostsByCommunity(@Param("community") long id,PageRequest request);
	
	
	
	
	
	
	
	

	@Query(value=""
			+ "SELECT 		"
			+ "EXISTS(SELECT l.username FROM likes l WHERE l.username=:name AND l.post_id=:post );"
			+ "",nativeQuery=true)
		int isItLiked(@Param("name")String name,@Param("post")int publicationId);

	
	
    
    
    
    
//	@Query("SELECT new es.debateo.DTO.PostDTO(p.publicationId, 34, p.publicationTitle, p.publicationBody, p.publicationImage, p.user, COUNT(c), c.communityName, c.communityImage, p.community, s.subscriptionLevel) "
//	        + "FROM Posts p "
//	        + "JOIN p.community c "
//	        + "LEFT JOIN Comments cmt ON cmt.postId = p.publicationId "
//	        + "LEFT JOIN Subscriptions s ON s.username = 'kiru' AND c.communityId = s.communityId "
//	        + "GROUP BY p.publicationId, p.publicationTitle, p.publicationBody, p.publicationImage, p.user, c.communityName, c.communityImage, p.community, s.subscriptionLevel")
//	Page<PostDTO> getPosts(PageRequest page);


	
}
