package es.debateo.Model;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Table	
@Entity
public class Users {

	@Id
	
	private String username;
	@Column
	private String password;
	@Column
	private String name;
	@Column
	private Date birth_date;
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
	public Date getBirth_date() {
		return birth_date;
	}
	public void setBirth_date(Date birth_date) {
		this.birth_date = birth_date;
	}
	public Users(String username, String password, String name, Date birth_date) {
		super();
		this.username = username;
		this.password = password;
		this.name = name;
		this.birth_date = birth_date;
	}
	
	public Users(String username,String password) {
		this.username=username;
		this.password= password;
	}
	
	public Users() {
		
	}
	
	
}
