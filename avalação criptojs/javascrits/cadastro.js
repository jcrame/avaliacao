const usuario = document.querySelector('#usuario')
const labelUsuario = document.querySelector('#labelUsuario')
const senha = document.querySelector('#senha')
const labelSenha = document.querySelector('#labelSenha')

let validUsuario = false
let validSenha = false

const senhaCriptografiada = CriptoJS.SHA512(senha.value).toString()

listaUser.push({
    userCad : usuario.value.trim(),
    senhaCad : senhaCriptografiada
})

localStore.setItem('listaUser',JSON.Stringify(listaUser))
magSucess