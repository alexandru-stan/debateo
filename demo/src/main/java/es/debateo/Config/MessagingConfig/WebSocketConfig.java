package es.debateo.Config.MessagingConfig;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.messaging.simp.user.SimpSubscription;
import org.springframework.messaging.simp.user.SimpUserRegistry;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;


//IN THIS CLASS I'M CONFIGURING THE SPRING MESSAGE BROKER.

@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {	

	
//THIS METHOD DEFINES AN STOMP ENDPOINT TO WHICH THE USER WILL BE ABLE TO CONNECT BEFORE ANYTHING ELSE.
//IN THIS CASE I'M USING STOMP MESSAGE PROTOCOL,
  @Override
  public void registerStompEndpoints(StompEndpointRegistry
   registry) {
	  registry.addEndpoint("/websocket").setAllowedOriginPatterns("*");

    
  }

  @Override
  public void configureMessageBroker(MessageBrokerRegistry config){ 
    config.enableSimpleBroker();
    config.setApplicationDestinationPrefixes("/app");
  }
  
 

  
  
}