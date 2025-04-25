package es.debateo.Utils;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.List;

import org.apache.commons.io.FilenameUtils;
import org.springframework.web.multipart.MultipartFile;

public class ImageUtils{

    private static final List<String> extensions = Arrays.asList(".jpg", ".jpeg", ".png", ".gif", ".webp", ".jfif");

    

    
    
    public static <T> boolean saveImageToFilesystem(MultipartFile file, T id, String folder) throws IllegalStateException, IOException {
    	
    	 String imageExtension = FilenameUtils.getExtension(file.getOriginalFilename());
	     String rootDir = System.getProperty("user.dir");
	     Path filePath = Paths.get(rootDir, "images/"+folder+"/"+id+"."+imageExtension);
	     file.transferTo(new File((filePath.toString())));

    	
    	return false;
    }
    
    
    
    public static <T> byte[] returnImage( T id, String folder) throws IOException {
        // Get the user.dir property
        String userDir = System.getProperty("user.dir");

        // Define the directory to search for images
        Path imageDir = Paths.get(userDir, "src/main/resources/images/"+folder); // "images" is the folder name inside user.dir

        // Iterate over all file extensions
        for (String ext : extensions) {
            // Define the path to the image file
            Path imagePath = imageDir.resolve(id + ext);

            // Check if the file exists
            if (Files.exists(imagePath)) {
                return Files.readAllBytes(imagePath);
                
              
            }
            
            
        }

        return null;
    }
}
