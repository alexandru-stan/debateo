package es.debateo.Controllers;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import es.debateo.Model.Subscriptions;
import es.debateo.Model.ComplexID.SubscriptionsID;
import es.debateo.Repositories.subscriptionsRepo;

@RestController
@RequestMapping("/subscriptions")

public class SubscriptionsController {
	public enum subscriptionType{
		MEMBER,
		MOD
	}
	@Autowired
	subscriptionsRepo repo;
	
	
	
	@PostMapping("/sub/{id}")
	public void sub(@PathVariable long id) {
		
		repo.save(new Subscriptions(SecurityContextHolder.getContext().getAuthentication().getName(),id,new Date(),Subscriptions.subscriptionType.MEMBER));
		
	}
	
	
	@DeleteMapping("/unsub/{id}")
	public void unsub( @PathVariable long id) {
		
		repo.deleteById(new SubscriptionsID(SecurityContextHolder.getContext().getAuthentication().getName(),id));
		
	}
	
	
	@GetMapping("/mods/{id}")
	public ResponseEntity<List<String>> getMods( @PathVariable long id){
		
		return new ResponseEntity<List<String>>(repo.getMods(id),HttpStatus.OK);
		
		
	}
	
	@PostMapping("/mods/add/{username}/{id}")
	public Subscriptions addMod(@PathVariable String username,@PathVariable long id) {
		return (repo.save(new Subscriptions(username,id,new Date(),Subscriptions.subscriptionType.MOD)));
	}
	
	@PutMapping("/mods/downgrade/{username}/{id}")
	public void downgradeMod(@PathVariable String username,@PathVariable long id) {
		
		repo.save(new Subscriptions(username,id,new Date(),Subscriptions.subscriptionType.MEMBER));
		
	}
	
	@GetMapping("/users/{communityId}/{type}")
	public ResponseEntity<List<String>> returnUsers(@PathVariable int communityId, @PathVariable String type) {
		if(type.equals("banned")) {
		return new ResponseEntity<List<String>>(repo.getUsers(communityId, "BANNED"),HttpStatus.ACCEPTED);
		} else if(type.equals("mods")) {
		return new ResponseEntity<List<String>>(repo.getUsers(communityId, "MOD"),HttpStatus.ACCEPTED);
		}else {
		return null;
		}
		}

	@PutMapping("/banUsers/{id}/{type}")
	public void ban(@RequestBody List<String> items,@PathVariable int id, @PathVariable String type) {
		
		if(type.equals("banned")) {
			items.forEach(e -> {
				boolean exists = repo.existsByUsernameAndCommunityId(e,id);
				
				if(exists) {
					repo.banUsers(id,items, Subscriptions.subscriptionType.BANNED);
				} else {
					repo.save(new Subscriptions(e,id,new Date(),Subscriptions.subscriptionType.BANNED));
				}
				
			});
		} else {
			repo.banUsers(id,items, Subscriptions.subscriptionType.MOD);
		}
		
		
		
			 
		
	}
	
	@PutMapping("/unban/{id}/{type}")
	public void unban(@PathVariable int id, @RequestBody List<String> users,@PathVariable String type ) {
		

		
		if(type.equals("banned")) {
			repo.unbanUsers(id, users);
		} else {
			repo.downgrade(id,users, Subscriptions.subscriptionType.MEMBER);
		}
		
	}
	

	
	
	
}
