// counter.js

function countWords(text) {
    // Remove extra spaces and split the string by spaces
    const words = text.trim().split(/\s+/);
    return words[0] === '' ? 0 : words.length; // Return 0 if the string is empty
}

function countChars(text) {
    return text.length; // Counts all characters, including spaces
}

function countSentences(text) {
    const sentences = text.split(/[.!?]+/).filter(sentence => sentence.trim() !== ''); // Filter out empty sentences
    return sentences.length;
}

function countParagraphs(text) {
    const paragraphs = text.split(/\n+/).filter(paragraph => paragraph.trim() !== ''); // Filter out empty paragraphs
    return paragraphs.length;
}

// Update statistics in the UI
function updateStatistics() {
    const text = document.getElementById('text-input').value;
    const wordCount = countWords(text);
    const charCount = countChars(text);
    const sentenceCount = countSentences(text);
    const paragraphCount = countParagraphs(text);
    
    // Calculate reading time (assuming an average reading speed of 200 words per minute)
    const readingTime = Math.ceil(wordCount / 200);

    // Update UI
    updateUI(wordCount, charCount, sentenceCount, paragraphCount, readingTime);
}
