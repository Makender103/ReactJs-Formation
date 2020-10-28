import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import { FormControlLabel, Switch, TextField } from '@material-ui/core';

const DadosPessoais =({aoEnviar, validarCPF})=>{
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [CPF, setCPF] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(false);

    const [erros, setErros] = useState({cpf: {valido: true, texto: ""}})

    const handleErro=(event)=>{
        const ehvalido = validarCPF(CPF)
        setErros({cpf: ehvalido})
    }

    const handleSubmit =(event)=> {
        event.preventDefault()
        aoEnviar({nome, sobrenome, CPF, novidades, promocoes})
    }
    return (
        <form onSubmit={handleSubmit}>
            <TextField
                value={nome}
                id="nome" 
                label="Nome" 
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
                fullWidth
                onChange={event=>setSobrenome(event.target.value)}

            />

            <TextField
                onBlur={handleErro}
                value={CPF}
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
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
                Sign Up
            </Button>
        </form>
    )
}
export default DadosPessoais;