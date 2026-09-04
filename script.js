// First things first --> the elements we need
const textInput = document.getElementById("text-input");
const letterCount = document.getElementById("letter-count");
const wordCount = document.getElementById("word-count");
const sentenceCount = document.getElementById("sentence-count");

// This function does all the counting
function updateCounts() {
  const text = textInput.value;

  // Letters (ignore spaces and new lines)
  const letters = text.replace(/\s/g, "").length;
  letterCount.textContent = letters;

  // Words
  const wordsArray = text.trim().split(/\s+/).filter(word => word.length > 0);
  wordCount.textContent = wordsArray.length;

  // Sentences (count . ! ?)
  const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
  sentenceCount.textContent = sentences.length;
}
