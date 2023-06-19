package es.debateo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import es.debateo.Model.Posts;
import es.debateo.Repositories.postsRepo;
import es.debateo.Services.PostsServices;


@SpringBootApplication

public class DemoApplication {

	
	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
		
		
		
		
	}

}
