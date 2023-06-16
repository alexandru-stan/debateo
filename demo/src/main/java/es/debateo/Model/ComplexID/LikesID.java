package es.debateo.Model.ComplexID;

import java.io.Serializable;

import jakarta.persistence.Embeddable;

@Embeddable
public class LikesID implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	String username;
	long publicationId;
	public LikesID(String username, long publicationId) {
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
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	

	
	
	
	

}