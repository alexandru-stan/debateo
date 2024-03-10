package es.debateo.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import es.debateo.DTO.SubscriptionDTO;
import es.debateo.Model.Subscriptions;
import es.debateo.Model.ComplexID.SubscriptionsID;

public interface subscriptionsRepo extends JpaRepository<Subscriptions,SubscriptionsID> {

	
	
	
	@Query("SELECT new es.debateo.DTO.SubscriptionDTO (  "
			+ " s.subscriptionLevel) "
			+ " FROM Subscriptions s "
			+ " WHERE s.username=:username AND s.communityId=:id")
	SubscriptionDTO getSub(@Param("username") String username, @Param("id") long id);
	
	@Query("SELECT Count(s) "
			+ " FROM Subscriptions s"
			+ " WHERE s.communityId=:id")
	public int numeroDeMiembros(long id);
	
}
