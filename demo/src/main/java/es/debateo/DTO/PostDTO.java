package es.debateo.DTO;

import es.debateo.Model.Comments;
import es.debateo.Model.Communities;
import es.debateo.Model.Likes;
import es.debateo.Model.Posts;
import es.debateo.Model.Subscriptions;


public class PostDTO {
	
	
	long likes;
	long comments;
	long liked;
	Posts post;
	Communities community;
	Subscriptions subscription;

	public PostDTO( Posts post, Communities community ,Subscriptions subscription,long likes, long comments, long liked) {
		super();
		this.likes = likes;
		this.comments = comments;
		this.liked = liked;
		this.post = post;
		this.community=community;
		this.subscription=subscription;
		
	}
	
	public PostDTO( Posts post,long likes, long comments, long liked) {
		super();
		this.likes = likes;
		this.comments = comments;
		this.liked = liked;
		this.post = post;
		
		
	}
	

	
	
	
	public PostDTO( Posts post, Communities community ,long likes, long comments, long liked) {
		super();
		this.likes = likes;
		this.comments = comments;
		this.liked = liked;
		this.post = post;
		this.community = community;
	}

	public PostDTO() {
		super();
	}

	public long getLikes() {
		return likes;
	}
	public void setLikes(long likes) {
		this.likes = likes;
	}
	public long getComments() {
		return comments;
	}
	public void setComments(long comments) {
		this.comments = comments;
	}
	public long getLiked() {
		return liked;
	}
	public void setLiked(long liked) {
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
	public Subscriptions getSubscription() {
		return subscription;
	}
	public void setSubscription(Subscriptions subscription) {
		this.subscription = subscription;
	}
	
	
	
	
	
	
	
	
	
//	long publicationId;
//	long likes;
//	String publicationTitle;
//	String publicationBody;
//	byte[] publicationImage; 
//	String publicationUser;
//	long comments;
//	String communityName;
//	byte[] communityImage;
//	long communityId;
//	String subscriptionLevel;
//	long liked;
//
//
//	
//	
//	public PostDTO(long publicationId, long likes, String publicationTitle, String publicationBody,
//			byte[] publicationImage, String publicationUser, long comments, String communityName, byte[] communityImage,
//			long communityId, String subscriptionLevel ,long liked) {
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
//	public PostDTO(long publicationId, long likes, String publicationTitle, String publicationBody,
//			byte[] publicationImage, String publicationUser, long comments, long liked) {
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
//	public long getLiked() {
//		return liked;
//	}
//
//
//
//	public void setLiked(long liked) {
//		this.liked = liked;
//	}
//
//
//
//	public long getPublicationId() {
//		return publicationId;
//	}
//
//
//
//	public void setPublicationId(long publicationId) {
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
//	public long getCommunityId() {
//		return communityId;
//	}
//
//
//
//	public void setCommunityId(long communityId) {
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
