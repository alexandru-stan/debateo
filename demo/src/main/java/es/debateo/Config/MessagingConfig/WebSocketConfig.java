package es.debateo.Config.MessagingConfig;

import org.hibernate.internal.build.AllowSysOut;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.Message;
import org.springframework.messaging.simp.config.ChannelRegistration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.messaging.simp.stomp.StompCommand;
import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
import org.springframework.messaging.support.ChannelInterceptor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

//IN THIS CLASS I'M CONFIGURING THE SPRING MESSAGE BROKER.

@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {

//THIS METHOD DEFINES AN STOMP ENDPOINT TO WHICH THE USER WILL BE ABLE TO CONNECT BEFORE ANYTHING ELSE.
//IN THIS CASE I'M USING STOMP MESSAGE PROTOCOL,
//  
	@Autowired
	UserConnections userConnections;

	@Override
	public void registerStompEndpoints(StompEndpointRegistry registry) {

		registry.addEndpoint("/websocket/{jwtToken}").setAllowedOriginPatterns("*");

	}

	@Override
	public void configureClientInboundChannel(ChannelRegistration registration) {

		registration.interceptors(new WebSocketConnectionInterceptor());

	}

	public class WebSocketConnectionInterceptor implements ChannelInterceptor {

		@Override
		public Message<?> preSend(Message<?> message, org.springframework.messaging.MessageChannel channel) {
			StompHeaderAccessor stompHeaderAccessor = StompHeaderAccessor.wrap(message);
			
			if (stompHeaderAccessor.getCommand() == StompCommand.SUBSCRIBE && stompHeaderAccessor.getDestination().contains("/onlineUsers")) {
				String username = stompHeaderAccessor.getNativeHeader("username").get(0);
				System.out.println(username);
            	if(!userConnections.getConnectedUsers().contains(username)) {
				userConnections.userHasConnected(username);

            	}
				
			} else if (stompHeaderAccessor.getDestination()!=null &&  stompHeaderAccessor.getDestination().contains("/disconnect") &&  stompHeaderAccessor.getCommand() == StompCommand.SEND) {
				
				
//				System.out.println(stompHeaderAccessor.getDestination().substring(16));
				userConnections.userHasDisconnected(stompHeaderAccessor.getDestination().substring(16));
				
			}
			
			
			
			
			
			

//			System.out.println(stompHeaderAccessor.getDestination());
			
//			if(stompHeaderAccessor.getDestination().equals("/onlineUsers")) {
//				stompHeaderAccessor.getMessageHeaders();
//			}
			
			
			
			return message;
		}
	}

	@Override
	public void configureMessageBroker(MessageBrokerRegistry config) {
		config.enableSimpleBroker();
		config.setApplicationDestinationPrefixes("/app");
	}

}