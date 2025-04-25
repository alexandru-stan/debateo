package es.debateo.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import es.debateo.Config.MessagingConfig.UserConnections;

@RestController
@RequestMapping("/tests")
public class TestController {

	@Autowired
	UserConnections userConnections;
	
	@GetMapping("/connectedUsers")
	public List<String> connectedUsers(){
		
		return userConnections.getConnectedUsers();
		
	}
	
	
}
