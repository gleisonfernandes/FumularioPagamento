function verificarnome()
{
  var nomeValida = document.getElementById('nome').value;

  if(nomeValida.length > 0)
  {
    var cardNome = document.getElementById('group');
    cardNome.style.marginTop= "0px";
    cardNome.style.color = "#ffffff";
    cardNome.style.width= "95%";
    cardNome.style.animation = "none";
    cardNome.style.background = "none";
    cardNome.style.backgroundSize = "none";
    document.getElementById('card-nome').innerHTML = document.getElementById('nome').value;
    
  }else{
    document.getElementById('card-nome').innerHTML = "";
    var cardNome = document.getElementById('group');
    cardNome.style.height= "22px";
    cardNome.style.marginTop= "0px";
    cardNome.style.marginBottom= "5px";
    cardNome.style.color="#eff1f3";
    cardNome.style.borderRadius = "8px";
    cardNome.style.width= "80%";
    cardNome.style.animation = "shimmer-animation 2s infinite";
    cardNome.style.background = "linear-gradient(to right, #eff1f3 4%, #e2e2e2 25%, #eff1f3 36%)";
    cardNome.style.backgroundSize = "1000px 100%";
    
  }
}

verificarnome();

function verificarnumero()
{
  var numeroValida = document.getElementById('numero').value;

  if(numeroValida.length > 0)
  {
    if(numeroValida[0]==4){
      document.getElementById('card-bandeira').innerHTML = "<img src='img/logo-visa1.png' style='width:52px;'>";
      var cardBandeira = document.getElementById('card-bandeira');
      cardBandeira.style.color = "#a6afb6"
      cardBandeira.style.animation = "none";
      cardBandeira.style.background = "none";
      cardBandeira.style.backgroundSize = "none";

      var card = document.getElementById('card');
      card.style.background = "linear-gradient(25deg,#0f509e,#1399cd)";

    }else if(((numeroValida[0] + numeroValida[1]) == 23) || ((numeroValida[0] + numeroValida[1]) == 51) || ((numeroValida[0] + numeroValida[1]) == 52) || ((numeroValida[0] + numeroValida[1]) == 53) || ((numeroValida[0] + numeroValida[1]) == 54) || ((numeroValida[0] + numeroValida[1]) == 55)){
      document.getElementById('card-bandeira').innerHTML = "<img src='img/mc-logo-52.svg'>";
      var cardBandeira = document.getElementById('card-bandeira');
      cardBandeira.style.color = "#a6afb6"
      cardBandeira.style.animation = "none";
      cardBandeira.style.background = "none";
      cardBandeira.style.backgroundSize = "none";

      var card = document.getElementById('card');
      card.style.background = "linear-gradient(25deg,#982ec5,#982ec6)";

    }else if(((numeroValida[0] + numeroValida[1]) == 50) || ((numeroValida[0] + numeroValida[1]) == 56) || ((numeroValida[0] + numeroValida[1]) == 57) || ((numeroValida[0] + numeroValida[1]) == 58) || ((numeroValida[0] + numeroValida[1]) == 59)){
      document.getElementById('card-bandeira').innerHTML = "<img src='img/logo-maestro.png' style='width:52px;'>";
      var cardBandeira = document.getElementById('card-bandeira');
      cardBandeira.style.color = "#a6afb6"
      cardBandeira.style.animation = "none";
      cardBandeira.style.background = "none";
      cardBandeira.style.backgroundSize = "none";
      var card = document.getElementById('card');
      card.style.background = "linear-gradient(25deg,#6070be,#6eabfc)";

    }else if(((numeroValida[0] + numeroValida[1]) == 34) || ((numeroValida[0] + numeroValida[1]) == 37)){
      document.getElementById('card-bandeira').innerHTML = "<img src='img/logo-americanexpress.svg' style='width:52px; height:32px'>";
      var cardBandeira = document.getElementById('card-bandeira');
      cardBandeira.style.color = "#a6afb6"
      cardBandeira.style.animation = "none";
      cardBandeira.style.background = "none";
      cardBandeira.style.backgroundSize = "none";
      
      var card = document.getElementById('card');
      card.style.background = "linear-gradient(25deg,#a2a2a2,#d0d0d0)";

    }else if(((numeroValida[0] + numeroValida[1]) == 36) || ((numeroValida[0] + numeroValida[1]) == 38)){
      document.getElementById('card-bandeira').innerHTML = "<img src='img/logo-disnersClub.svg' style='width:52px;'>";
      var cardBandeira = document.getElementById('card-bandeira');
      cardBandeira.style.color = "#a6afb6"
      cardBandeira.style.animation = "none";
      cardBandeira.style.background = "none";
      cardBandeira.style.backgroundSize = "none";

      var card = document.getElementById('card');
      card.style.background = "linear-gradient(25deg,#aebaba,#c2cacd)";

    }else if(((numeroValida[0] + numeroValida[1] + numeroValida[2] + numeroValida[3]) == 6011) || ((numeroValida[0] + numeroValida[1]) == 65)){
      document.getElementById('card-bandeira').innerHTML = "<img src='img/discover-logo.png' style='width:52px;'>";
      var cardBandeira = document.getElementById('card-bandeira');
      cardBandeira.style.color = "#a6afb6"
      cardBandeira.style.animation = "none";
      cardBandeira.style.background = "none";
      cardBandeira.style.backgroundSize = "none";

      var card = document.getElementById('card');
      card.style.background = "linear-gradient(25deg,#3788ac,#85c6dc)";

    }else if(((numeroValida[0] + numeroValida[1]) == 60)){
      document.getElementById('card-bandeira').innerHTML = "<img src='img/logo-hipercard.svg' style='width:52px;'>";
      var cardBandeira = document.getElementById('card-bandeira');
      cardBandeira.style.color = "#a6afb6"
      cardBandeira.style.animation = "none";
      cardBandeira.style.background = "none";
      cardBandeira.style.backgroundSize = "none";

      var card = document.getElementById('card');
      card.style.background = "linear-gradient(25deg,#8b181b,#de1f27)";

    }else if(((numeroValida[0] + numeroValida[1]) == 35)){
      document.getElementById('card-bandeira').innerHTML = "<img src='img/jcb-logo.png' style='width:42px;'>";
      var cardBandeira = document.getElementById('card-bandeira');
      cardBandeira.style.color = "#a6afb6"
      cardBandeira.style.animation = "none";
      cardBandeira.style.background = "none";
      cardBandeira.style.backgroundSize = "none";
    }

    var cardNumber = document.getElementById('card-number');
    cardNumber.style.color = "#ffffff"
    cardNumber.style.animation = "none";
    cardNumber.style.background = "none";
    cardNumber.style.backgroundSize = "none";
    document.getElementById('card-number').innerHTML = document.getElementById('numero').value;

  }else{
    document.getElementById('card-bandeira').innerHTML = "";
    var cardBandeira = document.getElementById('card-bandeira');
    cardBandeira.style.height= "22px";
    cardBandeira.style.marginTop= "0px";
    cardBandeira.style.marginBottom= "5px";
    cardBandeira.style.color="#eff1f3"
    cardBandeira.style.borderRadius = "8px";
    cardBandeira.style.width= "17%";
    cardBandeira.style.animation = "shimmer-animation 2s infinite";
    cardBandeira.style.background = "linear-gradient(to right, #eff1f3 4%, #e2e2e2 25%, #eff1f3 36%)";
    cardBandeira.style.backgroundSize = "1000px 100%";


    document.getElementById('card-number').innerHTML = "";
    var cardNumber = document.getElementById('card-number');
    cardNumber.style.height= "22px";
    cardNumber.style.marginTop= "5px";
    cardNumber.style.marginBottom= "5px";
    cardNumber.style.color="#eff1f3"
    cardNumber.style.borderRadius = "8px";
    cardNumber.style.width= "100%";
    cardNumber.style.animation = "shimmer-animation 2s infinite";
    cardNumber.style.background = "linear-gradient(to right, #eff1f3 4%, #e2e2e2 25%, #eff1f3 36%)";
    cardNumber.style.backgroundSize = "1000px 100%";

    var card = document.getElementById('card');
    card.style.background = "linear-gradient(25deg,#939393,#717171)";

  }
}

