document.addEventListener("DOMContentLoaded", function() {
    // Call the function with the element you want to disable selection for
    disableSelection(document.querySelector('h1'));
    disableSelection(document.querySelector('h2'));
});

function disableSelection(element) {
    // For most browsers
    element.setAttribute('unselectable', 'on');
    // For IE9 and below
    element.setAttribute('onselectstart', 'return false;');
    // For modern browsers
    element.style.userSelect = 'none';
}

function toggleTheme() {
    const bodyElement = document.querySelector('body');
    bodyElement.classList.toggle('dark-mode'); // Toggle the dark-mode class on the body element
}
