package br.com.compasso.cidadeCliente.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import br.com.compasso.cidadeCliente.model.Cliente;

public interface ClienteRepository extends JpaRepository<Cliente, Long>{

	Cliente findByNome(String nome);
	
	@Modifying
	@Query("UPDATE Cliente c set c.nome = :nome where c.id = :id")
	int updateNome(@Param(value = "id") Long id, @Param(value = "nome") String nome);
	
	

}
