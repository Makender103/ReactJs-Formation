
const validarCPF=(cpf)=> {
  if (cpf.length  !==11) {
    return {valido: false, texto: "cpf deve ter 11 digitos"}
  }else {
    return {valido: true, texto: ""}
  }
}


const validarSenha=(senha)=> {
  if (senha.length <4 || senha.length > 72) {
    return {valido: false, texto: "Senha invalida deve ter 4 e 72 digitos"}
  }else {
    return {valido: true, texto: ""}
  }
}

export {validarCPF, validarSenha}