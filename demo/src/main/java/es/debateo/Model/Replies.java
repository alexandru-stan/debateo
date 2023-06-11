package es.debateo.Model;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Replies {

	
	@Id
	@Column(name="reply_id")
	long replyId;
	@Column
	String username;
	@Column(name="comment_id")
	long commentId;
	@Column(name="reply_date")
	Date replyDate;
	@Column(name="reply_text")
	String replyText;
	public long getReplyId() {
		return replyId;
	}
	public void setReplyId(long replyId) {
		this.replyId = replyId;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public long getCommentId() {
		return commentId;
	}
	public void setCommentId(long commentId) {
		this.commentId = commentId;
	}
	public Date getReplyDate() {
		return replyDate;
	}
	public void setReplyDate(Date replyDate) {
		this.replyDate = replyDate;
	}
	public String getReplyText() {
		return replyText;
	}
	public void setReplyText(String replyText) {
		this.replyText = replyText;
	}
	public Replies(long replyId, String username, long commentId, Date replyDate, String replyText) {
		super();
		this.replyId = replyId;
		this.username = username;
		this.commentId = commentId;
		this.replyDate = replyDate;
		this.replyText = replyText;
	}
	public Replies() {
		super();
	}
	
	
	
	
}
