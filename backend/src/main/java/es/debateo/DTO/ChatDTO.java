package es.debateo.DTO;

import java.util.Date;

public class ChatDTO {

	String interactuer;
	Date last_interaction;
	int messasge_id;
	String message_body;
	
	
	
	
	
	public ChatDTO(String interactuer, Date last_interaction, int messasge_id, String message_body) {
		super();
		this.interactuer = interactuer;
		this.last_interaction = last_interaction;
		this.messasge_id = messasge_id;
		this.message_body = message_body;
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
	public int getMessasge_id() {
		return messasge_id;
	}
	public void setMessasge_id(int messasge_id) {
		this.messasge_id = messasge_id;
	}
	public String getMessage_body() {
		return message_body;
	}
	public void setMessage_body(String message_body) {
		this.message_body = message_body;
	}
	
	
	
	
}
