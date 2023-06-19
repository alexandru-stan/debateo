package es.debateo.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import es.debateo.Model.Likes;
import es.debateo.Repositories.likesRepo;

@RestController
@RequestMapping("/likes")
@CrossOrigin(origins="*")
public class LikesController {

	@Autowired
	likesRepo repo;
	
	@PostMapping("/{username}/{id}")
	public void add(@PathVariable String username, @PathVariable long id) {
		repo.save(new Likes(username,id));
		
	}
	
	@DeleteMapping("/{username}/{id}")
	public void delete(@PathVariable String username, @PathVariable long id) {
		repo.delete(new Likes(username,id));
	}
	
	
}
