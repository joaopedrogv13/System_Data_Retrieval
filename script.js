function carregar() {
  //seleçao das dos elementos que serao utilizados
  var msg = window.document.getElementById("mensagem");
  var img = window.document.getElementById("imagem");

  //funcao para conseguir hora
  var data = new Date();
  var hora = 22; //data.getHours();
  var minutos = data.getMinutes();

  //alteracao dos elemntos
  msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos.`;

  //qual mensagem será passada
  //BOM DIA
  if (hora >= 4 && hora < 12) {
    img.src = "Images/pexels-marcio-costa-16402090.jpg";
    document.body.style.backgroundImage = 'url("Images/pexels-marcio-costa-16402090.jpg")';

    //BOA TARDE
  } else if (hora >= 12 && hora < 18) {
    img.src = "Images/pexels-anderson-martins-2386144.jpg";
    document.body.style.backgroundImage = 'url("Images/pexels-anderson-martins-2386144.jpg")';


    //BOA NOITE
  } else {
    img.src = "Images/pexels-piccinng-3052361.jpg";
    document.body.style.backgroundImage = 'url("Images/pexels-piccinng-3052361.jpg")';

  }
}
