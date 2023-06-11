package es.debateo.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import es.debateo.DTO.ServiceResponse;
import es.debateo.Model.Communities;
import es.debateo.Repositories.communitiesRepo;

@Service
public class CommunitiesServices {
	@Autowired
	communitiesRepo repo;
	
	public ServiceResponse<Communities> search(String cadena) {
		
		List<Communities> lista = repo.search(cadena);
		
		return new ServiceResponse<Communities>(lista,HttpStatus.OK);
		
		
		
		
	}
	
	public ServiceResponse<Communities> findCommunitiesById(long id){
		
		Communities community = repo.findCommunitiesByCommunityId(id);
		
		return new ServiceResponse<Communities>(community,HttpStatus.OK);
		
	}
	
	
	
	
	
	
}
