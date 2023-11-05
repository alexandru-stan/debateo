package es.debateo.DTO;

import es.debateo.Model.Communities;
import es.debateo.Model.Posts;
import es.debateo.Model.Subscriptions;


public class PostDTO {
	
	
	int likes;
	int comments;
	int liked;
	Posts post;
	Communities community;
	Subscriptions subscription;
	public PostDTO( Posts post, Communities community ,Subscriptions subscription,int likes, int comments, int liked) {
		super();
		this.likes = likes;
		this.comments = comments;
		this.liked = liked;
		this.post = post;
		this.community = community;
	}
	public int getLikes() {
		return likes;
	}
	public void setLikes(int likes) {
		this.likes = likes;
	}
	public int getComments() {
		return comments;
	}
	public void setComments(int comments) {
		this.comments = comments;
	}
	public int getLiked() {
		return liked;
	}
	public void setLiked(int liked) {
		this.liked = liked;
	}
	public Posts getPost() {
		return post;
	}
	public void setPost(Posts post) {
		this.post = post;
	}
	public Communities getCommunity() {
		return community;
	}
	public void setCommunity(Communities community) {
		this.community = community;
	}
	
	
	
	
	
	
	
	
	
//	int publicationId;
//	long likes;
//	String publicationTitle;
//	String publicationBody;
//	byte[] publicationImage; 
//	String publicationUser;
//	long comments;
//	String communityName;
//	byte[] communityImage;
//	int communityId;
//	String subscriptionLevel;
//	int liked;
//
//
//	
//	
//	public PostDTO(int publicationId, long likes, String publicationTitle, String publicationBody,
//			byte[] publicationImage, String publicationUser, long comments, String communityName, byte[] communityImage,
//			int communityId, String subscriptionLevel ,int liked) {
//		super();
//		this.publicationId = publicationId;
//		this.likes = likes;
//		this.publicationTitle = publicationTitle;
//		this.publicationBody = publicationBody;
//		this.publicationImage=publicationImage;
//		this.publicationUser = publicationUser;
//		this.comments = comments;
//		this.communityName = communityName;
//		this.communityImage=communityImage;
//		this.communityId = communityId;
//		this.subscriptionLevel = subscriptionLevel;
//		this.liked=liked;
//	}
//	
//	
//	
//
//
//
//
//
//	public PostDTO(int publicationId, long likes, String publicationTitle, String publicationBody,
//			byte[] publicationImage, String publicationUser, long comments, int liked) {
//		super();
//		this.publicationId = publicationId;
//		this.likes = likes;
//		this.publicationTitle = publicationTitle;
//		this.publicationBody = publicationBody;
//		this.publicationImage = publicationImage;
//		this.publicationUser = publicationUser;
//		this.comments = comments;
//		this.liked = liked;
//	}
//
//
//
//
//
//
//
//
//	public PostDTO() {
//		super();
//	}
//
//
//
//	
//
//
//	public int getLiked() {
//		return liked;
//	}
//
//
//
//	public void setLiked(int liked) {
//		this.liked = liked;
//	}
//
//
//
//	public int getPublicationId() {
//		return publicationId;
//	}
//
//
//
//	public void setPublicationId(int publicationId) {
//		this.publicationId = publicationId;
//	}
//
//
//
//	public long getLikes() {
//		return likes;
//	}
//
//
//
//	public void setLikes(long likes) {
//		this.likes = likes;
//	}
//
//
//
//	public String getPublicationTitle() {
//		return publicationTitle;
//	}
//
//
//
//	public void setPublicationTitle(String publicationTitle) {
//		this.publicationTitle = publicationTitle;
//	}
//
//
//
//	public String getPublicationBody() {
//		return publicationBody;
//	}
//
//
//
//	public void setPublicationBody(String publicationBody) {
//		this.publicationBody = publicationBody;
//	}
//
//
//
//	public byte[] getPublicationImage() {
//		return publicationImage;
//	}
//
//
//
//	public void setPublicationImage(byte[] publicationImage) {
//		this.publicationImage = publicationImage;
//	}
//
//
//
//	public String getPublicationUser() {
//		return publicationUser;
//	}
//
//
//
//	public void setPublicationUser(String publicationUser) {
//		this.publicationUser = publicationUser;
//	}
//
//
//
//	public long getComments() {
//		return comments;
//	}
//
//
//
//	public void setComments(long comments) {
//		this.comments = comments;
//	}
//
//
//
//	public String getCommunityName() {
//		return communityName;
//	}
//
//
//
//	public void setCommunityName(String communityName) {
//		this.communityName = communityName;
//	}
//
//
//
//	public byte[] getCommunityImage() {
//		return communityImage;
//	}
//
//
//
//	public void setCommunityImage(byte[] communityImage) {
//		
//		
//		this.communityImage=communityImage;
//	}
//
//
//
//	public int getCommunityId() {
//		return communityId;
//	}
//
//
//
//	public void setCommunityId(int communityId) {
//		this.communityId = communityId;
//	}
//
//
//
//	public String getSubscriptionLevel() {
//		return subscriptionLevel;
//	}
//
//
//
//	public void setSubscriptionLevel(String subscriptionLevel) {
//		this.subscriptionLevel = subscriptionLevel;
//	}
//
//
//
//	@Override
//	public String toString() {
//		return "PostDTO [publicationId=" + publicationId + ", likes=" + likes + ", publicationTitle=" + publicationTitle
//				+ ", publicationBody=" + publicationBody + ", publicationImage=" + Arrays.toString(publicationImage)
//				+ ", publicationUser=" + publicationUser + ", comments=" + comments + ", communityName=" + communityName
//				+ ", communityImage=" + Arrays.toString(communityImage) + ", communityId=" + communityId
//				+ ", subscriptionLevel=" + subscriptionLevel + "]";
//	}
//	
//
//	
//	
	

}
