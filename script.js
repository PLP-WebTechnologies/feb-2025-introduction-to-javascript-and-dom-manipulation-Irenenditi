// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Change text content dynamically
    const changeTextBtn = document.getElementById('change-text-btn');
    const changeableText = document.getElementById('changeable-text');
    
    changeTextBtn.addEventListener('click', function() {
        changeableText.textContent = 'Text changed dynamically with JavaScript!';
    });

    // Modify CSS styles via JavaScript
    const changeStyleBtn = document.getElementById('change-style-btn');
    
    changeStyleBtn.addEventListener('click', function() {
        changeableText.style.color = '#e74c3c';
        changeableText.style.fontSize = '24px';
        changeableText.style.textDecoration = 'underline';
    });

    // Add or remove an element when a button is clicked
    const toggleElementBtn = document.getElementById('toggle-element-btn');
    const toggleableElement = document.getElementById('toggleable-element');
    
    toggleElementBtn.addEventListener('click', function() {
        if (toggleableElement.classList.contains('hidden')) {
            toggleableElement.classList.remove('hidden');
            toggleElementBtn.textContent = 'Hide Element';
        } else {
            toggleableElement.classList.add('hidden');
            toggleElementBtn.textContent = 'Show Element';
        }
    });
});