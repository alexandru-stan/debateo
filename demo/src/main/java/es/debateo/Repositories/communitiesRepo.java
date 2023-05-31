package es.debateo.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import es.debateo.Model.Communities;
public interface communitiesRepo extends JpaRepository<Communities,Long> {

	@Query("SELECT communityName FROM Communities c WHERE c.communityName LIKE :param%")
    List<String> search(@Param("param") String cadena);
	
}
