package es.debateo.Services;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import es.debateo.Model.Seen;
import es.debateo.Repositories.seenRepo;

@Service
public class SeenServices {
@Autowired
seenRepo repo;
	
	public void saveSeen(Seen[] seen) {
		List<Seen> seenList = Arrays.asList(seen);
		repo.saveAll(seenList);
		
		
	}
	
}
