import react, { useState } from 'react'
import { Button, TextField } from '@material-ui/core'

const DadosEntrega = ({aoEnviar})=> {

  const [cep, setCep] =useState("")
  const [endereco, setEndereco] =useState("")
  const [numero, setNumero] =useState("")
  const [estado, setEstado] =useState("")
  const [cidade, setCidade] =useState("")

function handleSubmit(event) {
  event.preventDefault();
  aoEnviar({ cep, endereco, numero, estado, cidade });
}

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        value={cep}
        onChange={event=>{setCep(event.target.value)}}
        id="CEP"
        label="CEP  "
        type="number"
        variant="outlined"
        margin="normal"
      />
      <TextField
        value={endereco}
        onChange={event=>{setEndereco(event.target.value)}}
        id="endereco"
        type="text"
        label="endereco"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <TextField
       value={numero}
       onChange={event=>{setNumero(event.target.value)}}
        id="numero"
        type="number"
        label="numero"
        variant="outlined"
        margin="normal"
      />

      <TextField
        value={estado}
        onChange={event=>{setEstado(event.target.value)}}
        id="estado"
        type="text"
        label="Estado"
        variant="outlined"
        margin="normal"
      />

      <TextField
        value={cidade}
        onChange={event=>{setCidade(event.target.value)}}
        id="cidade"
        type="text"
        label="Cidade"
        variant="outlined"
        margin="normal"
      />


      <Button
        variant="contained"
        color="primary"
        type="submit"
        fullWidth
      >
        Finalizar Cadastrar
      </Button>
    </form>
  )
}

export default DadosEntrega;