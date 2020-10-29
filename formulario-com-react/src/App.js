import { Container, Typography } from "@material-ui/core";
import 'fontsource-roboto'
import './App.css';
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import {validarCPF, validarSenha} from './models/cadastro'

import ValidacoesCadastro from "./contexts/ValidacoesCadastro"

function App() {

  const aoEnviarForm=(dados)=> {
    console.table(dados)
  }

  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center"> Formulario de Cadastro </Typography>

      <ValidacoesCadastro.Provider 
        value={{cpf: validarCPF, senha: validarSenha, nome: validarSenha}}
      >
        <FormularioCadastro  aoEnviar={aoEnviarForm}/>
      </ValidacoesCadastro.Provider>

    </Container>
  );
}
export default App;
