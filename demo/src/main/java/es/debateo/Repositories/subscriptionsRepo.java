package es.debateo.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import es.debateo.DTO.SubscriptionDTO;
import es.debateo.Model.Subscriptions;
import es.debateo.Model.ComplexID.SubscriptionsID;
import jakarta.transaction.Transactional;

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
	
	@Query(value = "SELECT username "
			+ " FROM subscriptions"
			+ " WHERE subscription_level =  :type "
			+ " AND community_id = :id", nativeQuery = true)
	public List<String> getUsers( @Param("id") long communityId, String type );

	
	
	@Modifying
	@Transactional
	@Query("UPDATE Subscriptions s "
			+ " SET s.subscriptionLevel = :banned "
			+ " WHERE username IN (:users) "
			+ " AND s.communityId = :id ")
	public void banUsers(@Param("id") int id ,@Param("users") List<String> users, @Param("banned") Subscriptions.subscriptionType banned);
	
	
	@Modifying
	@Transactional
	@Query("UPDATE Subscriptions s "
			+ " SET s.subscriptionLevel = :member "
			+ " WHERE username IN (:users) "
			+ " AND s.communityId = :id ")
	public void downgrade(@Param("id") int id ,@Param("users") List<String> users, @Param("member") Subscriptions.subscriptionType banned);
	
	@Query("SELECT s.username "
			+ " FROM Subscriptions s "
			+ " WHERE s.subscriptionLevel='MEMBER' "
			+ " AND s.communityId=:id")
	public List<String> getMods(@Param("id") long id);
	
	public int countByUsername(String username);
	
	@Transactional
	@Modifying
	@Query("DELETE FROM Subscriptions s "
			+ "WHERE s.username IN (:users) "
			+ "AND s.communityId = :id") 
	public void unbanUsers(@Param("id") int id ,@Param("users") List<String> users);
	
	
	public boolean existsByUsernameAndCommunityId(String username,int communityId);
	
}
