package es.debateo.Utils;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.List;

public class profileImageUtils {

    private static final List<String> extensions = Arrays.asList(".jpg", ".jpeg", ".png", ".gif", ".webp", ".jfif");
    private byte[] image;

    public profileImageUtils() {
    }

    public byte[] getImage() {
        return image;
    }

    public void setImage(byte[] image) {
        this.image = image;
    }

    public byte[] returnProfileImage(String username) throws IOException {
        // Get the user.dir property
        String userDir = System.getProperty("user.dir");

        // Define the directory to search for images
        Path imageDir = Paths.get(userDir, "images"); // "images" is the folder name inside user.dir

        // Iterate over all file extensions
        for (String ext : extensions) {
            // Define the path to the image file
            Path imagePath = imageDir.resolve(username + ext);

            // Check if the file exists
            if (Files.exists(imagePath)) {
                this.image = Files.readAllBytes(imagePath);
                System.out.println("IMAGE FOUND: " + imagePath.toAbsolutePath());
                break;
            }
            
            System.out.println("Image not found: " + imagePath.toAbsolutePath());
        }

        return this.image;
    }
}
