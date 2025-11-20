// Seleciona o elemento header
const header = document.querySelector("header");

// Adiciona um evento que "escuta" o scroll da página
window.addEventListener("scroll", () => {
  // Se o scroll vertical for maior que 50 pixels...
  if (window.scrollY > 50) {
    // ...adiciona a classe para deixar o header preto
    header.classList.add("header-scrolled");
  } else {
    // ...senão, remove a classe para ele voltar a ser transparente
    header.classList.remove("header-scrolled");
  }
});

// Animação da seção "Sobre" ao rolar
const sobreSection = document.querySelector(".sobre-infos");

const sectionObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      // Se a seção está visível na tela
      if (entry.isIntersecting) {
        sobreSection.classList.add("fade-in");
      } else {
        // Se a seção não está mais visível, remove a classe para resetar a animação
        sobreSection.classList.remove("fade-in");
      }
    });
  },
  {
    threshold: 0.1, // A animação começa quando 10% da seção estiver visível
  }
);

// Inicia a observação da seção .sobre
sectionObserver.observe(sobreSection.parentElement);

// --- Animação da seção "Disciplina" ao rolar ---

// 1. Seleciona o elemento que queremos animar
const disciplinaSection = document.querySelector(".disciplina-infos");

// 2. Cria um novo observador para esta seção
const disciplinaObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      // Se a seção está visível na tela
      if (entry.isIntersecting) {
        disciplinaSection.classList.add("fade-in");
      } else {
        // Opcional: remove a classe para a animação repetir se o usuário rolar para cima e para baixo
        disciplinaSection.classList.remove("fade-in");
      }
    });
  },
  { threshold: 0.1 } // A animação começa quando 10% da seção estiver visível
);

// 3. Inicia a observação do elemento pai da seção de disciplina
disciplinaObserver.observe(disciplinaSection.parentElement);
