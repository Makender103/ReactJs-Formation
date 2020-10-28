import React, { useEffect, useState } from 'react'
import DadosEntrega from './DadosEntrega';
import DadosPessoais from './DadosPessoais';
import DadosUsuarios from './DadosUsuarios';


const FormularioCadastro =({aoEnviar, validarCPF})=>{

  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dadosColetados, setDadoColetados] = useState({})

  useEffect(() => {
    console.log(dadosColetados)

  })

  const formularios =[
    <DadosUsuarios aoEnviar={coletarDados}/>,
    <DadosPessoais aoEnviar={coletarDados} validarCPF={validarCPF}/>,
    <DadosEntrega aoEnviar={coletarDados} />
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
      {formularios[etapaAtual]}
    </>
  )
}
export default FormularioCadastro;