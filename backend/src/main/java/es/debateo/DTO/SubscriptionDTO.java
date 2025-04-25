package es.debateo.DTO;

import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;

public class SubscriptionDTO {

	
	
	enum subscriptionType{
		MEMBER,
		MOD
	}

	@Enumerated(EnumType.STRING)
	subscriptionType subscriptionLevel;


	public subscriptionType getSubscriptionLevel() {
		return subscriptionLevel;
	}
	

	public SubscriptionDTO() {
		super();
	}


	public void setSubscriptionLevel(subscriptionType subscriptionLevel) {
		this.subscriptionLevel = subscriptionLevel;
	}


	public SubscriptionDTO(subscriptionType subscriptionLevel) {
		super();
		this.subscriptionLevel = subscriptionLevel;
	}
	
	
	
}
