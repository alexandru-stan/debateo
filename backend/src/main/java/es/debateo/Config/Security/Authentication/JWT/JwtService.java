package es.debateo.Config.Security.Authentication.JWT;

import java.security.Key;
import java.util.Base64;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

@Service
public class JwtService {

	private static final String key = "40ceb4c5f16780a7a84ac056d8781ca95ef21ce2adce87879a9b55a6f61dbe0c";

	public String generateToken(UserDetails userDetails) {
		return generateToken(new HashMap<>(),userDetails);
	}
	
	public String generateToken(Map<String,Object> extraClaims,UserDetails userDetails) {
		
		
		return Jwts.builder()
				.setClaims(extraClaims)
				.setSubject(userDetails.getUsername())
				.setIssuedAt(new Date(System.currentTimeMillis()))
//				.setExpiration(new Date(System.currentTimeMillis() + 1000*60*24))
				.signWith(getSignInKey(),SignatureAlgorithm.HS256)
				.compact();
																	
	}
	
	
	 private Key getSignInKey() {
	        byte[] keyBytes = Base64.getDecoder().decode(key);  // Using standard Base64 decoder
	        return Keys.hmacShaKeyFor(keyBytes);  // Create the HMAC key
	    }
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	public <T> T extractClaim(String token,Function<Claims,T> claimsResolver) {
		final Claims claims = extractAllClaims(token);
		
		return claimsResolver.apply(claims);
	
	
	}
	
	public String extractUsername(String jwt) {
		
		return extractClaim(jwt,Claims::getSubject);
		
	}
	
	
	

	

	
	
    public Claims IsTokenValid(String token) throws Exception {
        try {
            return Jwts.parserBuilder()
                    .setSigningKey(getSignInKey())
                    .build()
                    .parseClaimsJws(token)
                    .getBody();
        } catch (ExpiredJwtException e) {
            throw new Exception("Token has expired.");
        } catch (JwtException e) {
            throw new Exception("Invalid token.");
        }
    }
	
	public boolean isTokenExpired(String token) {
		return extractExpiration(token).before(new Date());
	}
	
	public Date extractExpiration(String token) {
		return extractClaim(token,Claims::getExpiration);
	}
	
	private Claims extractAllClaims (String token) {
		
		return Jwts
				.parserBuilder()
				.setSigningKey(getSignInKey())
				.build()
				.parseClaimsJws(token)
				.getBody();
		
	}
	
	

	
	
}
