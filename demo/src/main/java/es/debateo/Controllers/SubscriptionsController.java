package es.debateo.Controllers;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import es.debateo.Model.Subscriptions;
import es.debateo.Model.ComplexID.SubscriptionsID;
import es.debateo.Repositories.subsRepo;

@RestController
@RequestMapping("/subscriptions")
@CrossOrigin(origins="*")
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
	
	
}
