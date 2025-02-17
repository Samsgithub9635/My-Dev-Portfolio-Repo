document.addEventListener("DOMContentLoaded", function () {
    const typingAnimationElement = document.getElementById('typing-animation');

    if (!typingAnimationElement) return;

    const typingTexts = [
        'Java Developer',
        'Full-Stack Developer',
        'Back-End Developer'
    ];

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    // Create cursor element
    const cursorElement = document.createElement('span');
    cursorElement.classList.add('cursor');
    cursorElement.textContent = '|';
    
    function type() {
        const currentText = typingTexts[textIndex];

        if (!isDeleting) {
            typingAnimationElement.textContent = currentText.substring(0, charIndex);
            typingAnimationElement.appendChild(cursorElement);
            charIndex++;

            if (charIndex > currentText.length) {
                isDeleting = true;
                setTimeout(type, 1000);
                return;
            }
        } else {
            typingAnimationElement.textContent = currentText.substring(0, charIndex);
            typingAnimationElement.appendChild(cursorElement);
            charIndex--;

            if (charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % typingTexts.length;
            }
        }

        setTimeout(type, isDeleting ? 50 : 150);
    }

    typingAnimationElement.appendChild(cursorElement);
    type();

    // Dropdown menu functionality
    const dropdown = document.querySelector('.dropdown');
    const menuIcon = dropdown ? dropdown.querySelector('.menu-icon') : null;
    const dropdownMenu = dropdown ? dropdown.querySelector('.dropdown-menu') : null;

    if (menuIcon && dropdownMenu) {
        // Add event listener to the menu icon for mobile toggle
        menuIcon.addEventListener('click', function () {
            // Toggle the visibility of the dropdown menu
            dropdownMenu.classList.toggle('show'); // Use classList.toggle instead of style manipulation
        });
    }
});
