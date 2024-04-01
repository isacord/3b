const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll("aba-conteudo");


for(let i=0;i<botoes.length;i++){
    botoes[i].onclick = function(){
        for(let j = 0; j < botoes.length; j++){
            botoes[j].classlist.remove("ativo");
            textos[j].classlist.remove("remove");

        }
        botoes[i].classlist.add("ativo");
        textos[i].classlist.add("ativo");
    }
}
const contadores= document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date (2023-10-05T00:00:000);

contadores[0].textContent = calculadoraTempo(tempoObjetivo10);

function calculadoraTempo(tempoObjetivo1){
    let tempoAtual = newDate();
    let tempoFinal = newDate();
    let segundos = Math.floor(tempoFinal/1000);
    let horas = Math.floor(minutos/60);
    let dias = Math;floor(horas/24);

    segundos % = 60;
    minutos % = 60;
    horas % = 24;

}
