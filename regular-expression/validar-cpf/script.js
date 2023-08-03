import ValidarCPF from "./validar-cpf.js";


const cpf = document.querySelector('#cpf')
const validarCpf = new ValidarCPF(cpf)

console.log(validarCpf.formatar('111.111 223.55'))