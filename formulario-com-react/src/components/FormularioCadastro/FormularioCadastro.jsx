import { Step, StepLabel, Stepper, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import DadosEntrega from './DadosEntrega';
import DadosPessoais from './DadosPessoais';
import DadosUsuarios from './DadosUsuarios';


const FormularioCadastro =({aoEnviar})=>{

  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dadosColetados, setDadoColetados] = useState({})

  useEffect(() => {
    if(etapaAtual === formularios.length-1){
      aoEnviar(dadosColetados)
    }

  })

  const formularios =[
    <DadosUsuarios aoEnviar={coletarDados} />,
    <DadosPessoais aoEnviar={coletarDados}/>,
    <DadosEntrega aoEnviar={coletarDados} />,
    <Typography variant="h5">Obrigado pelo cadastro ! </Typography>
  ];

  function coletarDados(dados) {
    setDadoColetados({...dadosColetados, ...dados})
    proximo();
  }
  function proximo() {
    setEtapaAtual(etapaAtual+1)
  }

  return (
    <>
    <Stepper activeStep={etapaAtual}>
      <Step><StepLabel>Login</StepLabel></Step>
      <Step><StepLabel>Pessoal</StepLabel></Step>
      <Step><StepLabel>Entrega</StepLabel></Step>
      <Step><StepLabel>Finalizaçao</StepLabel></Step>


    </Stepper>
      {formularios[etapaAtual]}
    </>
  )
}
export default FormularioCadastro;