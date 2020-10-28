import react, {useState} from 'react'
import { Button, TextField } from '@material-ui/core'

const DadosUsuarios = ({aoEnviar})=> {

const [email, setEmail] = useState("")
const [senha, setSenha] = useState("")



  const handleSubmit=(event) => {
      event.preventDefault();
      aoEnviar({email, senha});
  }
  return (
    <form action="" onSubmit={handleSubmit}>
      <TextField  
        value={email}
        onChange={event=>{setEmail(event.target.value)}}
        id="email"
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