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
});
