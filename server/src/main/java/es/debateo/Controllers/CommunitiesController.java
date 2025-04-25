package es.debateo.Controllers;


import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import es.debateo.DTO.CommunityDTO;
import es.debateo.DTO.CommunityOptionsRecord;
import es.debateo.DTO.ServiceResponse;
import es.debateo.Model.Communities;
import es.debateo.Repositories.communitiesRepo;
import es.debateo.Services.CommunitiesServices;
import es.debateo.Utils.ImageUtils;

@RestController

@RequestMapping("/communities")
public class CommunitiesController {
	@Autowired
	CommunitiesServices services;
	
	@Autowired
	communitiesRepo repo;
	
	@GetMapping("/search/{cadena}")
	public ResponseEntity<List<Communities>> search(@PathVariable String cadena){
		
		
		ServiceResponse<Communities> response = services.search(cadena);
		return new ResponseEntity<List<Communities>>(response.getLista(),response.getStatus());
		
	}
	
	
	@GetMapping("/data/{id}")
	public ResponseEntity<CommunityDTO> getCommunity(@PathVariable long id) throws IOException{
		System.out.println(id);
		ServiceResponse<CommunityDTO> response = services.findCommunitiesById(id);
//		ImageUtils<Long> imageUtils = new ImageUtils<Long>();
		System.out.println(response.getObj().getSubscription());
		response.getObj().setCommunityImage(ImageUtils.returnImage(response.getObj().getCommunityId(),"communityImages"));
	
		return new ResponseEntity<CommunityDTO>(response.getObj(),response.getStatus());
		
		
	}
	
	@PostMapping("/add")
	public long add(@RequestParam("image") MultipartFile file,
					@RequestParam("name") String name,
					@RequestParam("description") String desc,
					@RequestParam("creator") String creator,
					@RequestParam(name="privateCommunity",defaultValue="false") boolean privateCommunity,
					@RequestParam(name="adminMode",defaultValue="false") boolean adminMode,
					@RequestParam(name="blockNewSubscriptions",defaultValue="false") boolean blockNewSubscriptions,
					@RequestParam(name="sensitiveContent",defaultValue="false") boolean sensitiveContent
					
					
		
			
			
			) throws IllegalStateException, IOException {
		

		Communities response=null;
//		ImageUtils<Long> imageUtils = new ImageUtils<Long>();
		response = repo.save(new Communities(name,desc,null,creator,sensitiveContent,privateCommunity,blockNewSubscriptions,adminMode));
		ImageUtils.saveImageToFilesystem(file,response.getCommunityId(), "communityImages");
		return response.getCommunityId();
//		return response.getCommunityId();
		
	}
	
	@GetMapping("/recommend")
	public ResponseEntity<List<Communities>> recommendation() {
		ServiceResponse<Communities> response = services.recommend();
		
		return  new ResponseEntity<List<Communities>>(response.getLista(),response.getStatus());
	}
	
	@GetMapping("/hot")
	public ResponseEntity<List<Communities>> getHotCommunities(){
		
		List<Communities> response = repo.getHotCommunities();
//		ImageUtils<Long> imageUtils = new ImageUtils<Long>();
		response.forEach(e -> {
			try {
				e.setCommunityImage(ImageUtils.returnImage(e.getCommunityId(), "communityImages"));
			} catch (IOException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			}
		});
		return new ResponseEntity<List<Communities>>(response,HttpStatus.OK);
	}
	
	
	
	
	@GetMapping("/{username}")
	public ResponseEntity<List<Communities>> getSubscribedCommunities(@PathVariable String username) {
	
	List<Communities> result = repo.getSubscribedCommunities(username);
//	ImageUtils<Long> imageUtils = new ImageUtils<Long>();
	result.forEach(e -> {
		try {
			e.setCommunityImage(ImageUtils.returnImage(e.getCommunityId(), "communityImages"));
		} catch (IOException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
	});
	return new ResponseEntity<List<Communities>>(result, HttpStatus.OK);
		
		}
	
	
	@GetMapping("/options/{id}")
	public ResponseEntity<CommunityOptionsRecord> getCommunityOptions(@PathVariable int id){
		
		
		CommunityOptionsRecord response = repo.getCommunityOptions(id);
		
		return new ResponseEntity<CommunityOptionsRecord>(response,HttpStatus.OK);
		
		
	}
	
	@PostMapping("/options/update")
	public ResponseEntity<Boolean> updateCommunityOptions(@RequestBody CommunityOptionsRecord cor){
		
		System.out.println(cor.toString());
		repo.updateCommunityOptions(
				cor.privateCommunity(),
				cor.sensitiveContent(), 
				cor.blockNewSubscriptions(), 
				cor.adminMode(), 
				cor.communityId());
		return new ResponseEntity<Boolean>(true,HttpStatus.ACCEPTED);
		
	}
	
	
	
	
}
