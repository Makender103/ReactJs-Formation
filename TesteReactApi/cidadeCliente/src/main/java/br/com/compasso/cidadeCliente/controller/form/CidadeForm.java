package br.com.compasso.cidadeCliente.controller.form;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

// Classe que faz a validação dos campos ao tentar inserir nova cidade
public class CidadeForm {
	
	@NotNull
	@NotEmpty
	@Size(min = 3, message = "Nome da Cidade deve ter pelo menos 3 caracteres")
	private String nome;
	
	@NotNull
	@NotEmpty
	@Size(min = 2, max = 2, message = "Informe a sigla do Estado (Ex.: SC")
	private String estado;

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getEstado() {
		return estado;
	}

	public void setEstado(String estado) {
		this.estado = estado;
	}
	
	
	
	

}
