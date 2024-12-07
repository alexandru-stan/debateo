package es.debateo.Services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import es.debateo.DTO.PostDTO;
import es.debateo.DTO.ServiceResponse;
import es.debateo.Repositories.commentsRepo;
import es.debateo.Repositories.likesRepo;
import es.debateo.Repositories.postsRepo;
import jakarta.persistence.Tuple;

@Service

public class PostsServices {

	
	@Autowired
	postsRepo repo;
	@Autowired 
	SeenServices seenServices;
	@Autowired
	likesRepo likesRepo;
	@Autowired
	commentsRepo commentsRepo;
	
	
	
	public final int size = 5;
	
	

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
//
//	public void  upload(MultipartFile file) throws IOException{
//		
//		
//		repo.save(new Posts(2238, "mistborn",345,0,"A","AAAAAAAAAAAA",file.getBytes()));
//		
//		
//		
//	}
	
//	
//	public byte[] download(long id) {
//		
//	Optional<Posts> post = repo.findById(id);
//	post.get().setPublicationImage(Base64.getEncoder().encode(post.get().getPublicationImage()));
//
//		return post.get().getPublicationImage();
//	
//	}
//	
	
	
	
	public ServiceResponse<PostDTO> getPosts(String username,int offset,boolean fyp){
		
		
		Page<PostDTO> posts = fyp ? repo.getPostsFyp(PageRequest.of(offset, 10)) :  repo.getPostsBySubscription(username,PageRequest.of(offset, 15));
		
//		Page<PostDTO> posts = repo.getPostsBySubscription(username,PageRequest.of(offset, 15));
		
		
		
		posts.getTotalElements();
		
		
		posts.forEach(post->{
			post.setLiked(repo.isItLiked(username, post.getPost().getPublicationId()));
			post.setLikes(likesRepo.likeCount(post.getPost().getPublicationId()));
			post.setComments(commentsRepo.countByPostId(post.getPost().getPublicationId()));
		});
		
		ServiceResponse<PostDTO> respuesta = new ServiceResponse<PostDTO>(posts,HttpStatus.OK);
		
		
		
		return respuesta;
		
		
	}
	
	
	public ServiceResponse<PostDTO> getPostsByCommunity(String user,long id,int offset){
		
		
		Page<PostDTO> posts = repo.getPostsByCommunity(id,PageRequest.of(offset, 15));
		posts.forEach(post->{
			post.setLiked(repo.isItLiked(user, post.getPost().getPublicationId()));
			post.setLikes(likesRepo.likeCount(post.getPost().getPublicationId()));
			post.setComments(commentsRepo.countByPostId(post.getPost().getPublicationId()));
		});
		
		ServiceResponse<PostDTO> respuesta = new ServiceResponse<PostDTO>(posts,HttpStatus.OK);
		
		
		
		return respuesta;
		
		
	}
	
	
	public ServiceResponse<PostDTO> getPostsByCreator(String user,int offset){
		
		Page<PostDTO> posts = repo.getPostsByCreator(user,PageRequest.of(offset, 15));
		
		posts.forEach(post->{
			post.setLiked(repo.isItLiked(user, post.getPost().getPublicationId()));
			post.setLikes(likesRepo.likeCount(post.getPost().getPublicationId()));
			post.setComments(commentsRepo.countByPostId(post.getPost().getPublicationId()));
		});
ServiceResponse<PostDTO> respuesta = new ServiceResponse<PostDTO>(posts,HttpStatus.OK);
		
		
		
		return respuesta;
		
	}
	
	
	
	public ServiceResponse<PostDTO> getPost(String username,long id){
		
		PostDTO post = repo.getPost(id);
		post.setLiked(repo.isItLiked(username, id));
		post.setLikes(likesRepo.likeCount(post.getPost().getPublicationId()));
		post.setComments(commentsRepo.countByPostId(id));
		return new ServiceResponse<PostDTO>(post,HttpStatus.OK);
		
		
		
	}
	
	
	
//	public ServiceResponse<PostDTO> getPosts(String username,int offset){
//		
//		
////	System.err.println("USUARIO "+username+" PAGINA+ "+offset);
//		
//		
//		ServiceResponse<Tuple> queryReturn = new ServiceResponse<Tuple>(repo.getPosts(username,PageRequest.of(offset, size)),HttpStatus.OK);
//	
//		List<Tuple> a = queryReturn.getPagina().getContent();
//		boolean isLast= queryReturn.getPagina().isLast();
//		
//		Page<PostDTO> page;
//	
//		for(Tuple tuple: a){
//			int liked = repo.isItLiked(username,(int)tuple.get("publicationId"));
//			PostDTO post=new PostDTO(
//					(int)tuple.get("publicationId"),
//					likesRepo.likeCount((int)tuple.get("publicationId")),
//					(String) tuple.get("publicationTitle"),
//					(String) tuple.get("publicationBody"),
//					(byte[]) tuple.get("publicationImage"),
//					(String) tuple.get("publicationUser"),
//					commentsRepo.commentsCount((int)tuple.get("publicationId")),
//					(String) tuple.get("communityName"),
//					(byte[]) tuple.get("communityImage"),
//					(int) tuple.get("communityId"),
//					(String) tuple.get("subscriptionLevel"),
//					liked
//					);
//			
//			
//			list.add(post);
//			
////			Seen[] seen = new Seen[size];
////			
////			for(int i=0;i<size;i++) {
////				
////				seen[i]=new Seen(username,post.getPublicationId());
////				
////			}
////			
////			seenServices.saveSeen(seen);
//			
//			
//		}
//		
//		
//		page= new PageImpl<PostDTO>(list,PageRequest.of(offset, size),queryReturn.getPagina().getTotalElements());
//		
//
//	
//		ServiceResponse<PostDTO> response = new ServiceResponse<PostDTO>(page,HttpStatus.OK);
//		return response;
//	}
////		
//		
//		
//		
//		
//		
		
////		
//		
//	
//	
//		
//		
//		
//		return response;
//	
//	}
//	
//	
//	public ServiceResponse<PostDTO> getPostsByCommunity(int offset,long community,String username){
//		
//		ServiceResponse<Tuple> queryReturn = new ServiceResponse<Tuple>(repo.getPostsByCommunity(community,PageRequest.of(offset, size)),HttpStatus.OK);
//		
//		List<Tuple> a = queryReturn.getPagina().getContent();
//		boolean isLast= queryReturn.getPagina().isLast();
//		
//		Page<PostDTO> page;
//	
//	
//		for(Tuple tuple: a){
//			int liked = repo.isItLiked(username,(int)tuple.get("publicationId"));
//	
//			PostDTO post=new PostDTO(
//					(int)tuple.get("publicationId"),
//					likesRepo.likeCount((int)tuple.get("publicationId")),
//					(String) tuple.get("publicationTitle"),
//					(String) tuple.get("publicationBody"),
//					(byte[]) tuple.get("publicationImage"),
//					(String) tuple.get("publicationUser"),
//					commentsRepo.commentsCount((int)tuple.get("publicationId")),
//					liked
//					);
//			
//			
//			
//		
//			
//			
//		}
//		
//		
//		page= new PageImpl<PostDTO>(list,PageRequest.of(offset, size),queryReturn.getPagina().getTotalElements());
//		
//
//	
//		ServiceResponse<PostDTO> response = new ServiceResponse<PostDTO>(page,HttpStatus.OK);
//		return response;
//		
//	}
//	
//	
//	
	public boolean deletePost(long id){
		repo.deleteById(id);
		return true;
	}
//	
	
}
