package br.com.compasso.cidadeCliente.controller;

import java.util.List;

import javax.transaction.Transactional;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.compasso.cidadeCliente.controller.form.CidadeForm;
import br.com.compasso.cidadeCliente.model.Cidade;
import br.com.compasso.cidadeCliente.repository.CidadeRepository;

@RestController
@RequestMapping("/cidades")
public class CidadeController {

	@Autowired
	private CidadeRepository repository;
	
	// Lista todas as cidade
	@GetMapping
	public List<Cidade> cidades() {
		return repository.findAll();
	}

	//Filtra cidade pelo nome
	@GetMapping("/{nome}")
	public Cidade cidadesPorNome(@PathVariable String nome) {
		return repository.findByNome(nome);
	}
	
	//Filtra cidades por estado
	@GetMapping("/estados/{estado}")
	public List<Cidade> cidadesPorEstado(@PathVariable String estado) {
		return repository.findByEstado(estado);
	}
	
	//Cadastra cidade
	@PostMapping
	@Transactional
	public Cidade cadastrarCidade(@RequestBody @Valid CidadeForm cidadeForm) {
		Cidade cidade = new Cidade(cidadeForm.getNome(), cidadeForm.getEstado());
		return repository.save(cidade);
	}

}
