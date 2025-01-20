	package es.debateo.Controllers;




import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
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
import es.debateo.Model.Subscriptions;
import es.debateo.Model.ComplexID.SubscriptionsID;
import es.debateo.Repositories.communitiesRepo;
import es.debateo.Repositories.postsRepo;
import es.debateo.Repositories.subsRepo;
import es.debateo.Services.PostsServices;

@RestController
@RequestMapping("/posts")

public class PostsController {


	
	@Autowired
	PostsServices services;
	
	@Autowired
	postsRepo repo;
	
	@Autowired
	subsRepo subsRepo;
	
	@Autowired
	communitiesRepo communitiesRepo;
	
	
	
	

	@PostMapping("/{username}/{offset}/{fyp}")
	public ResponseEntity<Page<PostDTO>> getPosts(@PathVariable String username, @PathVariable int offset, @PathVariable boolean fyp, Authentication auth){

		
		ServiceResponse<PostDTO> response = services.getPosts(username,offset,fyp);
		System.out.println("pido página "+offset);
	
		return new ResponseEntity<Page<PostDTO>>(response.getPagina(),response.getStatus());
		
	}
	
	@GetMapping("/byCommunity/{offset}/{communityId}/{username}")
	public ResponseEntity<?> getPostsByCommunity(@PathVariable String username, @PathVariable int offset, @PathVariable long communityId){
		
//		
		
		Optional<Subscriptions> sub = subsRepo.findById(new SubscriptionsID(username,communityId));
		boolean isPrivate = communitiesRepo.isCommunityPrivate(communityId);
		String creator = communitiesRepo.getCommunityCreator(communityId);
	
		System.out.println("pido página "+offset);
		
		
		if(sub.isPresent() && sub.get().getSubscriptionLevel() == Subscriptions.subscriptionType.BANNED ) {
			
			return new ResponseEntity<String>("Has sido vetado de esta comunidad", HttpStatus.FORBIDDEN);
	
	
		} else if(sub.isEmpty() && isPrivate && !creator.equals(username)){
			
			return new ResponseEntity<String>("Necesitas suscribirte a la comunidad para poder acceder a sus publicaciones", HttpStatus.PAYMENT_REQUIRED);
			
			
		} else {
			ServiceResponse<PostDTO> response = services.getPostsByCommunity(username,communityId,offset);
			
			return new ResponseEntity<Page<PostDTO>>(response.getPagina(),response.getStatus());
		}
	}
	
	
	@GetMapping("/byCreator/{username}/{offset}")
	public ResponseEntity<Page<PostDTO>> getPostsByCreator(@PathVariable String username , @PathVariable int offset){
		
		ServiceResponse<PostDTO> response = services.getPostsByCreator(username,offset);
		
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
			
		     System.out.println("aaaaaa");
			 savedPost= repo.save(post);
		
			 
			} catch ( Exception e) {
					System.out.println("puta");
					return 0;
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
