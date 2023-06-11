	package es.debateo.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import es.debateo.DTO.ServiceResponse;
import es.debateo.Model.Posts;
import es.debateo.Services.PostsServices;

@RestController
@RequestMapping("/posts")
@CrossOrigin(origins="*")
public class PostsController {

	@Autowired
	PostsServices services;
	
	@GetMapping("/{username}/{offset}")
	public ResponseEntity<Page<Posts>> getPosts(@PathVariable String username, @PathVariable int offset){
		System.out.println("PUTA");
		System.out.println("LA PAGINA ES:"+offset);
		ServiceResponse<Posts> response = services.getPosts(username,offset);
		
		System.out.println(response.getPagina());
		
		return new ResponseEntity<Page<Posts>>(response.getPagina(),response.getStatus());
		
	}
	
	@GetMapping("/byCommunity/{offset}/{communityId}")
	public ResponseEntity<Page<Posts>> getPostsByCommunity( @PathVariable int offset, @PathVariable long communityId){
		
		
		ServiceResponse<Posts> response = services.getPostsByCommunity(offset,communityId);
		
		return new ResponseEntity<Page<Posts>>(response.getPagina(),response.getStatus());
		
		
		
	}
	
	@DeleteMapping("/{id}")
	public long deletePost(@PathVariable long id){
		services.deletePost(id);
		return id;
		
	}
	

	
	
}
