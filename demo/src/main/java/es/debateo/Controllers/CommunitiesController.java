package es.debateo.Controllers;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
	
	
	@GetMapping("/{id}")
	public ResponseEntity<Communities> getCommunity(@PathVariable long id){
		
		ServiceResponse<Communities> response = services.findCommunitiesById(id);
		
		return new ResponseEntity<Communities>(response.getObj(),response.getStatus());
		
	}
	
	
}