verificarnumero();

function verificarvalidade()
{
  var validadeCard = document.getElementById('validade').value;

  if(validadeCard.length > 0)
  {
    
    var validThru = document.getElementById('validThru');
    validThru.style.color = "#ffffff"
    validThru.style.animation = "none";
    validThru.style.background = "none";
    validThru.style.backgroundSize = "none";
    document.getElementById('validThru').innerHTML = document.getElementById('validade').value;
     
  }else{
    document.getElementById('validThru').innerHTML = "";
    var validThru = document.getElementById('validThru');
    validThru.style.height= "22px";
    validThru.style.marginBottom= "5px";
    validThru.style.color="#eff1f3"
    validThru.style.borderRadius = "8px";
    validThru.style.width= "100%";
    validThru.style.animation = "shimmer-animation 2s infinite";
    validThru.style.background = "linear-gradient(to right, #eff1f3 4%, #e2e2e2 25%, #eff1f3 36%)";
    validThru.style.backgroundSize = "1000px 100%";

  }
}

verificarvalidade();

function criarMascara(mascaraInput) {
  const maximoInput = document.getElementById(`${mascaraInput}`).maxLength;
  let valorInput = document.getElementById(`${mascaraInput}`).value;
  let valorSemPonto = document.getElementById(`${mascaraInput}`).value.replace(/([^0-9])+/g, "");
  const mascaras = {
    numero: valorInput.replace(/[^\d]/g, "").replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, "$1 $2 $3 $4"),
    validade: valorInput.replace(/[^\d]/g, "").replace(/(\d{2})(\d{2})/, "$1/$2"),
    cpf: valorInput.replace(/[^\d]/g, "").replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4"),
  };

  valorInput.length === maximoInput ? document.getElementById(`${mascaraInput}`).value = mascaras[mascaraInput]
 : document.getElementById(`${mascaraInput}`).value = valorSemPonto;
}