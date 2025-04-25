package es.debateo.Config.Security.Authentication.Authentications;

import java.util.Collection;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;

@SuppressWarnings("serial")
public class JwtAuthentication implements Authentication {

	
	
	private boolean authenticated;
	private String token;
	private Collection<? extends GrantedAuthority> authorities;
	
	
	public JwtAuthentication(boolean authenticated, String token, Collection<? extends GrantedAuthority> authorities) {
		super();
		this.authenticated = authenticated;
		this.token = token;
		this.authorities = authorities;
	}
	
	
	
	

	@Override
	public String getName() {
		// TODO Auto-generated method stub
		return token;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		// TODO Auto-generated method stub
		return authorities;
	}

	@Override
	public Object getCredentials() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Object getDetails() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Object getPrincipal() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean isAuthenticated() {
		// TODO Auto-generated method stub
		return authenticated;
	}

	@Override
	public void setAuthenticated(boolean isAuthenticated) throws IllegalArgumentException {
		this.authenticated = isAuthenticated;
		
	}

}
