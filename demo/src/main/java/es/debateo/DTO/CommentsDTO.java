package es.debateo.DTO;

import java.util.Arrays;
import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Id;

public class CommentsDTO {
	
	long commentId;
	long postId;
	String username;
	Date commentDate;
	String commentText;
	int replies;
	byte[] profileImage;
	
	
	public byte[] getProfileImage() {
		return profileImage;
	}
	public void setProfileImage(byte[] profileImage) {
		this.profileImage = profileImage;
	}
	
	
	@Override
	public String toString() {
		return "CommentsDTO [commentId=" + commentId + ", postId=" + postId + ", username=" + username
				+ ", commentDate=" + commentDate + ", commentText=" + commentText + ", replies=" + replies
				+ ", profileImage=" + Arrays.toString(profileImage) + "]";
	}
	public CommentsDTO(long commentId, long postId, String username, Date commentDate, String commentText) {
		super();
		this.commentId = commentId;
		this.postId = postId;
		this.username = username;
		this.commentDate = commentDate;
		this.commentText = commentText;
	}
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
	public void setCommentDate(Date commentDate) {
		this.commentDate = commentDate;
	}
	public String getCommentText() {
		return commentText;
	}
	public void setCommentText(String commentText) {
		this.commentText = commentText;
	}
	public int getReplies() {
		return replies;
	}
	public void setReplies(int replies) {
		this.replies = replies;
	}
	
	
	
	
}
