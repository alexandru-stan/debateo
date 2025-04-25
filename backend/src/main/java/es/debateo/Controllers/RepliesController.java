package es.debateo.Controllers;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import es.debateo.DTO.ServiceResponse;
import es.debateo.Model.Replies;
import es.debateo.Services.RepliesServices;

@RestController
@RequestMapping("/replies")
public class RepliesController {
	@Autowired
	RepliesServices services;
	
	
	@PostMapping("/send")
	public ResponseEntity<?> sendReply(@RequestBody Replies reply){
		reply.setReplyDate(new Date());
		return services.sendReply(reply);
		
		
	}
	
	@GetMapping("/{commentId}")
	public ResponseEntity<List<Replies>> getRepliesByCommentId(@PathVariable("commentId") int commentId){
		
		ServiceResponse<Replies> result = services.getRepliesByCommentId(commentId);
		return new ResponseEntity<List<Replies>>(result.getLista(),result.getStatus());
		
	}
	
	
}
