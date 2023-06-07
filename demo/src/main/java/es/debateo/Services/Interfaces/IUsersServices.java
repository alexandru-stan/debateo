package es.debateo.Services.Interfaces;

import es.debateo.DTO.ServiceResponse;
import es.debateo.Model.Users;


public interface IUsersServices{

	
	public ServiceResponse<String> login(String username,String password);
	
	public ServiceResponse<String> signin(Users user);
}
