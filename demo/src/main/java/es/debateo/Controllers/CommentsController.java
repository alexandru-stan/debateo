package es.debateo.Controllers;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
			try {
				
				byte[] image = Files.readAllBytes(new File(".\\src\\main\\resources\\static\\profileImages\\"+e.getUsername()+".jpg").toPath());
				e.setProfileImage(image);
			} catch (IOException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			}
			e.setReplies(repo.getRepliesByCommentId(e.getCommentId()));
			
		
		}
		);
		return comentarios;
			
		
	}
	
	@PostMapping()
	public void postComment(@RequestBody Comments comment) {
		comment.setCommenDate(new Date());
		repo.save(comment);
	}
	
	
	@GetMapping("/byUser/{username}")
	public ResponseEntity<List<Comments>> getCommentsByUser(@PathVariable String username){
		List<Comments> response = repo.getCommentsByUsernameOrderByCommentDateDesc(username);
		return new ResponseEntity<List<Comments>>(response,HttpStatus.OK);
		
	}
}
