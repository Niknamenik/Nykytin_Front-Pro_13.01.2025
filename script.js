const responses = [
  "Цікаво, розкажи більше.",
  "Хмм, я про це не думав.",
  "О, звучить круто!",
  "Чому ти так думаєш?",
  "Це справді цікаво!",
  "Можеш уточнити?",
  "Я трохи втомився...",
  "Можливо варто на цьому зупинитись?",
  "Дякую за розмову :)",
  "Я йду, бувай!",
];

const chatBox = document.getElementById("chatBox");
const input = document.getElementById("userInput");
let isChatActive = true;

function appendMessage(author, text) {
  const p = document.createElement("p");
  p.innerHTML = `<strong>${author}:</strong> ${text}`;
  chatBox.appendChild(p);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function sendMessage() {
  if (!isChatActive) return;
  const message = input.value.trim();
  if (!message) return;
  appendMessage("Ви", message);
  input.value = "";

  if (message.toLowerCase() === "my watch has ended") {
    appendMessage("Браузер", "Зрозуміло. Гарного дня!");
    isChatActive = false;
    return;
  }

  const delay = Math.floor(Math.random() * 10000) + 1000;
  setTimeout(() => {
    if (!isChatActive) return;

    // 10% ймовірність завершити діалог браузером
    if (Math.random() < 0.1) {
      appendMessage("Браузер", "Мені треба йти, до зустрічі!");
      isChatActive = false;
      return;
    }

    const response = responses[Math.floor(Math.random() * responses.length)];
    appendMessage("Браузер", response);
  }, delay);
}

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") sendMessage();
});
