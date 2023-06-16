package es.debateo.Model;

import es.debateo.Model.ComplexID.LikesID;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;

@Entity
@IdClass(LikesID.class)
public class Likes{
	
	@Id
	String username;
	@Id
	@Column(name="post_id")
	String publicationId;
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPublicationId() {
		return publicationId;
	}
	public void setPublicationId(String publicationId) {
		this.publicationId = publicationId;
	}
	public Likes(String username, String publicationId) {
		super();
		this.username = username;
		this.publicationId = publicationId;
	}
	public Likes() {
		super();
	}
	
	
	
	
	
	
	
}