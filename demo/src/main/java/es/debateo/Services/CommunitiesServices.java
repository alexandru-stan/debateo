package es.debateo.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import DTO.ServiceResponse;
import es.debateo.Repositories.communitiesRepo;

@Service
public class CommunitiesServices {
	@Autowired
	communitiesRepo repo;
	
	public ServiceResponse<String> search(String cadena) {
		
		List<String> lista = repo.search(cadena);
		
		return new ServiceResponse<String>(lista,HttpStatus.OK);
		
		
		
		
		
	
		
	}
	
	
	
	
}
