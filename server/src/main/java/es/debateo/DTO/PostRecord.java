package es.debateo.DTO;

import es.debateo.Model.Communities;
import es.debateo.Model.Posts;
import es.debateo.Model.Subscriptions;

public record PostRecord(
		
		Posts post,
		Communities community ,
		Subscriptions subscription,
		long likes, 
		long comments,
		long liked
		
		) {}
