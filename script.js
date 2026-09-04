// First things first --> the elements we need
const textInput = document.getElementById("text-input");
const letterCount = document.getElementById("letter-count");
const numberCount = document.getElementById("number-count");
const symbolCount = document.getElementById("symbol-count");
const wordCount = document.getElementById("word-count");
const sentenceCount = document.getElementById("sentence-count");
const bgButton = document.getElementById("bg-button");

// This function does all the counting
function updateCounts() {
  const text = textInput.value;

  // Only letters (a-z, A-Z)
  const letters = (text.match(/[a-zA-Z]/g) || []).length;
  letterCount.textContent = letters;

  // Numbers (0-9)
  const numbers = (text.match(/[0-9]/g) || []).length;
  numberCount.textContent = numbers;

  // Symbols (everything that is not letter, number or whitespace)
  const symbols = (text.match(/[^a-zA-Z0-9\s]/g) || []).length;
  symbolCount.textContent = symbols;

  // Words
  const wordsArray = text.trim().split(/\s+/).filter(word => word.length > 0);
  wordCount.textContent = wordsArray.length;

  // Sentences (count . ! ?)
  const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
  sentenceCount.textContent = sentences.length;

}

// Update counts while typing (with a tiny delay = asynchronous)
let timer;
textInput.addEventListener("input", () => {
  clearTimeout(timer);
  timer = setTimeout(updateCounts, 150); // waits 150ms after you stop typing
    });

// Random soft background colors
const colors = [
  "#fce4ec", "#e8f5e9", "#e3f2fd", "#fff3e0",
  "#f3e5f5", "#e0f7fa", "#fbe9e7", "#f1f8e9",
  "#ede7f6", "#e0f2f1"
];

bgButton.addEventListener("click", () => {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
});

// Run once at the start
updateCounts();

//And that's all folks! \('o')/