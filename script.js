// script.js
document.addEventListener('DOMContentLoaded', function() {
  const botaoAcess = document.getElementById('botao-acessibilidade');
  const opcoesAcess = document.getElementById('opcoes-acessibilidade');
  const aumentaFonte = document.getElementById('aumentar-fonte');
  const diminuiFonte = document.getElementById('diminuir-fonte');
  const alternaContraste = document.getElementById('alterna-contraste');

  let tamanhoFonte = 1;

  botaoAcess.addEventListener('click', function() {
    opcoesAcess.classList.toggle('apresenta-lista');
    const expanded = botaoAcess.getAttribute('aria-expanded') === 'true';
    botaoAcess.setAttribute('aria-expanded', !expanded);
  });

  aumentaFonte.addEventListener('click', function() {
    tamanhoFonte += 0.1;
    document.body.style.fontSize = `${tamanhoFonte}rem`;
  });

  diminuiFonte.addEventListener('click', function() {
    tamanhoFonte = Math.max(0.5, tamanhoFonte - 0.1);
    document.body.style.fontSize = `${tamanhoFonte}rem`;
  });

  alternaContraste.addEventListener('click', function() {
    document.body.classList.toggle('alto-contraste');
  });

  // Quiz Carrossel
  const perguntas = [
    {
      pergunta: "Quem é a professora da turma?",
      opcoes: ["Helena", "Maria Joaquina", "Carmen"],
      resposta: 0
    },
    {
      pergunta: "Qual é o nome do aluno que sonha em ser cantor?",
      opcoes: ["Cirilo", "Jaime", "Kokimoto"],
      resposta: 1
    },
    {
      pergunta: "Quem é a aluna rica e mimada?",
      opcoes: ["Laura", "Maria Joaquina", "Valéria"],
      resposta: 1
    },
    {
      pergunta: "Qual é o melhor amigo do Cirilo?",
      opcoes: ["Davi", "Kokimoto", "Paulo"],
      resposta: 0
    }
  ];

  let perguntaAtual = 0;

  const quizPergunta = document.getElementById('quiz-pergunta');
  const quizOpcoes = document.getElementById('quiz-opcoes');
  const quizFeedback = document.getElementById('quiz-feedback');
  const btnProxima = document.getElementById('proxima-pergunta');

  function carregarPergunta() {
    const q = perguntas[perguntaAtual];
    quizPergunta.textContent = q.pergunta;
    quizOpcoes.innerHTML = "";
    quizFeedback.textContent = "";

    q.opcoes.forEach((opcao, i) => {
      const btn = document.createElement('button');
      btn.textContent = opcao;
      btn.classList.add('btn', 'btn-light', 'rounded-pill');
      btn.addEventListener('click', () => {
        if (i === q.resposta) {
          quizFeedback.textContent = "✅ Resposta correta!";
          quizFeedback.style.color = "lightgreen";
        } else {
          quizFeedback.textContent = "❌ Resposta errada!";
          quizFeedback.style.color = "red";
        }
      });
      quizOpcoes.appendChild(btn);
    });
  }

  btnProxima.addEventListener('click', function() {
    perguntaAtual++;
    if (perguntaAtual < perguntas.length) {
      carregarPergunta();
    } else {
      quizPergunta.textContent = "Fim do quiz! 🎉";
      quizOpcoes.innerHTML = "";
      quizFeedback.textContent = "";
      btnProxima.style.display = "none";
    }
  });

  carregarPergunta();

  // ScrollReveal animações
  ScrollReveal().reveal('#inicio', { delay: 400 });
  ScrollReveal().reveal('#carrossel', { delay: 400 });
  ScrollReveal().reveal('#galeria', { delay: 400 });
  ScrollReveal().reveal('#quiz', { delay: 400 });
  ScrollReveal().reveal('#contato', { delay: 400 });
});
