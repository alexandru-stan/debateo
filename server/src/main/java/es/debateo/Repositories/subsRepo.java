package es.debateo.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import es.debateo.Model.Subscriptions;
import es.debateo.Model.ComplexID.SubscriptionsID;

public interface subsRepo extends JpaRepository<Subscriptions,SubscriptionsID> {

	
	@Query("SELECT s.username "
			+ " FROM Subscriptions s "
			+ " WHERE s.subscriptionLevel='MOD' "
			+ " AND s.communityId=:id")
	public List<String> getMods(@Param("id") long id);
	
	public int countByUsername(String username);
	
	


	
}
