package es.debateo.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import es.debateo.Model.Seen;
import es.debateo.Model.ComplexID.SeenID;

public interface seenRepo extends JpaRepository<Seen,SeenID> {

}
