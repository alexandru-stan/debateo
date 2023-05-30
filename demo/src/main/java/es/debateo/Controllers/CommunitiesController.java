package es.debateo.Controllers;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import DTO.ServiceResponse;
import es.debateo.Services.CommunitiesServices;

@RestController
@CrossOrigin(origins="*")
@RequestMapping("/communities")
public class CommunitiesController {
	@Autowired
	CommunitiesServices services;
	
	@GetMapping("/search/{cadena}")
	public ResponseEntity<List<String>> search(@PathVariable String cadena){
		
		System.out.println(cadena);
		ServiceResponse<String> response = services.search(cadena);
		
		return new ResponseEntity<List<String>>(response.getLista(),response.getStatus());
		
	}
	
	
}
