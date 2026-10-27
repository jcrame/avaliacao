const token = localStorage.getItem('token')
const userLogado = JSON.parse(localStorage.getItem('userLogado') || 'null')

if (token === null || userLogado === null) {
  alert('Você precisa estar logado para acessar essa página')
  window.location.href = 'login.html'
} else {
  document.querySelector('#logado').innerHTML = 'Olá ' + userLogado.nome
}

function sair() {
  localStorage.removeItem('token')
  localStorage.removeItem('userLogado')
  window.location.href = 'login.html'
}
