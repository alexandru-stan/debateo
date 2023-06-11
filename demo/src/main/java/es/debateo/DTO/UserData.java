package es.debateo.DTO;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Id;

public class UserData {

	

	
	private String username;
	
	private String password;
	
	private String name;
	
	private String mail;
	
	private Date birth_date;
	
	private int postsNumber;
	
	
}
