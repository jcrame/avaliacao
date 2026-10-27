const usuario = document.querySelector('#usuario')
const labelUsuario = document.querySelector('#labelUsuario')
const senha = document.querySelector('#senha')
const labelSenha = document.querySelector('#labelSenha')


  const senhaCriptografada = CryptoJS.SHA512(senha.value).toString()

  listaUser.push({
    userCad: usuario.value.trim(),
    senhaCad: senhaCriptografada
  })

  localStorage.setItem('listaUser', JSON.stringify(listaUser))

  msgSuccess.setAttribute('style', 'display: block')
  msgSuccess.innerHTML = '<strong>Cadastrando usuário...</strong>'
  msgError.setAttribute('style', 'display: none')
  msgError.innerHTML = ''

  setTimeout(() => { window.location.href = 'login.html' }, 2000)
}

// ---------- Mostrar/ocultar senha (icone do olho) ----------
function alternarVisibilidade(icone, input) {
  icone.addEventListener('click', () => {
    input.type = input.type === 'password' ? 'text' : 'password'
  })
}
alternarVisibilidade(document.querySelector('#verSenha'), senha)
