package br.com.compasso.cidadeCliente.controller.form;

import java.sql.Date;

import br.com.compasso.cidadeCliente.model.Cidade;
import br.com.compasso.cidadeCliente.model.Cliente;
import br.com.compasso.cidadeCliente.repository.CidadeRepository;



public class ClienteForm {


	private String nome;
	private String sexo;
	private Date dataDeNascimento;
	private int idade;
	private String nomeCidade;
	
	
	
	public Cliente converter(CidadeRepository cidadeRepository) {
		Cidade cidade = cidadeRepository.findByNome(getNomeCidade());
		return new Cliente(nome, sexo, dataDeNascimento, idade, cidade);		
	}
	
	
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getSexo() {
		return sexo;
	}
	public void setSexo(String sexo) {
		this.sexo = sexo;
	}
	public Date getDataDeNascimento() {
		return dataDeNascimento;
	}
	public void setDataDeNascimento(Date dataDeNascimento) {
		this.dataDeNascimento = dataDeNascimento;
	}
	public int getIdade() {
		return idade;
	}
	public void setIdade(int idade) {
		this.idade = idade;
	}


	public String getNomeCidade() {
		return nomeCidade;
	}


	public void setNomeCidade(String nomeCidade) {
		this.nomeCidade = nomeCidade;
	}
	
	
	
}
