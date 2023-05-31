package es.debateo.Services;

import java.sql.SQLException;

import org.apache.tomcat.util.codec.binary.Base64;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import DTO.ServiceResponse;
import es.debateo.Model.Posts;
import es.debateo.Repositories.postsRepo;

@Service

public class PostsServices {

	
	@Autowired
	postsRepo repo;
	
	
	
	
	
	
	public ServiceResponse<Posts> getPosts(String username,int offset){
		
		
		
		
		return new ServiceResponse<Posts>(repo.getPosts(username,PageRequest.of(offset, 5)),HttpStatus.OK);
	}
	
	
}
