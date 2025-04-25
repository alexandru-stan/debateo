	package es.debateo.Controllers;




import java.io.IOException;
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
import es.debateo.Utils.ImageUtils;

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
		return new ResponseEntity<Page<PostDTO>>(response.getPagina(),response.getStatus());
		
	}
	
	@GetMapping("/byCommunity/{offset}/{communityId}")
	public ResponseEntity<?> getPostsByCommunity(@PathVariable int offset, @PathVariable long communityId){
		
		String username = SecurityContextHolder.getContext().getAuthentication().getName();
		
		Optional<Subscriptions> sub = subsRepo.findById(new SubscriptionsID(username,communityId));
		boolean isPrivate = communitiesRepo.isCommunityPrivate(communityId);
		String creator = communitiesRepo.getCommunityCreator(communityId);
	
		System.out.println("pido páginaaa "+offset);
		
		
		if(sub.isPresent() && sub.get().getSubscriptionLevel() == Subscriptions.subscriptionType.BANNED ) {
			
			return new ResponseEntity<String>("No tienes acceso a las publicaciones de esta comunidad", HttpStatus.FORBIDDEN);
	
	
		} else if(sub.isEmpty() && isPrivate && !creator.equals(username)){
			
			return new ResponseEntity<String>("Necesitas suscribirte a la comunidad para poder acceder a sus publicaciones", HttpStatus.PAYMENT_REQUIRED);
			
			
		} else {
			System.out.println("aqui");
			ServiceResponse<PostDTO> response = services.getPostsByCommunity(username,communityId,offset);
			System.out.println("aqui2");
			return new ResponseEntity<Page<PostDTO>>(response.getPagina(),response.getStatus());
		}
	}
	
	
	@GetMapping("/byCreator/{username}/{offset}")
	public ResponseEntity<Page<PostDTO>> getPostsByCreator(@PathVariable String username , @PathVariable int offset){
		
		ServiceResponse<PostDTO> response = services.getPostsByCreator(username,offset);
	
		return new ResponseEntity<Page<PostDTO>>(response.getPagina(),response.getStatus());
	}
	
	
	@PostMapping("/new")
	public long  addPost( @RequestParam("image")  MultipartFile file,
			@RequestParam("titulo") String titulo,
			@RequestParam("cuerpo") String cuerpo,
			@RequestParam("user") String user,
			@RequestParam("community") String community) throws NumberFormatException, IOException{
		Posts savedPost = null;
//		System.out.println(user +"||"+community+"||"+titulo+"||"+cuerpo);
		
		
		
		
		

		Posts post = new Posts(user,Long.valueOf(community),titulo,cuerpo,null);
		savedPost= repo.save(post);
		

		if(file!=null) {
//			ImageUtils<Long> iu = new ImageUtils<Long>();
			ImageUtils.saveImageToFilesystem(file, savedPost.getPublicationId() , "publicationImages");
		}
		
		return savedPost.getPublicationId();
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
	public ResponseEntity<PostDTO> getPost(@PathVariable String username,@PathVariable long id) throws IOException{
		System.out.println(id);
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
