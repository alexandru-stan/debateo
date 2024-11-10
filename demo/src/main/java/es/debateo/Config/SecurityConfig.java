package es.debateo.Config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
@Configuration
public class SecurityConfig {

//	 @Autowired
//	 JwtAuthenticationFilter jwtAuthenticationFilter;
//	 @Autowired
//	 AuthenticationProvider authenticationProvider;
	
	@Bean
	public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
//	    http.csrf().disable()
//	    .authorizeHttpRequests()
//	    .requestMatchers("/users/login", "/users/signin")
//	    .permitAll()
//	    .anyRequest()
//	    .authenticated()
//	    .and()
//	    .sessionManagement()
//	    .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
//	    .and()
//	    .authenticationProvider(authenticationProvider);
//	    .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);
        
        http.csrf(csrf -> csrf.disable())
                .authorizeHttpRequests(requests -> requests
                        .anyRequest()
                        .permitAll());
	    
	  

	   
	         

	    return http.build();
	}
	
	
	@Bean
	 PasswordEncoder passwordEncoder() {
	
		return new BCryptPasswordEncoder();
	}
	
}
