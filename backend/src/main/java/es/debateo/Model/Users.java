package es.debateo.Model;

import java.util.Collection;
import java.util.Date;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.csrf.CsrfToken;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Transient;





@Entity
public class Users implements UserDetails {

	@Id
	private String username;
	@Column
	private String password;
	@Column
	private String name;
	@Column
	private String mail;
	@Column
	private Date birth_date;

	
	@Transient
	private int subsCount;
	
	@Transient
	private byte[] profileImageFile;
	
	@Transient 
	String token;
	
	@Transient
	CsrfToken csrfToken;
	
	
	
	
	public CsrfToken getCsrfToken() {
		return csrfToken;
	}

	public void setCsrfToken(CsrfToken csrfToken) {
		this.csrfToken = csrfToken;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public byte[] getProfileImageFile() {
		return profileImageFile;
	}

	public void setProfileImageFile(byte[] profileImageFile) {
		this.profileImageFile = profileImageFile;
	}


	public int getSubsCount() {
		return subsCount;
	}

	public void setSubsCount(int subsCount) {
		this.subsCount = subsCount;
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

	public Users(String username, String password, String name, String mail, Date birth_date) {
		super();
		this.username = username;
		this.password = password;
		this.name = name;
		this.mail = mail;
		this.birth_date = birth_date;
	
		
	}

	public Users(String username,String password) {
		this.username=username;
		this.password= password;
	}
	
	public Users() {
		
	}

	@Override
	public String toString() {
		return "Users [username=" + username + ", password=" + password + ", name=" + name + ", mail=" + mail
				+ ", birth_date=" + birth_date + ", subsCount=" + subsCount + "]";
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		// TODO Auto-generated method stub
		return List.of();
	}

	@Override
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isEnabled() {
		// TODO Auto-generated method stub
		return true;
	}
	
	
}
