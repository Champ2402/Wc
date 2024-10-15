// counter.js

function countWords(text) {
    // Remove extra spaces and split the string by spaces
    const words = text.trim().split(/\s+/);
    return words.length;
}

function countChars(text) {
    return text.length;
}

function countSentences(text) {
    return text.split(/[.!?]+/).length;
}

function countParagraphs(text) {
    return text.split('\n\n').length;
}