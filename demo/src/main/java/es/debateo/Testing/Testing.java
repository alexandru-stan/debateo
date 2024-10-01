package es.debateo.Testing;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Testing {
	@Autowired
	PasswordEncoder passwordEncoder;
	
	@GetMapping("/testLogin")
	public boolean testLogin() {
		String a ="debateo";
		String b ="debateo";
		String encodedA = passwordEncoder.encode(a);
		String encodedB = passwordEncoder.encode(b);
	
		
		return passwordEncoder.matches(b,encodedA);
	}
	
	
}
