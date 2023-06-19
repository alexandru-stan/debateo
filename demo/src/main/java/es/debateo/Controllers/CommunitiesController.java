package es.debateo.Controllers;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import es.debateo.DTO.CommunityDTO;
import es.debateo.DTO.ServiceResponse;
import es.debateo.Model.Communities;
import es.debateo.Services.CommunitiesServices;

@RestController
@CrossOrigin(origins="*")
@RequestMapping("/communities")
public class CommunitiesController {
	@Autowired
	CommunitiesServices services;
	
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
	public void add() {
		
	}
	
	
}
