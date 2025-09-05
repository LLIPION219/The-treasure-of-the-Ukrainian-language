// Факти
const facts = [
  "Українська мова має понад 250 000 слів.",
  "У 1934 році в Парижі українська мова посіла 2 місце за мелодійністю.",
  "Слово «любов» має понад 10 синонімів.",
  "Українська має найбільшу кількість зменшувально-пестливих слів."
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

// Анімація появи секцій
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

// Прибрати курсор після завершення typing
document.querySelectorAll(".typing").forEach(el => {
  el.addEventListener("animationend", () => {
    el.classList.add("finished");
  });
});
