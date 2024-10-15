// analyzer.js

function estimateReadingTime(text) {
    const wordsPerMinute = 200;
    return Math.ceil(countWords(text) / wordsPerMinute);
}

function analyzeKeywordDensity(text, keyword) {
    if (!keyword) return 0; // Return 0 if no keyword is provided
    const words = text.toLowerCase().split(/\s+/);
    const keywordCount = words.filter(word => word === keyword.toLowerCase()).length;
    return Math.round((keywordCount / words.length) * 100);
}

function calculateReadability(text) {
    const sentences = text.split(/[.!?]+/).length;
    const words = countWords(text);
    const syllables = estimateSyllables(text);
    const score = 206.835 - (1.015 * (words / sentences)) - (84.6 * (syllables / words));
    return Math.round(score);
}

function estimateSyllables(word) {
    const vowels = "aeiouy";
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])) {
            count++;
        }
    }
    return count;
}

function findMostCommonWords(text) {
    const words = text.toLowerCase().split(/\s+/);
    const wordCounts = {};
    for (const word of words) {
        wordCounts[word] = (wordCounts[word] || 0) + 1;
    }
    const sortedWords = Object.entries(wordCounts).sort(([, countA], [, countB]) => countB - countA);
    return sortedWords.slice(0, 5).map(([word]) => word);
}