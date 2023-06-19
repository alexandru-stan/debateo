package es.debateo.Model;

import java.util.Date;

import es.debateo.Model.ComplexID.SubscriptionsID;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;

@Entity
@IdClass(SubscriptionsID.class)
public class Subscriptions {

	enum subscriptionType{
		MEMBER,
		MOD
	}
	
	
	@Id
	String username;
	@Id
	@Column(name="community_id")
	long communityId;
	@Column
	Date subscription_date;
	@Column(name="subscription_level")
	subscriptionType subscriptionLevel;
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
	public Date getSubscription_date() {
		return subscription_date;
	}
	public void setSubscription_date(Date subscription_date) {
		this.subscription_date = subscription_date;
	}
	public subscriptionType getSubscriptionLevel() {
		return subscriptionLevel;
	}
	public void setSubscriptionLevel(subscriptionType subscriptionLevel) {
		this.subscriptionLevel = subscriptionLevel;
	}
	public Subscriptions(String username, long communityId, Date subscription_date,
			subscriptionType subscriptionLevel) {
		super();
		this.username = username;
		this.communityId = communityId;
		this.subscription_date = subscription_date;
		this.subscriptionLevel = subscriptionLevel;
	}
	public Subscriptions() {
		super();
	}
	
	
}
