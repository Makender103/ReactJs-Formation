import {Cliente} from './Cliente.js'
import {Gerente} from './Funcionario/Gerente.js'
import {Diretor} from './Funcionario/Diretor.js'
import {SistemaAutenticacao} from "./SistemaAutenticacao.js"

const diretor = new Diretor("rodrigo", 1000, 11111111);
diretor.cadastrarSenha("123456789")

const gerente = new Gerente("ricardo", 1000, 11111111);
gerente.cadastrarSenha("123");

const cliente = new Cliente("Lais", 78945612379, "456");


const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456789");

console.log(gerenteEstaLogado, diretorEstaLogado)

const clienteEstaLogado =  SistemaAutenticacao.login(cliente, "456");


console.log(clienteEstaLogado);
