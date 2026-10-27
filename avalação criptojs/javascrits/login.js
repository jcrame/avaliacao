document.querySelector('.fa-eye').addEventListener('click', () => {
  const inputSenha = document.querySelector('#senha')
  inputSenha.type = inputSenha.type === 'password' ? 'text' : 'password'
})


document.querySelector('#senha').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') entrar()
})

function entrar() {
  const usuario = document.querySelector('#usuario')
  const userLabel = document.querySelector('#userLabel')
  const senha = document.querySelector('#senha')
  const senhaLabel = document.querySelector('#senhaLabel')
  
  const senhaCriptografada = CryptoJS.SHA512(senha.value).toString()
  const listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

  const userValid = listaUser.find(
    item => item.userCad === usuario.value.trim() && item.senhaCad === senhaCriptografada
  )

  if (userValid) {
    // Primeiro salva a sessao...
    const aleatorio = Math.random().toString(16).substring(2)
    localStorage.setItem('token', aleatorio + aleatorio)
    localStorage.setItem('userLogado', JSON.stringify({ nome: userValid.nomeCad, user: userValid.userCad }))

    window.location.href = 'index.html'
  } else {
    userLabel.setAttribute('style', 'color: red')
    usuario.setAttribute('style', 'border-color: red')
    senhaLabel.setAttribute('style', 'color: red')
    senha.setAttribute('style', 'border-color: red')
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = 'Usuário ou senha incorretos'
    usuario.focus()
  }
}
