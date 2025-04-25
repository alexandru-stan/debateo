package es.debateo.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import es.debateo.Model.Replies;

public interface repliesRepo extends JpaRepository<Replies,Long> {

	
	public List<Replies> getRepliesByCommentId(int commentId);
	
	
}
