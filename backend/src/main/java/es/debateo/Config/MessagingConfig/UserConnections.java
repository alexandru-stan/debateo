package es.debateo.Config.MessagingConfig;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Component;

import es.debateo.Model.Records.ConnectionChangeRecord;

@Component  // This makes the class a Spring-managed singleton
public class UserConnections {

    @Autowired
    @Lazy
    private SimpMessagingTemplate simpMessagingTemplate;

    // This remains static to track connections across all instances
    private  final List<String> userConnections = new ArrayList<String>();

    // Non-static methods to manage user connections
    public void userHasConnected(String username) {
        // Add the user to the connections map
        userConnections.add(username);

        // Notify all users about the connection
        simpMessagingTemplate.convertAndSend("/onlineUsers", new ConnectionChangeRecord(username,true));
    }

    public void userHasDisconnected(String username) {
        // Remove the user from the connections map
        userConnections.remove(username);

        // Notify all users about the disconnection
        simpMessagingTemplate.convertAndSend("/onlineUsers", new ConnectionChangeRecord(username,false));
    }

    // Static method to retrieve the global map of connected users
    public  List<String> getConnectedUsers() {
        return userConnections;
    }
}
