function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if(html.classList.contains('light')){
    img.setAttribute('src', 'projeto/assets/avatar-light.png')

    img.setAttribute("alt", "Foto de Perfil com fundo azul")

  } 
  
  else {
    img.setAttribute('src', 'projeto/assets/avatar.png')
  }
 }
