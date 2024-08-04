	package es.debateo.Controllers;




import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import es.debateo.DTO.PostDTO;
import es.debateo.DTO.ServiceResponse;
import es.debateo.Model.Posts;
import es.debateo.Repositories.postsRepo;
import es.debateo.Services.PostsServices;

@RestController
@RequestMapping("/posts")

public class PostsController {


	
	@Autowired
	PostsServices services;
	
	@Autowired
	postsRepo repo;
	
	@GetMapping("/{username}/{offset}/{fyp}")
	public ResponseEntity<Page<PostDTO>> getPosts(@PathVariable String username, @PathVariable int offset, @PathVariable boolean fyp){
		
		System.out.println("LA PAGINA ES:"+offset);
		ServiceResponse<PostDTO> response = services.getPosts(username,offset,fyp);
		
		System.out.println(response.getPagina());
		
		return new ResponseEntity<Page<PostDTO>>(response.getPagina(),response.getStatus());
		
	}
	
	@GetMapping("/byCommunity/{offset}/{communityId}/{username}")
	public ResponseEntity<Page<PostDTO>> getPostsByCommunity(@PathVariable String username, @PathVariable int offset, @PathVariable long communityId){
		
		System.out.println("LA PAGINA ES:"+offset);
		ServiceResponse<PostDTO> response = services.getPostsByCommunity(username,communityId,offset);
		
		System.out.println(response.getPagina());
		
		return new ResponseEntity<Page<PostDTO>>(response.getPagina(),response.getStatus());
		
	}
	
	
	@PostMapping("/new")
	public int  addPost( @RequestParam("image")  MultipartFile file,
			@RequestParam("titulo") String titulo,
			@RequestParam("cuerpo") String cuerpo,
			@RequestParam("user") String user,
			@RequestParam("community") String community){
		Posts savedPost = null;
		try {
			Posts post = new Posts(user,Long.valueOf(community),titulo,cuerpo,file.getBytes());
			 savedPost= repo.save(post);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	return (int) savedPost.getPublicationId();
	}
	
	
	
	
//	@GetMapping("/byCommunity/{offset}/{communityId}/{username}")
//	public ResponseEntity<Page<PostDTO>> getPostsByCommunity( @PathVariable int offset, @PathVariable long communityId,@PathVariable String username){
//		
//		
//		ServiceResponse<PostDTO> response = services.getPostsByCommunity(offset,communityId,username);
//		
//		return new ResponseEntity<Page<PostDTO>>(response.getPagina(),response.getStatus());
//		
//		
//		
//	}
	
	@GetMapping("/getPost/{username}/{id}")
	public ResponseEntity<PostDTO> getPost(@PathVariable String username,@PathVariable long id){
		
		ServiceResponse<PostDTO> response = services.getPost(username, id);
		
		return new ResponseEntity<PostDTO>(response.getObj(),response.getStatus());
	}
	
	
	

	
	@DeleteMapping("/{id}")
	public long deletePost(@PathVariable long id){
		services.deletePost(id);
		return id;
		
	}
//	
//
//	@PostMapping()
//	public String uploadPost(@RequestParam("image") MultipartFile file) {
//		
//	
//		try {
//			services.upload(file);
//		} catch (IOException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//		
//		return "OK";
//		
//	}
//	
//	
//		@GetMapping("/{id}")
//		public ResponseEntity<?> downloadPost(@PathVariable long id) {
//			
//		
//		return ResponseEntity.status(HttpStatus.OK).body(services.download(id));
//			
//		}
		

	
	
}
