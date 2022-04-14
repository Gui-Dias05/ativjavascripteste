function login() {
  document.getElementById("login").innerHTML = document.getElementById("nome").value;
}

function preco(unidade) {
  var prodarroz = parseInt(document.getElementById("prodarroz").innerHTML);
  var prodfeijao = parseInt(document.getElementById("prodfeijao").innerHTML);
  var precoarroz = parseFloat(document.getElementById("precoarroz").innerHTML);
  var precofeijao = parseFloat(document.getElementById("precofeijao").innerHTML);

  switch (unidade) {
      case '+1':
          console.log('Mais unidades no produto 1');
          document.getElementById("prodarroz").innerHTML = ++prodarroz;
          document.getElementById("precoarroz").innerHTML = precoarroz + 6.00;

          break;

      case '+2':
          console.log('Mais unidades no produto 2');
          document.getElementById("prodfeijao").innerHTML = ++prodfeijao;
          document.getElementById("precofeijao").innerHTML = precofeijao + 7.00;

          break;
      case '-1':
          console.log('Menos unidades no produto 1');
          if (prodarroz > 1) {
              document.getElementById("prodarroz").innerHTML = --prodarroz;
              document.getElementById("precoarroz").innerHTML = precoarroz - 6.00;
          }
          break;
      case '-2':
          console.log('Menos unidades no produto 2');
          if (prodfeijao > 1) {
              document.getElementById("prodfeijao").innerHTML = --prodfeijao;
              document.getElementById("precofeijao").innerHTML = precofeijao - 7.00;
          }
          break;
  }
}

function remover(rem) {
  if (rem == 'a1') {
      let pai=document.getElementById("itema");
      let filho=document.getElementById("proda");

      pai.removeChild(filho);

      let para = document.createElement('p');
      para.setAttribute("id", "aviso");
      para.innerHTML = "Item removido com sucesso <hr>";
      pai.appendChild(para);
  }else{
      let pai=document.getElementById("itemb");
      let filho=document.getElementById("prodf");

      pai.removeChild(filho);

      let para = document.createElement('p');
      para.setAttribute("id", "aviso");
      para.innerHTML = "Item removido com sucesso<hr>";
      pai.appendChild(para);   
    }
 
 
    }

function finalizar() {
  document.location.reload(true);
}


