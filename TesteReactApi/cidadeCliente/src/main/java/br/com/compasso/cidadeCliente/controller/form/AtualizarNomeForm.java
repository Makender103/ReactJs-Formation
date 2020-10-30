package br.com.compasso.cidadeCliente.controller.form;

import java.util.Optional;

import br.com.compasso.cidadeCliente.model.Cliente;
import br.com.compasso.cidadeCliente.repository.ClienteRepository;

public class AtualizarNomeForm {
	private String nome;

//	public Cliente atualizar(Long id, ClienteRepository clienteRepository) {
//		Optional<Cliente> cliente = clienteRepository.findById(id);
//		cliente.get().setNome(this.nome);
//		return cliente.get();
//	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

}
