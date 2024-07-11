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
	Date commentDate;
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
	public Date getCommentDate() {
		return commentDate;
	}
	public void setCommenDate(Date comment_date) {
		this.commentDate = comment_date;
	}
	public String getCommentText() {
		return commentText;
	}
	public void setCommentText(String commentText) {
		this.commentText = commentText;
	}
	public Comments(long commentId, long postId, String username, Date commentDate, String commentText) {
		super();
		this.commentId = commentId;
		this.postId = postId;
		this.username = username;
		this.commentDate = commentDate;
		this.commentText = commentText;
	}
	public Comments() {
		super();
	}
	public Comments(long postId, String username, Date commentDate, String commentText) {
		super();
		this.postId = postId;
		this.username = username;
		this.commentDate = commentDate;
		this.commentText = commentText;
	}
	@Override
	public String toString() {
		return "Comments [commentId=" + commentId + ", postId=" + postId + ", username=" + username + ", comment_date="
				+ commentDate + ", commentText=" + commentText + "]";
	}
	
	
	
	
}
