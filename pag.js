
var modal = document.getElementById("modalPagamento");


var btns = document.querySelectorAll(".b2");

var span = document.getElementsByClassName("close")[0];


btns.forEach(function(btn) {
    btn.onclick = function() {
        modal.style.display = "block";
    }
});


span.onclick = function() {
    modal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


const estoqueSpan = document.getElementById('estoque');
const comprarButton = document.querySelector('.b2');
const estoqueMsg = document.getElementById('estoque-msg'); 


function inicializarEstoque() {
  const estoqueArmazenado = localStorage.getItem('estoque'); 

  
  if (estoqueArmazenado === null || isNaN(estoqueArmazenado)) {
    localStorage.setItem('estoque', 10); 
    return 10; 
  }
  return parseInt(estoqueArmazenado, 10);
}


function atualizarEstoque(valor) {
  localStorage.setItem('estoque', valor); 
  estoqueSpan.textContent = valor; 
}


comprarButton.addEventListener('click', () => {
  if (estoque > 0) {
    estoque--; 
    atualizarEstoque(estoque);
    
    if (estoque <= 0) {
      comprarButton.disabled = true;
      comprarButton.textContent = "Esgotado";
      estoqueMsg.style.display = "block";
    }
  }
});


function renovarEstoque() {
  estoque = 2; 
  atualizarEstoque(estoque);

 
  comprarButton.disabled = false;
  comprarButton.textContent = "Comprar";
  estoqueMsg.style.display = "none"; 
}


let estoque = inicializarEstoque();
atualizarEstoque(estoque);


if (estoque <= 0) {
  comprarButton.disabled = true;
  comprarButton.textContent = "Esgotado";
  estoqueMsg.style.display = "block"; 
}


setTimeout(() => {
    renovarEstoque();
    console.log("Estoque renovado para 4.");
  }, 50000); 
  
