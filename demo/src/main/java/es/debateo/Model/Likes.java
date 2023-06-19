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
	long publicationId;
	
	public Likes() {
		super();
	}

	public Likes(String username, long publicationId) {
		super();
		this.username = username;
		this.publicationId = publicationId;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public long getPublicationId() {
		return publicationId;
	}

	public void setPublicationId(long publicationId) {
		this.publicationId = publicationId;
	}
	
	
	
	
	
	
	
}