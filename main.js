// main.js

document.getElementById('text-input').addEventListener('input', updateStatistics);

document.getElementById('keyword-input').addEventListener('input', updateKeywordDensity);

function updateStatistics() {
    const text = document.getElementById('text-input').value;
    const wordCount = countWords(text);
    const charCount = countChars(text);
    const sentenceCount = countSentences(text);
    const paragraphCount = countParagraphs(text);
    const readingTime = estimateReadingTime(text);
    const readability = calculateReadability(text);
    const commonWords = findMostCommonWords(text);

    document.getElementById('word-count').textContent = wordCount;
    document.getElementById('char-count').textContent = charCount;
    document.getElementById('sentence-count').textContent = sentenceCount;
    document.getElementById('paragraph-count').textContent = paragraphCount;
    document.getElementById('reading-time').textContent = readingTime;
    document.getElementById('readability').textContent = readability;
    document.getElementById('common-words').textContent = commonWords.join(', ');
}

function updateKeywordDensity() {
    const text = document.getElementById('text-input').value;
    const keyword = document.getElementById('keyword-input').value;
    const density = analyzeKeywordDensity(text, keyword);
    document.getElementById('keyword-density').textContent = density + "%";
}