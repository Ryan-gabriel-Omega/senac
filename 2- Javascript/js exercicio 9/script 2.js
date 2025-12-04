const botao = document.getElementById('btcentro')

botao.addEventListener('click', function() {
  const novaDiv = document.createElement('div')
  novaDiv.classList.add('caixa')

  novaDiv.innerHTML = `<h4>eu fui criada pelo botao da div principal</h4> `

  // adiciona a nova div no corpo da página
  document.body.appendChild(novaDiv);

});
