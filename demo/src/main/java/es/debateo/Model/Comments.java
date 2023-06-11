package es.debateo.Model;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Comments {

	
	@Id
	@Column(name="comment_id")
	long commentId;
	@Column(name="post_id")
	long postId;
	@Column
	String username;
	@Column(name="comment_date")
	Date comment_date;
	@Column(name="comment_text")
	String commentText;
	public long getCommentId() {
		return commentId;
	}
	public void setCommentId(long commentId) {
		this.commentId = commentId;
	}
	public long getPostId() {
		return postId;
	}
	public void setPostId(long postId) {
		this.postId = postId;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public Date getComment_date() {
		return comment_date;
	}
	public void setComment_date(Date comment_date) {
		this.comment_date = comment_date;
	}
	public String getCommentText() {
		return commentText;
	}
	public void setCommentText(String commentText) {
		this.commentText = commentText;
	}
	public Comments(long commentId, long postId, String username, Date comment_date, String commentText) {
		super();
		this.commentId = commentId;
		this.postId = postId;
		this.username = username;
		this.comment_date = comment_date;
		this.commentText = commentText;
	}
	public Comments() {
		super();
	}
	
	
	
	
}
