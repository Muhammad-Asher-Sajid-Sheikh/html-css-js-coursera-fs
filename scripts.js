// Function to add a new recommendation
function addRecommendation() {
    var recommendationText = document.getElementById('new-recommendation').value;
    if (recommendationText) {
        var li = document.createElement('li');
        li.textContent = recommendationText;
        document.getElementById('recommendations-list').appendChild(li);

        // Show pop-up confirmation
        showPopup();

        // Clear the input field
        document.getElementById('new-recommendation').value = '';
    }
}

// Function to show the pop-up message
function showPopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'flex';

    // Auto-hide the pop-up after 3 seconds
    setTimeout(closePopup, 3000);
}

// Function to close the pop-up message
function closePopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'none';
}
