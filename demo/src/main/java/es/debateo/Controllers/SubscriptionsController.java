package es.debateo.Controllers;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import es.debateo.DTO.ServiceResponse;
import es.debateo.Model.Communities;
import es.debateo.Model.Subscriptions;
import es.debateo.Model.ComplexID.SubscriptionsID;
import es.debateo.Repositories.subsRepo;

@RestController
@RequestMapping("/subscriptions")

public class SubscriptionsController {
	public enum subscriptionType{
		MEMBER,
		MOD
	}
	@Autowired
	subsRepo repo;
	
	
	
	@PostMapping("/sub/{username}/{id}")
	public void sub(@PathVariable String username, @PathVariable long id) {
		repo.save(new Subscriptions(username,id,new Date(),Subscriptions.subscriptionType.MEMBER));
	}
	
	
	@DeleteMapping("/unsub/{username}/{id}")
	public void unsub(@PathVariable String username, @PathVariable long id) {
		
		repo.deleteById(new SubscriptionsID(username,id));
		
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
	
	
	
}
