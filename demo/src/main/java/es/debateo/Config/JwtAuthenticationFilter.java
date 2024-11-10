//														package es.debateo.Config;
//
//import java.io.IOException;
//import java.security.Key;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.lang.NonNull;
//import org.springframework.stereotype.Component;
//import org.springframework.web.filter.OncePerRequestFilter;
//
//import es.debateo.Repositories.usersRepo;
//import io.jsonwebtoken.security.Keys;
//import jakarta.servlet.FilterChain;
//import jakarta.servlet.ServletException;
//import jakarta.servlet.http.HttpServletRequest;
//import jakarta.servlet.http.HttpServletResponse;
//
//@Component
//public class JwtAuthenticationFilter extends OncePerRequestFilter {
//
//	@Autowired
//	JwtService jwtService;
//	@Autowired
//	usersRepo repo;
//	private static final String secretKey = "40ceb4c5f16780a7a84ac056d8781ca95ef21ce2adce87879a9b55a6f61dbe0c";
//
//	
//	@Override
//	protected void doFilterInternal(
//			@NonNull HttpServletRequest request, 
//			@NonNull HttpServletResponse response, 
//			@NonNull FilterChain filterChain)
//			throws ServletException, IOException {
//	
//			final String authHeader = request.getHeader("Authorization");
//			final String jwt;
//			final String username;
//			
//			
//			if(authHeader != null && authHeader.startsWith("Bearer")) {
//		
//				jwt = authHeader.substring(7);
//				Key key = Keys.hmacShaKeyFor(secretKey.getBytes());
//				
//				
//				
//			}
//			

				
				
				
		
				
			
				
				
				
		
			
//		
//		
//		
//		
//	}
//
//	
//	
//}
