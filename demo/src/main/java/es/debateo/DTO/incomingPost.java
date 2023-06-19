package es.debateo.DTO;

import org.springframework.web.multipart.MultipartFile;

public class incomingPost {

	String publicationTitle;
	String publicationBody;
	MultipartFile publicationImage;
	public incomingPost(String publicationTitle, String publicationBody, MultipartFile imagen) {
		super();
		this.publicationTitle = publicationTitle;
		this.publicationBody = publicationBody;
//		this.publicationImage = imagen;
		System.out.println(imagen);
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
	public MultipartFile getPublicationImage() {
		return publicationImage;
	}
	public void setPublicationImage(MultipartFile publicationImage) {
//		this.publicationImage = publicationImage;
		System.out.println(publicationImage);
	}
	
	
	
	
	
}
