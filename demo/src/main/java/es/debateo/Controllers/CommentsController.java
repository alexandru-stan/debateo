package es.debateo.Controllers;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import es.debateo.DTO.CommentsDTO;
import es.debateo.Model.Comments;
import es.debateo.Repositories.commentsRepo;

@RestController
@RequestMapping("/comments")
@CrossOrigin(origins="*")
public class CommentsController {

	@Autowired
	commentsRepo repo;
	
	@GetMapping("/{postid}")
	public List<CommentsDTO> getComments(@PathVariable long postid) {
		List<CommentsDTO> comentarios = repo.getComments(postid);
		comentarios.forEach(e ->{
		
			e.setReplies(repo.getRepliesByCommentId(e.getCommentId()));
			System.out.println(e.toString());
		}
		);
		return comentarios;
		
		
	}
	
	@PostMapping()
	public void postComment(@RequestBody Comments comment) {
		comment.setCommenDate(new Date());
		repo.save(comment);
	}
	
}
