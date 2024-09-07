package es.debateo.Utils;

import java.io.IOException;
import java.io.InputStream;
import java.util.Arrays;
import java.util.List;

public class profileImageUtils{

	private final static List<String> extensions = Arrays.asList(".jpg", ".jpeg", ".png", ".gif",".webp");
	private static byte[] image;
	
	
	
	
	public static byte[] returnProfileImage(String username) throws IOException {
		for(String ext : extensions) {
	    	 String imagePath = "static/profileImages/" + username+ ext;
	 	     InputStream imageStream = profileImageUtils.class.getClassLoader().getResourceAsStream(imagePath);
	 	    
	 	     if(imageStream!=null) {
	 	    	 image = imageStream.readAllBytes();
	 	    	
	 	    	 break;
	 	     }
	 	    
	    }
		
		
		return image;
		
	}
	
	
}
