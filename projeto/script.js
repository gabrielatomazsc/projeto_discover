function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // O algoritmo a ser usado está abaixo mas de forma simplificada a função 'toggle' realiza a ação
  // if(html.classList.contains('light')){
  // html.classList.remove('light')
  // } else {
  // html.classList.add('light')

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // se tiver no ligth mode, substituir a imagem
  if(html.classList.contains('light')){
    img.setAttribute('src', '/projeto/assets/avatar-light.png')

    img.setAttribute("alt", "Foto de Perfil com fundo azul")

  } 
  
  // caso não manter a imagem
  else {
    img.setAttribute('src', '/projeto/assets/avatar.png')
  }
 }
