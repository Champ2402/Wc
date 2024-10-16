// manipulator.js

function convertCase(type) {
    let text = document.getElementById('text-input').value;
    if (type === 'uppercase') {
        text = text.toUpperCase();
    } else {
        text = text.toLowerCase();
    }
    document.getElementById('text-input').value = text;
    updateStatistics(); // Ensure this function updates the statistics
}

function removeExtraSpaces() {
    let text = document.getElementById('text-input').value;
    text = text.replace(/\s+/g, ' ').trim(); // Fixed regex pattern and trim to remove leading/trailing spaces
    document.getElementById('text-input').value = text;
    updateStatistics(); // Ensure this function updates the statistics
}

// Add event listeners for buttons
document.getElementById('uppercase').addEventListener('click', function() {
    convertCase('uppercase');
});

document.getElementById('lowercase').addEventListener('click', function() {
    convertCase('lowercase');
});

document.getElementById('remove-spaces').addEventListener('click', removeExtraSpaces);
