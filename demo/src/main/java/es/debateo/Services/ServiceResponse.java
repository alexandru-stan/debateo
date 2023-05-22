package es.debateo.Services;

import org.springframework.http.HttpStatus;

public class ServiceResponse {

	HttpStatus status;
	String mensaje;
	public HttpStatus getStatus() {
		return status;
	}
	public void setStatus(HttpStatus status) {
		this.status = status;
	}
	public String getMensaje() {
		return mensaje;
	}
	public void setMensaje(String mensaje) {
		this.mensaje = mensaje;
	}
	public ServiceResponse(String mensaje,HttpStatus status) {
		super();
		this.status = status;
		this.mensaje = mensaje;
	}
	public ServiceResponse(String mensaje) {
		super();
		this.mensaje = mensaje;
	}
	public ServiceResponse(HttpStatus status) {
		super();
		this.status = status;
	}

	
	
	
	
	
}
