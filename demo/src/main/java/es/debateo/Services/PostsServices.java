package es.debateo.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import es.debateo.DTO.ServiceResponse;
import es.debateo.Model.Posts;
import es.debateo.Repositories.postsRepo;

@Service

public class PostsServices {

	
	@Autowired
	postsRepo repo;
	
	
	
	
	
	
	public ServiceResponse<Posts> getPosts(String username,int offset){
		
		
		
		
		return new ServiceResponse<Posts>(repo.getPosts(username,PageRequest.of(offset, 20)),HttpStatus.OK);
	}
	
	
	
	
	public ServiceResponse<Posts> getPostsByCommunity(int offset,long community){
		
		return new ServiceResponse<Posts>(repo.getPostsByCommunity(community,PageRequest.of(offset, 20)),HttpStatus.OK);
		
	}
	
	
}
