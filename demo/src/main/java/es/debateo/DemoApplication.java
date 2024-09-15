package es.debateo;

import org.apache.catalina.core.ApplicationContext;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;



@SpringBootApplication

public class DemoApplication {

	
	public static void main(String[] args) {
		System.out.println(System.getProperty("user.dir"));
		SpringApplication.run(DemoApplication.class, args);
		
	

		
		
		
	}

}
