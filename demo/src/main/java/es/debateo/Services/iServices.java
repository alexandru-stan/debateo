package es.debateo.Services;

import es.debateo.Model.Users;


public interface iServices {

	
	public ServiceResponse login(String username,String password);
	
	public ServiceResponse signin(Users user);
}
