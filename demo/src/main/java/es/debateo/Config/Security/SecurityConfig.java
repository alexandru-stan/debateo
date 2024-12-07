package es.debateo.Config.Security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import es.debateo.Config.Security.Authentication.Filters.JwtFilter;

import static org.springframework.security.config.Customizer.withDefaults;
@Configuration
public class SecurityConfig {

	@Autowired
	JwtFilter jwtFilter;
	
	@Bean
	SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

//		http.addFilterAt(localhostFilter,UsernamePasswordAuthenticationFilter.class).authorizeHttpRequests(auth ->
//		auth.anyRequest().permitAll());

		
		http.csrf(e-> e.disable());
		http.authorizeHttpRequests(e -> 
		e.anyRequest().permitAll()
	
				);
		
//		http.sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS);
		
//		 http
//				
//		 		
//		 		.addFilterAt(jwtFilter,UsernamePasswordAuthenticationFilter.class);
		 		
		
		 return http.build();
		
		
		
	}
	
	
	@Bean
	   PasswordEncoder passwordEncoder(){
		
	 		return new BCryptPasswordEncoder();
	 		
	 }
	
	
	
	
}
