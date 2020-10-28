import { Container, Typography } from "@material-ui/core";
import 'fontsource-roboto'
import './App.css';

import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";

function App() {

  const aoEnviarForm=(dados)=> {
    console.table(dados)
  }

  const validarCPF=(cpf)=> {
    if (cpf.length  !==11) {
      return {valido: false, texto: "cpf deve ter 11 digitos"}
    }else {
      return {valido: true, texto: ""}
    }
  }
  
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center"> Formulario de Cadastro </Typography>
      <FormularioCadastro  aoEnviar={aoEnviarForm} validarCPF={validarCPF}/>
    </Container>
  );
}



export default App;
