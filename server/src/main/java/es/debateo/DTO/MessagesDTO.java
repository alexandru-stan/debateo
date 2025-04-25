package es.debateo.DTO;

import java.util.Date;
import java.util.concurrent.ConcurrentMap;




public class MessagesDTO {

	
	byte[] profile_image;
	String interactuer;
	Date last_interaction;
	int message_id;
	String message_body;
	Long null_isRead_count;
	boolean isConnected;
	public byte[] getProfile_image() {
		return profile_image;
	}
	public void setProfile_image(byte[] profile_image) {
		this.profile_image = profile_image;
	}
	public String getInteractuer() {
		return interactuer;
	}
	public void setInteractuer(String interactuer) {
		this.interactuer = interactuer;
	}
	public Date getLast_interaction() {
		return last_interaction;
	}
	public void setLast_interaction(Date last_interaction) {
		this.last_interaction = last_interaction;
	}
	public int getMessage_id() {
		return message_id;
	}
	public void setMessage_id(int message_id) {
		this.message_id = message_id;
	}
	public String getMessage_body() {
		return message_body;
	}
	public void setMessage_body(String message_body) {
		this.message_body = message_body;
	}
	public Long getNull_isRead_count() {
		return null_isRead_count;
	}
	public void setNull_isRead_count(Long null_isRead_count) {
		this.null_isRead_count = null_isRead_count;
	}
	public MessagesDTO(byte[] profile_image, String interactuer, Date last_interaction, int message_id,
			String message_body, Long null_isRead_count) {
		super();
		this.profile_image = profile_image;
		this.interactuer = interactuer;
		this.last_interaction = last_interaction;
		this.message_id = message_id;
		this.message_body = message_body;
		this.null_isRead_count = null_isRead_count;
	}
	@Override
	public String toString() {
		return "MessagesDTO [profile_image=" + profile_image + ", interactuer=" + interactuer + ", last_interaction="
				+ last_interaction + ", message_id=" + message_id + ", message_body=" + message_body
				+ ", null_isRead_count=" + null_isRead_count + "]";
	}
	public boolean isConnected() {
		return isConnected;
	}
	public void setConnected(boolean isConnected) {
		this.isConnected = isConnected;
	}
	
	
	
	

	
	
	
}
