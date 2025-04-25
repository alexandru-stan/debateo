package es.debateo.Model;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Messages {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int messageId;
	@Column
	String messageBody;
	@Column
	String messageSender;
	@Column
	String messageReceiver;
	@Column
	Date messageDate;
	@Column
	boolean isRead;
	
	
	
	
	public Messages() {
		super();
	}

	public Messages(int messageId, String messageBody, String messageSender, String messageReceiver, Date messageDate,boolean isRead) {
		super();
		this.messageId = messageId;
		this.messageBody = messageBody;	
		this.messageSender = messageSender;
		this.messageReceiver = messageReceiver;
		this.messageDate = messageDate;
		this.isRead = isRead;
	}
	
	public Messages(String messageBody, String messageSender, String messageReceiver, Date messageDate,boolean isRead) {
		super();
		
		this.messageBody = messageBody;
		this.messageSender = messageSender;
		this.messageReceiver = messageReceiver;
		this.messageDate = messageDate;
		this.isRead = isRead;
	}
	
	
	public boolean isRead() {
		return isRead;
	}

	public void setRead(boolean isRead) {
		this.isRead = isRead;
	}

	public int getMessageId() {
		return messageId;
	}
	public void setMessageId(int messageId) {
		this.messageId = messageId;
	}
	public String getMessageBody() {
		return messageBody;
	}
	public void setMessageBody(String messageBody) {
		this.messageBody = messageBody;
	}
	public String getMessageSender() {
		return messageSender;
	}
	public void setMessageSender(String messageSender) {
		this.messageSender = messageSender;
	}
	public String getMessageReceiver() {
		return messageReceiver;
	}
	public void setMessageReceiver(String messageReceiver) {
		this.messageReceiver = messageReceiver;
	}
	public Date getMessageDate() {
		return messageDate;
	}
	public void setMessageDate(Date messageDate) {
		this.messageDate = messageDate;
	}
	@Override
	public String toString() {
		return "Messages [messageId=" + messageId + ", messageBody=" + messageBody + ", messageSender=" + messageSender
				+ ", messageReceiver=" + messageReceiver + ", messageDate=" + messageDate + "]";
	}
	
	
	
}
	
	
	
	
	
	
	
	