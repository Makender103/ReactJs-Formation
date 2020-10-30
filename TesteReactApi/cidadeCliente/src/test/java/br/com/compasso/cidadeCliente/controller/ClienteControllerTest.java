package br.com.compasso.cidadeCliente.controller;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.deser.DataFormatReaders.Match;

import br.com.compasso.cidadeCliente.controller.form.AtualizarNomeForm;
import br.com.compasso.cidadeCliente.model.Cidade;
import br.com.compasso.cidadeCliente.model.Cliente;
import br.com.compasso.cidadeCliente.repository.CidadeRepository;
import br.com.compasso.cidadeCliente.repository.ClienteRepository;

import static org.mockito.Mockito.doReturn;
import static org.mockito.ArgumentMatchers.any;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import java.sql.Date;

import java.util.Optional;

import org.assertj.core.util.Lists;

import static org.hamcrest.Matchers.*;

@SpringBootTest
@AutoConfigureMockMvc
public class ClienteControllerTest {

	ObjectMapper objMapper;

	@MockBean
	private ClienteRepository clienteRepository;

	@MockBean
	private CidadeRepository cidadeRepository;

	@MockBean
	private AtualizarNomeForm atualizarNome;

	@Autowired
	private MockMvc mockMvc;

	Date data = new Date(1599999999999L);

	Cidade cidade1 = new Cidade("Cidade1", "UF1");
	Cidade cidade2 = new Cidade("Cidade2", "UF2");
	Cliente cliente1 = new Cliente("cliente1", "M", data, 10, cidade1);
	Cliente cliente2 = new Cliente("cliente2", "F", data, 20, cidade2);
	Cliente cliente3 = new Cliente("cliente3", "M", data, 30, cidade2);

	@Test
	@DisplayName("GET /clientes success")
	public void testGetClienteSuccess() throws Exception {

		doReturn(Lists.newArrayList(cliente1, cliente2, cliente3)).when(clienteRepository).findAll();

		mockMvc.perform(get("/clientes")).andExpect(content().contentType(MediaType.APPLICATION_JSON))
				.andExpect(jsonPath("$", hasSize(3))).andExpect(jsonPath("$[0].nome", is("cliente1")))
				.andExpect(jsonPath("$[0].sexo", is("M")))
				.andExpect(jsonPath("$[0].dataDeNascimento", is("2020-09-13")))
				.andExpect(jsonPath("$[0].idade", is(10)));
	}

	@Test
	@DisplayName("POST /clientes success")
	public void testPostClienteSucess() throws Exception {
		doReturn(cliente1).when(clienteRepository).save(cliente1);

		mockMvc.perform(post("/clientes").contentType(MediaType.APPLICATION_JSON).content(asJsonString(cliente1)))
				.andExpect(status().isOk()).andExpect(content().contentType(MediaType.APPLICATION_JSON))
				.andExpect(jsonPath("$.nome", is("cliente1"))).andExpect(jsonPath("$.sexo", is("M")))
				.andExpect(jsonPath("$.dataDeNascimento", is("2020-09-13"))).andExpect(jsonPath("$.idade", is(10)));
	}

	@Test
	@DisplayName("GET /clientes/{id} success")
	public void testGetClienteByIdSucess() throws Exception {
		doReturn(Optional.of(cliente1)).when(clienteRepository).findById(1L);

		mockMvc.perform(get("/clientes/{id}", 1L)).andExpect(status().isOk())
				.andExpect(content().contentType(MediaType.APPLICATION_JSON))
				.andExpect(jsonPath("$.nome", is("cliente1"))).andExpect(jsonPath("$.sexo", is("M")))
				.andExpect(jsonPath("$.dataDeNascimento", is("2020-09-13"))).andExpect(jsonPath("$.idade", is(10)));
	}

	@Test
	@DisplayName("GET /clientes/nomes?nome={nome} success")
	public void testGetClienteByNomeSucess() throws Exception {
		doReturn(cliente1).when(clienteRepository).findByNome("cliente1");

		mockMvc.perform(get("/clientes/nomes?nome={nome}", "cliente1")).andExpect(status().isOk())
				.andExpect(content().contentType(MediaType.APPLICATION_JSON))
				.andExpect(jsonPath("$.nome", is("cliente1"))).andExpect(jsonPath("$.sexo", is("M")))
				.andExpect(jsonPath("$.dataDeNascimento", is("2020-09-13"))).andExpect(jsonPath("$.idade", is(10)));
	}

	@Test
	@DisplayName("PATCH /clientes/{id}/alterarNome")
	void testPatchNomeClienteSuccess() throws Exception {
		Cliente clienteComNomeAlterado = new Cliente("cliente1NomeAlterado", "M", data, 10, cidade1);
		
		doReturn(Optional.of(cliente1)).when(clienteRepository).findById(1L);
		doReturn(1).when(clienteRepository).updateNome(1L, "Teste");
		doReturn(clienteComNomeAlterado).when(clienteRepository).save(any());
		
		
		
//		// Setup our mocked service
//        Widget widgetToPut = new Widget("New Widget", "This is my widget");
//        Widget widgetToReturnFindBy = new Widget(1L, "New Widget", "This is my widget", 2);
//        Widget widgetToReturnSave = new Widget(1L, "New Widget", "This is my widget", 3);
//        doReturn(Optional.of(widgetToReturnFindBy)).when(service).findById(1L);
//        doReturn(widgetToReturnSave).when(service).save(any());		
		

		
		mockMvc.perform(patch("/clientes/{id}/alterarNome", 1L)
				.contentType(MediaType.APPLICATION_JSON)
				.content(asJsonString(cliente1)))
		.andExpect(status().isOk())
		.andExpect(content()
				.contentType(MediaType.APPLICATION_JSON))
		.andExpect(jsonPath("$.nome", is("Teste")))
		.andExpect(jsonPath("$.sexo", is("M")))
		.andExpect(jsonPath("$.dataDeNascimento", is("2020-09-13")))
		.andExpect(jsonPath("$.idade", is(10)));
	}

	@Test
	@DisplayName("DELETE /clientes/{id} success")
	public void testDeleteClienteSuccess() throws Exception {
		this.mockMvc.perform(delete("/clientes/{id}", 1L).contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk());
	}

	static String asJsonString(final Object obj) {
		try {
			return new ObjectMapper().writeValueAsString(obj);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}

}
