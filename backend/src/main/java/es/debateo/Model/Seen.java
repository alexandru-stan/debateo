package es.debateo.Model;

import es.debateo.Model.ComplexID.SeenID;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;

@Entity
@IdClass(SeenID.class)
public class Seen {

	@Id
	String username;
	@Id
	@Column(name="publication_id")
	long publicationId;
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
	public Seen(String username, long publicationId) {
		super();
		this.username = username;
		this.publicationId = publicationId;
	}
	public Seen() {
		super();
	}
	
	
	
	
	
	
}
