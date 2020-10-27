import { deletaCliente, listarClientes} from '../../api/cliente.js'
import "../../assets/css/clientes.css"
import inicializaCadastro from '../cadastro/componente-cadastro.js'


const removeCliente = (id) => {
  if(confirm("Deseja deletar o cliente ?")){
    deletaCliente(id)
    window.location.reload()
  }
}

const criarCorpoTabela = (tabela)=> {
const corpoTabela = document.createElement('tbody')

const exibeCliente = (cpf, nome, id) => {
  const linha = document.createElement('tr');

  const conteudoLinha = `
  <td>${cpf}</td>
  <td>${nome}</td>
  <button type="button" class="btn btn-danger" onclick="removeCliente(${id})">Excluir</button>
  <a href="edita-clientes.html?id=${id}">
  <button type=""button class="btn btn-info">Editar</button>
  </a>
`
  linha.innerHTML = conteudoLinha;
  return linha;
};

listarClientes().then( exibe => {
  exibe.forEach(indice => {
    corpoTabela.appendChild(exibeCliente(indice.cpf, indice.nome, indice.id))
  })
 }

 )
 tabela.appendChild(corpoTabela)

}

const inicializaTabela =()=> {
  const cabecalho = `
  <thead class="thead-dark">
    <tr>
      <th scope="col">CPF</th>
      <th scope="col">Nome</th>
      <th scope="col"></th>
      <th scope="col"><a class="btn btn-primary" onclick="navegacao('/cadastro'); return false;">Novo Cliente</a>
      </th> 
    </tr>
  </thead>
`

const tabela = document.createElement("table")
tabela.innerHTML = cabecalho
tabela.classList.add("table")

criarCorpoTabela(tabela)

return tabela
}

export default inicializaTabela



  

  