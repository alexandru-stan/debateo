package DTO;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;

public class ServiceResponse<T> {

	HttpStatus status;
	String mensaje;
	List<T> lista;
	Page<T> pagina;
	
	public ServiceResponse( Page<T> pagina,HttpStatus status) {
		super();
		this.status = status;
		this.pagina = pagina;
	}
	public Page<T> getPagina() {
		return pagina;
	}
	public void setPagina(Page<T> pagina) {
		this.pagina = pagina;
	}
	public ServiceResponse( List<T> lista,HttpStatus status) {
		super();
		this.status = status;
		this.lista = lista;
	}
	public List<T> getLista() {
		return lista;
	}
	public void setLista(List<T> lista) {
		this.lista = lista;
	}
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
