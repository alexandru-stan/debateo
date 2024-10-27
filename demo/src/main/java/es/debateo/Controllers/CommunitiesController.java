package es.debateo.Controllers;


import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import es.debateo.DTO.CommunityDTO;
import es.debateo.DTO.ServiceResponse;
import es.debateo.Model.Communities;
import es.debateo.Repositories.communitiesRepo;
import es.debateo.Services.CommunitiesServices;

@RestController

@RequestMapping("/communities")
public class CommunitiesController {
	@Autowired
	CommunitiesServices services;
	
	@Autowired
	communitiesRepo repo;
	
	@GetMapping("/search/{cadena}")
	public ResponseEntity<List<Communities>> search(@PathVariable String cadena){
		
		System.out.println(cadena);
		ServiceResponse<Communities> response = services.search(cadena);
		return new ResponseEntity<List<Communities>>(response.getLista(),response.getStatus());
		
	}
	
	
	@GetMapping("/{username}/{id}")
	public ResponseEntity<CommunityDTO> getCommunity(@PathVariable String username,@PathVariable long id){
		
		ServiceResponse<CommunityDTO> response = services.findCommunitiesById(username,id);
		
		return new ResponseEntity<CommunityDTO>(response.getObj(),response.getStatus());
		
	}
	
	@PostMapping("/add")
	public long add(@RequestParam("image") MultipartFile file,
					@RequestParam("name") String name,
					@RequestParam("description") String desc,
					@RequestParam("creator") String creator
					
		
			
			
			) {
		Communities response=null;
		try {
			 response = repo.save(new Communities(name,desc,file.getBytes(),creator));
			return response.getCommunityId();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return response.getCommunityId();
		
	}
	
	@GetMapping("/recommend")
	public ResponseEntity<List<Communities>> recommendation() {
		ServiceResponse<Communities> response = services.recommend();
		
		return  new ResponseEntity<List<Communities>>(response.getLista(),response.getStatus());
	}
	
	@GetMapping("/hot")
	public ResponseEntity<List<Communities>> getHotCommunities(){
		
		List<Communities> response = repo.getHotCommunities();
		return new ResponseEntity<List<Communities>>(response,HttpStatus.OK);
	}
	
	
	
	
	@GetMapping("/{username}")
	public ResponseEntity<List<Communities>> getSubscribedCommunities(@PathVariable String username) {
	System.out.println(username);
	List<Communities> result = repo.getSubscribedCommunities(username);
		
	return new ResponseEntity<List<Communities>>(result, HttpStatus.OK);
		
		}
	
	
	@GetMapping("/options/{id}")
	public ResponseEntity<Communities> getCommunityOptions(@PathVariable int id){
		
		
		Communities response = repo.getCommunityOptions(id);
		
		return new ResponseEntity<Communities>(response,HttpStatus.OK);
		
		
	}
	
	
	
	
	
	
}
