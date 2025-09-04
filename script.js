// Факти
const facts = [
  "Українська мова має понад 250 000 слів.",
  "У 1934 році в Парижі українська мова посіла 2 місце за мелодійністю.",
  "Слово «любов» має понад 10 синонімів.",
  "Українська має найбільшу кількість зменшувально-пестливих слів.",
  "Українська мова входить у топ-3 наймелодійніших мов світу.",
  "Українська мова — одна з найстаріших слов'янських мов.",
  "Більшість українських слів мають давньоруське походження.",
  "Українська мова багата на фразеологізми та прислів’я.",
  "Слово «свобода» в українських піснях зустрічається сотні разів.",
  "Слово «мрія» — одне з найчастіше вживаних у поезії.",
  "Українська мова активно впливає на розвиток сучасної літератури та музики.",
  "Багато українських слів мають емоційно забарвлене значення, що робить мову мелодійною."
];

let lastFactIndex = -1;

function showFact() {
  let index;
  do {
    index = Math.floor(Math.random() * facts.length);
  } while (index === lastFactIndex);
  
  lastFactIndex = index;
  document.getElementById("fact").innerText = facts[index];
}

// Анімація появи секцій при скролі
const sections = document.querySelectorAll("section");

function checkSections() {
  const triggerBottom = window.innerHeight * 0.85;
  sections.forEach(sec => {
    const boxTop = sec.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      sec.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", checkSections);
checkSections();
