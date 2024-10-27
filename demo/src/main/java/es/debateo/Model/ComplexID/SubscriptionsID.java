package es.debateo.Model.ComplexID;

import java.io.Serializable;

import jakarta.persistence.Embeddable;
@Embeddable
public class SubscriptionsID{

	
//	private static final long serialVersionUID = 1;
	
	private String username;
	
	private long communityId;

	

	public SubscriptionsID(String username, long communityId) {
		super();
		this.username = username;
		this.communityId = communityId;
	}
	
	
	

	public SubscriptionsID() {
		super();
	}




	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public long getCommunityId() {
		return communityId;
	}

	public void setCommunityId(long communityId) {
		this.communityId = communityId;
	}

	
	
	
	
}
