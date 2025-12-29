const paginas = document.getElementsByClassName("pagina");
const bolinhas = document.getElementsByClassName("bolinha");
const btnPrev = document.getElementById("prev");
const btnNext = document.getElementById("next");
let indice = 0;

function mostrarPagina(i) {
  for (let p = 0; p < paginas.length; p++) {
    paginas[p].classList.remove("ativa");
    paginas[p].style.animation = ""; // limpa animação anterior
  }
  paginas[i].classList.add("ativa");
  paginas[i].style.animation = "aparecerPagina 0.8s ease-out forwards";
}


function atualizarBolinhas(i) {
  for (let b = 0; b < bolinhas.length; b++) {
    bolinhas[b].classList.remove("ativa");
  }
  bolinhas[i].classList.add("ativa");
}

function proximaPagina() {
  if (indice < paginas.length - 1) {
    indice++;
    mostrarPagina(indice);
    atualizarBolinhas(indice);
  }
}

function paginaAnterior() {
  if (indice > 0) {
    indice--;
    mostrarPagina(indice);
    atualizarBolinhas(indice);
  }
}

btnNext.addEventListener("click", proximaPagina);
btnPrev.addEventListener("click", paginaAnterior);

for (let b = 0; b < bolinhas.length; b++) {
  bolinhas[b].addEventListener("click", (e) => {
    const i = parseInt(e.target.dataset.index, 10);
    indice = i;
    mostrarPagina(indice);
    atualizarBolinhas(indice);
  });
}
