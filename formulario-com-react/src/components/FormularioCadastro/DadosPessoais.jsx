import React, { useState, useContext } from 'react'
import Button from '@material-ui/core/Button'
import { FormControlLabel, Switch, TextField } from '@material-ui/core';
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro';
import useErros from '../../hooks/useErros';


const DadosPessoais =({aoEnviar})=>{
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCPF] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(false);

    const validacoes= useContext(ValidacoesCadastro)

    const [erros, validarCampos, possoEnviar] = useErros(validacoes)

  

      

    const handleSubmit =(event)=> {
        event.preventDefault()
        if(possoEnviar()) {
            aoEnviar({nome, sobrenome, cpf, novidades, promocoes})
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                value={nome}
                id="nome" 
                label="Nome"
                name="nome"
                error={!erros.nome.valido}
                helpertext= {erros.nome.texto}
                onBlur={validarCampos}
                variant="outlined" 
                margin="normal" 
                fullWidth
                onChange={event=>setNome(event.target.value)}
            />

            <TextField
            
                value={sobrenome}
                id="SobreNome" 
                variant="outlined" 
                margin="normal" 
                label="SobreNome"
                name="sobreNome"
                fullWidth
                onChange={event=>setSobrenome(event.target.value)}

            />

            <TextField
                onBlur={validarCampos}
                value={cpf}
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                name="cpf"
                id="CPF"
                label="CPF"
                margin="normal"
                variant="outlined"
                fullWidth
                onChange={event=>setCPF(event.target.value)}
            />


            <FormControlLabel label="promoçoes" control={<Switch
                checked={promocoes}
                name="promocoes"
                color="primary"
                onChange={event=> setPromocoes(event.target.checked)}
                />} 
            />
            <FormControlLabel label="novidades" control={<Switch 
                checked={novidades}
                name="novidades"
                color="primary"
                onChange={event=> setNovidades(event.target.checked)}
                />}
            />
        
            <Button
                variant="contained"
                color="primary"
                type="submit"
            >
                proximo 
            </Button>
        </form>
    )
}
export default DadosPessoais;