package es.debateo.DTO;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;

import es.debateo.Model.Posts;

public class ServiceResponse<T> {

	HttpStatus status;
	List<T> lista;
	Page<T> pagina;
	T obj;
	
	
	
	
	
	
	public ServiceResponse( T obj,HttpStatus status) {
		super();
		this.status = status;
		this.obj = obj;
	}
	public ServiceResponse( Page<T> pagina,HttpStatus status) {
		super();
		this.status = status;
		this.pagina = pagina;
	}
	
	

	public T getObj() {
		return obj;
	}
	public void setObj(T obj) {
		this.obj = obj;
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
	
	
	public ServiceResponse(HttpStatus status) {
		super();
		this.status = status;
	}
	public ServiceResponse(Page<Posts> posts) {
		// TODO Auto-generated constructor stub
	}

	
	
	

}
