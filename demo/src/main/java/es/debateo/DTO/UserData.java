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

	public UserData(String username, String password, String name, String mail, Date birth_date, int postsNumber) {
		super();
		this.username = username;
		this.password = password;
		this.name = name;
		this.mail = mail;
		this.birth_date = birth_date;
		this.postsNumber = postsNumber;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getMail() {
		return mail;
	}

	public void setMail(String mail) {
		this.mail = mail;
	}

	public Date getBirth_date() {
		return birth_date;
	}

	public void setBirth_date(Date birth_date) {
		this.birth_date = birth_date;
	}

	public int getPostsNumber() {
		return postsNumber;
	}

	public void setPostsNumber(int postsNumber) {
		this.postsNumber = postsNumber;
	}
	
	
}
