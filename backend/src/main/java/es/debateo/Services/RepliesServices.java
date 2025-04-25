package es.debateo.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import es.debateo.DTO.ServiceResponse;
import es.debateo.Model.Replies;
import es.debateo.Repositories.repliesRepo;

@Service
public class RepliesServices {

	@Autowired
	repliesRepo repo;
	
	
	
	public ResponseEntity<?> sendReply(Replies reply){
		
		repo.saveAndFlush(reply);
		return new ResponseEntity<Replies>(HttpStatus.OK);
		
		
	}
	
	public ServiceResponse<Replies> getRepliesByCommentId(int commentId){
		
		return new ServiceResponse<Replies>(repo.getRepliesByCommentId(commentId),HttpStatus.OK);
		
	}
	
	
}
