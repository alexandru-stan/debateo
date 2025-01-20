package es.debateo.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import es.debateo.DTO.CommunityDTO;
import es.debateo.DTO.ServiceResponse;
import es.debateo.Model.Communities;
import es.debateo.Model.ComplexID.SubscriptionsID;
import es.debateo.Repositories.communitiesRepo;
import es.debateo.Repositories.subscriptionsRepo;

@Service
public class CommunitiesServices {
	@Autowired
	communitiesRepo repo;
	
	@Autowired 
	subscriptionsRepo subsRepo;
	
	public ServiceResponse<Communities> search(String cadena) {
		
		List<Communities> lista = repo.search(cadena);
		
		return new ServiceResponse<Communities>(lista,HttpStatus.OK);
		
		
		
		
	}
	
	public ServiceResponse<CommunityDTO> findCommunitiesById(long id){
		String username = SecurityContextHolder.getContext().getAuthentication().getName();
		System.out.println(username);
		CommunityDTO community = repo.getCommunityData(id,"pap");
		
		
		
		community.setCommunityMembers(subsRepo.numeroDeMiembros(community.getCommunityId())+1);
		
		
		
		
		return new ServiceResponse<CommunityDTO>(community,HttpStatus.OK);
		
	}
	
	
	
	public ServiceResponse<Communities> recommend(){
		List<Communities> com = repo.recommend();
		return new ServiceResponse<Communities>(com,HttpStatus.OK);
	}
	
//	public ServiceResponse<List<Communities>> getHotCommunities(){
////		return repo.getHotCommunities();
//	}
//	
	
	
	
}
