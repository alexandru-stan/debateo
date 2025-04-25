package es.debateo.DTO;

public record CommunityOptionsRecord (boolean privateCommunity, boolean sensitiveContent, boolean blockNewSubscriptions, boolean adminMode, long communityId ) {
	
}
