package es.debateo.Services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import es.debateo.DTO.ServiceResponse;
import es.debateo.Model.Posts;
import es.debateo.Model.Seen;
import es.debateo.Repositories.postsRepo;

@Service

public class PostsServices {

	
	@Autowired
	postsRepo repo;
	@Autowired 
	SeenServices seenServices;
	
	public final int size = 5;
	
	

	
	
	
	public ServiceResponse<Posts> getPosts(String username,int offset){
		
		ServiceResponse<Posts> response = new ServiceResponse<Posts>(repo.getPosts(username,PageRequest.of(offset, size)),HttpStatus.OK);
		Seen[] seen = new Seen[size];
		
		for(int i=0;i<size;i++) {
			
			seen[i]=new Seen(username,response.getPagina().getContent().get(i).getPublicationId());
			
		}
		
		seenServices.saveSeen(seen);
		
		
	
	
		
		
		
		return response;
	
	}
	
	
	public ServiceResponse<Posts> getPostsByCommunity(int offset,long community){
		
		return new ServiceResponse<Posts>(repo.getPostsByCommunity(community,PageRequest.of(offset, size)),HttpStatus.OK);
		
	}
	
	
	
	public boolean deletePost(long id){
		repo.deleteById(id);
		return true;
	}
	
	
}
