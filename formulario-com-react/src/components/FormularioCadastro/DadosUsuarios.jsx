import React, {useContext, useState} from 'react'
import { Button, TextField } from '@material-ui/core'
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro'
import useErros from '../../hooks/useErros'

const DadosUsuarios = ({aoEnviar})=> {

const [email, setEmail] = useState("")
const [senha, setSenha] = useState("")
const validacoes = useContext(ValidacoesCadastro)

const [erros, validarCampos, possoEnviar] = useErros(validacoes)




  const handleSubmit=(event) => {
      event.preventDefault();
      if(possoEnviar()){
        aoEnviar({email, senha});
      }
  }
  return (
    <form action="" onSubmit={handleSubmit}>
      <TextField  
        value={email}
        onChange={event=>{setEmail(event.target.value)}}
        id="email"
        name="email"
        label="email"
        type="email"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
          value={senha}
          onChange={event=>{setSenha(event.target.value)}}
          id="senha"
          type="password"
          required
          onBlur={validarCampos}
          error={!erros.senha.valido}
          helperText={erros.senha.texto}
          name="senha"
          label="senha"
          variant="outlined"
          margin="normal"
          fullWidth
      />

      <Button
          variant="contained"
          color="primary"
          type="submit"
      >
          Cadastrar
      </Button>
    </form>
  )
}

export default DadosUsuarios;