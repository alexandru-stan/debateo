package es.debateo.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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
	
	public ServiceResponse<CommunityDTO> findCommunitiesById(String username,long id){
		
		CommunityDTO community = repo.getCommunityData(id);
		
		
		if(subsRepo.existsById(new SubscriptionsID(username,id))) {
//			community.setSubscription(subsRepo.getSub(username,id).getSubscriptionLevel());
			community.setSubscription( subsRepo.findById(new SubscriptionsID(username,id)).get().getSubscriptionLevel().name());
		} else {
			community.setSubscription(null);
		}
		
		
		
		
		return new ServiceResponse<CommunityDTO>(community,HttpStatus.OK);
		
	}
	
	
	
	public ServiceResponse<Communities> recommend(){
		List<Communities> com = repo.recommend();
		return new ServiceResponse<Communities>(com,HttpStatus.OK);
	}
	
	
	
	
	
	
}
