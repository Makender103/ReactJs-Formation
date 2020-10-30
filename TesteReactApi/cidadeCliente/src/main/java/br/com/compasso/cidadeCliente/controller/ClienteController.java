package br.com.compasso.cidadeCliente.controller;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.compasso.cidadeCliente.controller.form.AtualizarNomeForm;
import br.com.compasso.cidadeCliente.controller.form.ClienteForm;
import br.com.compasso.cidadeCliente.model.Cliente;
import br.com.compasso.cidadeCliente.repository.CidadeRepository;
import br.com.compasso.cidadeCliente.repository.ClienteRepository;

@RestController
@RequestMapping("/clientes")
public class ClienteController {

	@Autowired
	private ClienteRepository clienteRepository;

	@Autowired
	private CidadeRepository cidadeRepository;

	// Lista todos os clientes
	@GetMapping
	public List<Cliente> clientes() {
		return clienteRepository.findAll();
	}

	// Cadastra cliente
	@PostMapping
	@Transactional
	public Cliente cadastrarCliente(@RequestBody ClienteForm clienteForm) {
		Cliente cliente = clienteForm.converter(cidadeRepository);
		return clienteRepository.save(cliente);
	}

	// Busca clientes pelo id
	@GetMapping("{id}")
	public Optional<Cliente> clientePorId(@PathVariable Long id) {
		Optional<Cliente> cliente = clienteRepository.findById(id);
		return cliente;
	}

	// Busca cliente pelo nome
	@GetMapping("/nomes")
	public Cliente clientePorNome(@RequestParam String nome) {
		Cliente cliente = clienteRepository.findByNome(nome);
		return cliente;
	}

	// altera o nome do cliente
	@PatchMapping("/{id}/alterarNome")
	@Transactional
	public Cliente alterarNome(@PathVariable Long id, @RequestBody AtualizarNomeForm atualizaNomeForm) {
		 clienteRepository.updateNome(id, atualizaNomeForm.getNome());
		 return clienteRepository.findById(id).get();
	}

	@DeleteMapping("{id}")
	@Transactional
	public void removerCliente(@PathVariable Long id) {
		Optional<Cliente> cliente = clienteRepository.findById(id);
		if (cliente.isPresent()) {
			clienteRepository.deleteById(id);
		}
	}

}
