//criado a função para tocar o som e feito a busca da id do som
function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

if (elemento && elemento.localName ==='audio'){elemento.play();
}
else {console.log('Elemento não encontrado ou seletor inválido');}
}
//Constante das teclas com busca de todos os botões da classe
const listaDeTeclas = document.querySelectorAll('.tecla');

for(let contador = 0;contador < listaDeTeclas.length; contador++){
    const tecla = listaDeTeclas[contador]
    const efeito = tecla.classList[1];
    const idAudio = `#som_${efeito}`;
    tecla.onclick = function(){tocaSom(idAudio)}


tecla.onkeydown = function (evento){if(evento.code === 'Space' || evento.code === 'Enter') {
    tecla.classList.add('ativa');}}
tecla.onkeyup = function (){tecla.classList.remove('ativa');}
}