package es.debateo.Model;

import java.util.Arrays;
import java.util.Base64;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table
public class Posts {

	@Id
	@Column(name="publication_id")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	long publicationId;
	
	@Column
	String user;
	@Column
	long community;
	
	@Column(name="publication_title")
	String publicationTitle;
	@Column(name="publication_body")
	String publicationBody;
	
	@Column(name="publicationImage")
	byte[] publicationImage;
	public long getPublicationId() {
		return publicationId;
	}
	public void setPublicationId(long publicationId) {
		this.publicationId = publicationId;
	}
	public String getUser() {
		return user;
	}
	public void setUser(String user) {
		this.user = user;
	}
	public long getCommunity() {
		return community;
	}
	public void setCommunity(long community) {
		this.community = community;
	}


	public String getPublicationTitle() {
		return publicationTitle;
	}
	public void setPublicationTitle(String publicationTitle) {
		this.publicationTitle = publicationTitle;
	}
	public String getPublicationBody() {
		return publicationBody;
	}
	public void setPublicationBody(String publicationBody) {
		this.publicationBody = publicationBody;
	}
	
	
	
	public Posts(String user, long community, String publicationTitle, String publicationBody,byte[] publicationImage) {
		super();
		this.user = user;
		this.community = community;
		this.publicationTitle = publicationTitle;
		this.publicationBody = publicationBody;
		this.publicationImage = publicationImage;
	}
	public Posts(long publicationId, String user, long community, int likes, String publicationTitle,
			String publicationBody, byte[] publicationImage ) {
		super();
		this.publicationId = publicationId;
		this.user = user;
		this.community = community;
	
		this.publicationTitle = publicationTitle;
		this.publicationBody = publicationBody;
		this.publicationImage=publicationImage;
		
	}
	
	

	public Posts(String user, long community, int likes, String publicationBody) {
		super();
		this.user = user;
		this.community = community;
		
		this.publicationBody = publicationBody;
	}
	public Posts() {
		super();
	}
	public byte[] getPublicationImage() {
		return publicationImage;
	}
	

	public void setPublicationImage(byte[]  publicationImage) {

			
			this.publicationImage = publicationImage;
			
		
	}
	@Override
	public String toString() {
		return "Posts [publicationId=" + publicationId + ", user=" + user + ", community=" + community + ", likes="
				+ ", publicationTitle=" + publicationTitle + ", publicationBody=" + publicationBody
				+ ", publicationImage=" + Arrays.toString(publicationImage) + "]";
	}
	
	
}
