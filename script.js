const facts = [
  "Українська мова має понад 250 000 слів.",
  "У 1934 році в Парижі українська мова посіла 2 місце за мелодійністю.",
  "Слово «любов» має понад 10 синонімів.",
  "Українська має найбільшу кількість зменшувально-пестливих слів.",
  "Українська входить у топ-3 наймелодійніших мов світу.",
  "В українській мові понад 30% слів утворені за допомогою суфіксів.",
  "Найдовше слово в українській мові: «дихлордифенілтрихлорметилметан».",
  "У 2010 році українська мова була визнана однією з найкрасивіших у світі.",
  "Більше 40 мільйонів людей у світі розмовляють українською.",
  "Перший «Словник української мови» надрукували у 1907 році."
];
let lastFactIndex = -1;
let factCount = 0;

function showFact() {
  let index;
  do {
    index = Math.floor(Math.random() * facts.length);
  } while (index === lastFactIndex);
  lastFactIndex = index;
  document.getElementById("fact").innerText = facts[index];
  factCount++;
  document.getElementById("factCount").innerText = factCount;
}

const quotes = [
  "Борітеся — поборете! (Тарас Шевченко)",
  "Мова росте разом з душею народу. (Іван Франко)",
  "Нації вмирають не від інфаркту. Спочатку їм відбирає мову. (Ліна Костенко)",
  "Слово – це наймогутніша зброя. (Леся Українка)",
  "Хто не знає своєї історії — той не вартий майбутнього. (М. Грушевський)",
  "Любіть Україну, як сонце любіть. (В. Сосюра)",
  "Мова — це наша зброя у боротьбі за незалежність. (В. Стус)",
  "Тільки у своїй хаті своя правда і сила, і воля. (Тарас Шевченко)",
  "Хто думає про науку, той любить свій народ. (І. Пулюй)",
  "Без мови немає народу. (Олесь Гончар)"
];
function showQuote() {
  const q = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quoteOutput").innerText = q;
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
