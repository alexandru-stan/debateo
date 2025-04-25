package es.debateo.Config.Security.Authentication;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationServiceException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.stereotype.Component;

import es.debateo.Config.Security.Authentication.Providers.JWTAuthenticationProvider;

@Component
public class CustomAuthenticationManager implements AuthenticationManager {

	@Autowired
	JWTAuthenticationProvider jwtProvider;
	
	
	@Override
	public Authentication authenticate(Authentication authentication) throws AuthenticationException {
		
	
		
		if(jwtProvider.supports(authentication.getClass())) {
			
			 return jwtProvider.authenticate(authentication);
			
		} else {
			throw new AuthenticationServiceException("Unsupported authentication method");
		}
		
	
		
	}

}
