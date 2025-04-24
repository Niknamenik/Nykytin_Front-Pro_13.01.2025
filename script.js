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
  "Що саме ти маєш на увазi?",
];

const chatBox = document.getElementById("chatBox");
const input = document.getElementById("userInput");
const button = document.getElementById("sendBtn");
let isChatActive = true;

function appendMessage(author, message) {
  const p = document.createElement("p");
  p.innerHTML = `<strong>${author}:</strong> ${message}`;
  chatBox.append(p);
}

function sendMessage() {
  button.disabled = true;
  input.disabled = true;
  if (!isChatActive) {
    return;
  }
  const message = input.value.trim();
  if (!message) {
    return;
  }
  appendMessage("Ви", message);
  input.value = "";

  const delay = Math.floor(Math.random() * 10000) + 1000;

  setTimeout(() => {
    if (message.toLowerCase() === "my watch has ended") {
      appendMessage("Браузер", "Зрозуміло. Гарного дня!");
      isChatActive = false;
      return;
    }
    if (Math.random() < 0.1) {
      appendMessage("Браузер", "Вибач, але мені треба йти, до зустрічі!");
      isChatActive = false;
      return;
    }
    const response = responses[Math.floor(Math.random() * responses.length)];
    appendMessage("Браузер", response);
    button.disabled = false;
    input.disabled = false;
  }, delay);
}
