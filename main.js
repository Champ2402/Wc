// main.js

// Event listener for text input to update statistics
document.getElementById('text-input').addEventListener('input', updateStatistics);

// Event listener for keyword input to update keyword density
document.getElementById('keyword-input').addEventListener('input', updateKeywordDensity);

// Function to update various text statistics
function updateStatistics() {
    const text = document.getElementById('text-input').value;

    // Calculate statistics
    const wordCount = countWords(text);
    const charCount = countChars(text);
    const sentenceCount = countSentences(text);
    const paragraphCount = countParagraphs(text);
    const readingTime = estimateReadingTime(text);
    const readability = calculateReadability(text);
    const commonWords = findMostCommonWords(text);

    // Update the UI with the calculated statistics
    updateUI(wordCount, charCount, sentenceCount, paragraphCount, readingTime, readability, commonWords);
}

// Function to update keyword density based on input
function updateKeywordDensity() {
    const text = document.getElementById('text-input').value;
    const keyword = document.getElementById('keyword-input').value;
    const density = analyzeKeywordDensity(text, keyword);
    
    // Update the keyword density display
    document.getElementById('keyword-density').textContent = density + "%";
}

// Function to estimate reading time (in minutes)
function estimateReadingTime(text) {
    const words = text.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / 200); // Average reading speed of 200 words per minute
    return minutes > 0 ? minutes : 1; // Ensure at least 1 minute
}

// Function to calculate readability (for demonstration purposes)
function calculateReadability(text) {
    // You can implement a readability formula here (e.g., Flesch-Kincaid)
    // Placeholder return value
    return "N/A";
}

// Function to find the most common words in the text
function findMostCommonWords(text) {
    const words = text.toLowerCase().match(/\w+/g);
    const wordCount = {};
    if (words) {
        words.forEach(word => {
            wordCount[word] = (wordCount[word] || 0) + 1;
        });

        // Sort words by frequency and take the top 5
        const sortedWords = Object.entries(wordCount)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 5)
            .map(entry => entry[0]);
        
        return sortedWords;
    }
    return [];
}
