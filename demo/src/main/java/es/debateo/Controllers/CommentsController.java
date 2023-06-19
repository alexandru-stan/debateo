package es.debateo.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import es.debateo.Model.Comments;
import es.debateo.Repositories.commentsRepo;

@RestController
@RequestMapping("/comments")
@CrossOrigin(origins="*")
public class CommentsController {

	@Autowired
	commentsRepo repo;
	
	@GetMapping("/{postid}")
	public List<Comments> getComments(@PathVariable long postid) {
		
		return repo.getComments(postid);
		
		
	}
	
	@PostMapping()
	public void postComment(@RequestBody Comments comment) {
		System.out.println(comment.toString());
		repo.save(comment);
	}
	
}
