// 1. Dissolvenza immagine Hero allo scorrimento
const heroBg = document.getElementById("heroBg");
const heroContent = document.getElementById("heroContent");

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;

  const opacity = Math.max(0, 1 - scrollPosition / (windowHeight * 0.75));
  
  if (heroBg) {
    heroBg.style.opacity = opacity;
  }
  if (heroContent) {
    heroContent.style.opacity = opacity;
    heroContent.style.transform = `translateY(${scrollPosition * 0.2}px)`;
  }
});

// 2. Dati dei progetti per i 5 anni di scuola superiore (Timeline)
const schoolProjects = {
  1: {
    yearText: "1° Anno di Superiori",
    title: "Primi Passi col Web",
    tech: "HTML5 & CSS3",
    desc: "Il primo sito web sviluppato per apprendere la formattazione, la struttura di un ipertesto e l'organizzazione dei layout.",
    link: "https://github.com/"
  },
  2: {
    yearText: "2° Anno di Superiori",
    title: "Algoritmi & Basi di Programmazione",
    tech: "C++ / Flowchart",
    desc: "Studio e implementazione dei primi costrutti logici: condizioni, cicli iterativi, array e funzioni modulari.",
    link: "https://github.com/"
  },
  3: {
    yearText: "3° Anno di Superiori",
    title: "Programmazione ad Oggetti",
    tech: "Java / OOP",
    desc: "Sviluppo di applicazioni desktop strutturate ad oggetti con interfacce grafiche ed esportazione dati su file locali.",
    link: "https://github.com/"
  },
  4: {
    yearText: "4° Anno di Superiori",
    title: "Applicazioni Web & Database",
    tech: "JavaScript, PHP & MySQL",
    desc: "Piattaforma dinamica con gestione account, interrogazione di query relazionali e manipolazione del DOM in tempo reale.",
    link: "https://github.com/"
  },
  5: {
    yearText: "5° Anno di Superiori",
    title: "Progetto di Esame di Stato",
    tech: "Full-Stack Web App & REST API",
    desc: "Applicazione web completa creata per la maturità, dotata di architettura responsive e interfacciamento con API esterne.",
    link: "https://github.com/"
  }
};

// 3. Gestione Modale Progetti (Timeline)
const projectModal = document.getElementById("project-modal");
const modalTag = document.getElementById("modal-tag");
const modalTitle = document.getElementById("modal-title");
const modalTech = document.getElementById("modal-tech");
const modalDesc = document.getElementById("modal-desc");
const modalLink = document.getElementById("modal-link");
const closeProjectBtn = document.getElementById("close-modal");
const nodeButtons = document.querySelectorAll(".node-btn");

nodeButtons.forEach(button => {
  button.addEventListener("click", () => {
    const year = button.getAttribute("data-year");
    const data = schoolProjects[year];

    if (data && projectModal) {
      modalTag.textContent = data.yearText;
      modalTitle.textContent = data.title;
      modalTech.textContent = `Tecnologie: ${data.tech}`;
      modalDesc.textContent = data.desc;
      modalLink.setAttribute("href", data.link);
      
      projectModal.showModal();
    }
  });
});

if (closeProjectBtn) {
  closeProjectBtn.addEventListener("click", () => {
    projectModal.close();
  });
}

if (projectModal) {
  projectModal.addEventListener("click", (event) => {
    const rect = projectModal.getBoundingClientRect();
    const clickedInside = (
      event.clientX >= rect.left &&
      event.clientX <= rect.right &&
      event.clientY >= rect.top &&
      event.clientY <= rect.bottom
    );
    if (!clickedInside) {
      projectModal.close();
    }
  });
}

// 4. Gestione Filtri Temi d'Italiano
document.querySelectorAll('.filter-btn').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const filter = button.getAttribute('data-filter');
    const cards = document.querySelectorAll('.essay-card');

    cards.forEach(card => {
      if (filter === 'all' || card.getAttribute('data-category') === filter) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// 5. Gestione Modale Tema di George Orwell
function openEssay(essayId) {
  if (essayId === 'orwell') {
    const essayModal = document.getElementById('essayModal');
    if (essayModal) {
      essayModal.style.display = 'block';
      document.body.style.overflow = 'hidden';
    }
  }
}

function closeEssay() {
  const essayModal = document.getElementById('essayModal');
  if (essayModal) {
    essayModal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
}

window.addEventListener('click', (event) => {
  const essayModal = document.getElementById('essayModal');
  if (event.target === essayModal) {
    closeEssay();
  }
});

// 6. Toggle Note del Docente
function toggleTeacherNotes() {
  const checkbox = document.getElementById('toggleNotes');
  const modalContent = document.querySelector('.modal-essay-content');
  
  if (modalContent && checkbox) {
    if (checkbox.checked) {
      modalContent.classList.remove('hide-notes');
    } else {
      modalContent.classList.add('hide-notes');
    }
  }
}