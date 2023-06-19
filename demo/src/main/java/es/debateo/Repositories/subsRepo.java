package es.debateo.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import es.debateo.Model.Subscriptions;
import es.debateo.Model.ComplexID.SubscriptionsID;

public interface subsRepo extends JpaRepository<Subscriptions,SubscriptionsID> {

}
