const quotes = [
  "Нації вмирають не від інфаркту. Спочатку їм відбирає мову. — Ліна Костенко",
  "Мова — це наша національна ознака, в мові — наша культура, сутність. — Іван Огієнко",
  "Мова — це не просто спосіб спілкування, це наша історія. — Олександр Довженко",
  "Скільки ти знаєш мов — стільки разів ти людина. — Йоганн Вольфганг Ґете"
];

document.getElementById("randomQuoteBtn").addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("randomQuote").textContent = quotes[randomIndex];
});
