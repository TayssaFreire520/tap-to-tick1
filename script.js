const rodadas = [
  {
    frase: ["O", "gato", "dorme", "no", "sofá."],
    alvo: "gato",
  },
  {
    frase: ["A", "menina", "pegou", "a", "bola."],
    alvo: "bola",
  },
  {
    frase: ["O", "cachorro", "corre", "no", "parque."],
    alvo: "corre",
  },
  {
    frase: ["A", "flor", "amarela", "é", "bonita."],
    alvo: "amarela",
  },
];

let rodadaAtual = 0;
let acertou = false;

const fraseElemento = document.getElementById("frase");
const instrucao = document.getElementById("instrucao");
const mensagem = document.getElementById("mensagem");
const pontuacao = document.getElementById("pontuacao");
const botaoProximo = document.getElementById("proximo");

function mostrarRodada() {
  const rodada = rodadas[rodadaAtual];

  fraseElemento.replaceChildren();
  mensagem.textContent = "";
  botaoProximo.hidden = true;
  acertou = false;

  instrucao.innerHTML = "Toque na palavra: <strong></strong>";

  instrucao.querySelector("strong").textContent = rodada.alvo;

  pontuacao.textContent = `Rodada ${rodadaAtual + 1} de ${rodadas.length}`;

  rodada.frase.forEach(function (palavra) {
    const botao = document.createElement("button");

    botao.className = "palavra";
    botao.textContent = palavra;

    botao.addEventListener("click", function () {
      if (acertou) return;

      if (palavra === rodada.alvo) {
        mensagem.textContent = "Muito bem! Você acertou!";
        botao.classList.add("correta");
        acertou = true;
        botaoProximo.hidden = false;
      } else {
        mensagem.textContent = "Essa não é a palavra. Tente novamente!";
      }
    });

    fraseElemento.appendChild(botao);
  });
}

botaoProximo.addEventListener("click", function () {
  rodadaAtual++;

  if (rodadaAtual >= rodadas.length) {
    instrucao.textContent = "Você terminou o jogo!";
    fraseElemento.replaceChildren();
    mensagem.textContent = "Parabéns por completar todas as rodadas!";
    pontuacao.textContent = `Você completou ${rodadas.length} rodadas.`;
    botaoProximo.hidden = true;
    return;
  }

  mostrarRodada();
});

mostrarRodada();
