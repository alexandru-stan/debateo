package es.debateo.Config.Security.Authentication.Providers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.stereotype.Component;

import es.debateo.Config.Security.Authentication.Authentications.JwtAuthentication;
import es.debateo.Config.Security.Authentication.JWT.JwtService;

@Component
public class JWTAuthenticationProvider implements AuthenticationProvider {

	@Autowired
	JwtService jwtService;
	
	@Override
	public Authentication authenticate(Authentication authentication) throws AuthenticationException {
	
		try {
		jwtService.IsTokenValid(authentication.getName());
		return new JwtAuthentication(true,authentication.getName(),null);
		} catch (Exception e) {
		
			return new JwtAuthentication(false,authentication.getName(),null);
			
		}
		
		
		
		
	}

	@Override
	public boolean supports(Class<?> authentication) {
		// TODO Auto-generated method stub
		return JwtAuthentication.class.equals(authentication);
	}

}
