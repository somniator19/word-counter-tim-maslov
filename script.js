// First things first --> the elements we need
const textInput = document.getElementById("text-input");
const letterCount = document.getElementById("letter-count");
const wordCount = document.getElementById("word-count");
const sentenceCount = document.getElementById("sentence-count");

// This function does all the counting
function updateCounts() {
  const text = textInput.value;

  // Only letters (a-z, A-Z)
  const letters = (text.match(/[a-zA-Z]/g) || []).length;
  letterCount.textContent = letters;

  // Numbers (0-9)
  const numbers = (text.match(/[0-9]/g) || []).length;

  // Symbols (everything that is not letter, number or whitespace)
  const symbols = (text.match(/[^a-zA-Z0-9\s]/g) || []).length;

  // Words
  const wordsArray = text.trim().split(/\s+/).filter(word => word.length > 0);
  wordCount.textContent = wordsArray.length;

  // Sentences (count . ! ?)
  const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
  sentenceCount.textContent = sentences.length;

}

// Update counts while typing (with a tiny delay = asynchronous)
let timer;
textInput.addEventListener("input", function () {
  clearTimeout(timer);
  timer = setTimeout(updateCounts, 150); // waits 150ms after you stop typing
});

// Run once at the start
updateCounts();

//And that's all folks! \('o')/