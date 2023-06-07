package es.debateo.Repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import es.debateo.Model.Posts;

public interface postsRepo extends JpaRepository<Posts,Long>{

	@Query("SELECT p FROM Posts p WHERE p.community IN (SELECT communityId FROM Subscriptions s WHERE s.username=:param)")
    Page<Posts> getPosts(@Param("param") String username,PageRequest pageRequest);
	
	
	Page<Posts> getPostsByCommunity(long community, PageRequest pageRequest);
	


	
}
