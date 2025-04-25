package es.debateo.DTO;

public class ChatAndUnreadMessagesDTO {

	String interactuer;
	long unreadMessages;
	public String getInteractuer() {
		return interactuer;
	}
	public void setInteractuer(String interactuer) {
		this.interactuer = interactuer;
	}
	public long getUnreadMessages() {
		return unreadMessages;
	}
	public void setUnreadMessages(long unreadMessages) {
		this.unreadMessages = unreadMessages;
	}
	public ChatAndUnreadMessagesDTO(String interactuer, long unreadMessages) {
		super();
		this.interactuer = interactuer;
		this.unreadMessages = unreadMessages;
	}
	
	
	
}
