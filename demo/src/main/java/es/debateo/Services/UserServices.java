package es.debateo.Services;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import es.debateo.DTO.ServiceResponse;
import es.debateo.Model.Users;
import es.debateo.Repositories.communitiesRepo;
import es.debateo.Repositories.subsRepo;
import es.debateo.Repositories.usersRepo;
import es.debateo.Utils.ImageUtils;

@Service
public class UserServices implements UserDetailsService{
	@Autowired
	usersRepo repo;
	@Autowired
	subsRepo subsRepo;
	@Autowired 
	communitiesRepo communitiesRepo;
	@Autowired
	PasswordEncoder passwordEncoder;
//	@Autowired
//	AuthenticationManager authenticationManager;

	
	





	public ServiceResponse<Users> login(String username,String password) throws IOException {
	

		Users user = repo.existsById(username) ?  repo.findById(username).get() : null;
		
		if(user!=null && passwordEncoder.matches(password, user.getPassword())) {
			Users userData = repo.findById(username).get();
			userData.setSubsCount((subsRepo.countByUsername(userData.getUsername()) + communitiesRepo.countByCommunityCreator(userData.getUsername())));
			ImageUtils<String> util = new ImageUtils<String>();
			userData.setProfileImageFile(util.returnImage(userData.getUsername(),"profileImages"));
			
			
			return new ServiceResponse<Users>(userData,HttpStatus.OK);
			
		} else {
			
			return new ServiceResponse<Users>((Users) null,HttpStatus.NOT_FOUND);
			
		}
		
		
		
	}
	
	
	public ServiceResponse<String> signin(Users user) {
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		if(repo.existsById(user.getUsername())) {
			return new ServiceResponse<String>("EL NOMBRE DE USUARIO YA EXISTE",HttpStatus.CONFLICT);
		} else {
	
		
			
			repo.save(user);
			return new ServiceResponse<String>("CUENTA CREADA CORRECTAMENTE",HttpStatus.OK);
			
			
		}
		
		
	
		
	
	}
	
	public ServiceResponse<String> search(String cadena,String requestUser){
		
		Pageable page = PageRequest.of(0, 5);
		
		List<String> a = repo.search(cadena,page,requestUser);
		
		return new ServiceResponse<String>(a,HttpStatus.OK);
		
	}
	
	
	public void userUpdate(Users user, String originalUsername) {
		
		repo.updateUser(user.getUsername(),user.getName(),user.getMail(),user.getBirth_date(),originalUsername);
		
	}


	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

		Optional<Users> user = repo.findById(username);
		if(user.isPresent()) return user.get(); else return null;
		
	}
	
	
	
}
