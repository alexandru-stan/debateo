package es.debateo.Config.Security.Authentication.Filters;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import es.debateo.Config.Security.Authentication.CustomAuthenticationManager;
import es.debateo.Config.Security.Authentication.Authentications.JwtAuthentication;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class JwtFilter extends OncePerRequestFilter{

	@Autowired
	CustomAuthenticationManager cam;
	


 


	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		
		
		
		
		String requestUri = request.getRequestURI();
	
		
		
		  if (  requestUri.startsWith("/users/login") || requestUri.contains("websocket") || requestUri.contains("/users/signin")) {
		        filterChain.doFilter(request, response); // Continue without applying the filter
		  } else {
//			  System.out.println("A");
			  
			  String authHeader = request.getHeader("Authorization");
		
			
			  if (authHeader == null || !authHeader.startsWith("Bearer ")) {
				  
		            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
		            response.getWriter().write("No authentication token has been provided");
		            return;
		        }
			  
			  String token = authHeader.substring(7);
			  
			
			  
			 
			 JwtAuthentication auth = new JwtAuthentication(false,token,null);
//			 CustomAuthenticationManager authManager = new CustomAuthenticationManager();
			  
			 Authentication resultAuth  =  cam.authenticate(auth);
			
			  
			 if(resultAuth.isAuthenticated()) {
			  SecurityContextHolder.getContext().setAuthentication(resultAuth);
			  filterChain.doFilter(request, response);
		
			 } else {
				 	response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
		            response.getWriter().write("Invalid authentication token");
		            return;
			 }
			  
			  
		    
		  }
		
	}}
