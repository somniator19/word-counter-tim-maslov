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

// Soft warm gradients (inspired by uigradients)
const gradients = [
  "linear-gradient(135deg, #ee9ca7, #ffdde1)",   // soft pink
  "linear-gradient(135deg, #ffecd2, #fcb69f)",   // peach
  "linear-gradient(135deg, #a18cd1, #fbc2eb)",   // lavender-pink
  "linear-gradient(135deg, #f6d365, #fda085)",   // warm sunset
  "linear-gradient(135deg, #ff9a9e, #fecfef)",   // rose
  "linear-gradient(135deg, #fbc2eb, #a6c1ee)",   // candy
  "linear-gradient(120deg, #fad0c4, #ffd1ff)",   // soft blush
  "linear-gradient(135deg, #ffc3a0, #ffafbd)",   // coral cream
  "linear-gradient(to right, #e0c3fc, #8ec5fc)", // soft purple-blue
  "linear-gradient(135deg, #fdfbfb, #ebedee)"    // almost white calm
];

bgButton.addEventListener("click", () => {
  const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];
  document.body.style.background = randomGradient;
});

// Run once at the start
updateCounts();

//And that's all folks! \('o')/