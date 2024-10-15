// ui.js

function updateUI(wordCount, keywordDensity) {
    document.getElementById('word-count').textContent = wordCount;
    document.getElementById('keyword-density').textContent = keywordDensity + "%";
}