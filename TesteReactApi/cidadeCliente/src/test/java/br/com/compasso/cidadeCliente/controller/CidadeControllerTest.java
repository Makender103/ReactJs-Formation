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

import br.com.compasso.cidadeCliente.model.Cidade;
import br.com.compasso.cidadeCliente.repository.CidadeRepository;

import static org.mockito.Mockito.doReturn;
import static org.mockito.ArgumentMatchers.any;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import java.util.Optional;

import org.assertj.core.util.Lists;

import static org.hamcrest.Matchers.*;

@SpringBootTest
@AutoConfigureMockMvc
public class CidadeControllerTest {

	@MockBean
	private CidadeRepository repository;

	@Autowired
	private MockMvc mockMvc;

	@Test
	@DisplayName("GET /cidades success")
	public void testGetCidadesSucess() throws Exception {
		Cidade cidade1 = new Cidade("Cidade1", "UF1");
		Cidade cidade2 = new Cidade("Cidade2", "UF2");

		doReturn(Lists.newArrayList(cidade1, cidade2)).when(repository).findAll();

		mockMvc.perform(get("/cidades")).andExpect(status().isOk())
				.andExpect(content().contentType(MediaType.APPLICATION_JSON))
				.andExpect(jsonPath("$", hasSize(2)))
				.andExpect(jsonPath("$[0].nome", is("Cidade1")))
				.andExpect(jsonPath("$[0].estado", is("UF1")))
				.andExpect(jsonPath("$[1].nome", is("Cidade2")))
				.andExpect(jsonPath("$[1].estado", is("UF2")));
	}

	@Test
	@DisplayName("GET /cidades/{nome} success")
	public void testGetCidadeByNomeSucess() throws Exception {
		Cidade cidade1 = new Cidade("Cidade1", "UF1");
//		Cidade cidade2 = new Cidade("Cidade2", "UF2");

		doReturn(cidade1).when(repository).findByNome("Cidade1");

		mockMvc.perform(get("/cidades/{nome}", "Cidade1")).andExpect(status().isOk())
				.andExpect(content().contentType(MediaType.APPLICATION_JSON))
				.andExpect(jsonPath("$.nome", is("Cidade1"))).andExpect(jsonPath("$.estado", is("UF1")));
	}

	@Test
	@DisplayName("GET /cidades/estados/{estado} success")
	public void testGetCidadeByEstadoSucess() throws Exception {
		Cidade cidade1 = new Cidade("Cidade1", "UF1");
		Cidade cidade2 = new Cidade("Cidade2", "UF2");
		Cidade cidade3 = new Cidade("Cidade3", "UF1");
		Cidade cidade4 = new Cidade("Cidade4", "UF2");

		doReturn(Lists.newArrayList(cidade1, cidade3)).when(repository).findByEstado("UF1");

		mockMvc.perform(get("/cidades/estados/{estado}", "UF1")).andExpect(status().isOk())
				.andExpect(content().contentType(MediaType.APPLICATION_JSON)).andExpect(jsonPath("$", hasSize(2)))
				.andExpect(jsonPath("$[0].nome", is("Cidade1"))).andExpect(jsonPath("$[0].estado", is("UF1")))
				.andExpect(jsonPath("$[1].nome", is("Cidade3"))).andExpect(jsonPath("$[1].estado", is("UF1")));
	}

	@Test
	@DisplayName("POST /cidades success")
	public void testPostCidadeSucess() throws Exception {
		Cidade novaCidade = new Cidade("Cidade1", "UF1");

		doReturn(novaCidade).when(repository).save(novaCidade);

		mockMvc.perform(post("/cidades")
				.contentType(MediaType.APPLICATION_JSON)
				.content(asJsonString(novaCidade)))
				.andExpect(status().isOk())
				.andExpect(content()
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(jsonPath("$.nome", is("Cidade1")))
				.andExpect(jsonPath("$.estado", is("UF1")));
	}

	
	
	static String asJsonString(final Object obj) {
		try {
			return new ObjectMapper().writeValueAsString(obj);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}

}
