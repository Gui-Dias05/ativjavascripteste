function log(){
    document.getElementById("login").innerHTML = document.getElementById("nome").value;
  }

  function prod(acao) {
    var unidade1 = parseInt(document.getElementById("unidade1").innerHTML);
    var preco1 = parseFloat(document.getElementById("preco1").innerHTML);
    var unidade2 = parseInt(document.getElementById("unidade2").innerHTML);
    var preco2 = parseFloat(document.getElementById("preco2").innerHTML);

    switch(acao){
            case 'a1':
              document.getElementById("unidade1").innerHTML = unidade1 + 1;
              document.getElementById("preco1").innerHTML = preco1 + 6.00;
              break;
            case 'f1':
              document.getElementById("unidade1").innerHTML = unidade1 - 1;
              document.getElementById("preco1").innerHTML = preco1 - 6.00;

              break;
            case 'a2':
              document.getElementById("unidade2").innerHTML = unidade2 + 1;
              document.getElementById("preco2").innerHTML = preco2 + 7.50;
              break;
            case 'f2':
              document.getElementById("unidade2").innerHTML = ""+(unidade2 - 1);
              document.getElementById("preco2").innerHTML = preco2 - 7.50;
              break;
        }
  }

  function fim(){
    window.location.href = window.location.href;
  }