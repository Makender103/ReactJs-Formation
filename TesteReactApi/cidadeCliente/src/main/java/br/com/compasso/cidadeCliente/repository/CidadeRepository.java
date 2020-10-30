package br.com.compasso.cidadeCliente.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.compasso.cidadeCliente.model.Cidade;

public interface CidadeRepository extends JpaRepository<Cidade, Long>{
	public Cidade findByNome(String nome);

	public List<Cidade> findByEstado(String estado);

	
}
