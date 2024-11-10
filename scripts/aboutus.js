
function typeText(element, text, delay) {
    let index = 0;

    function typing() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(typing, delay);
        }
    }
    
    typing();
}

var typingDelay = 100;
var textToType = "SE-2301";
var typingElement = document.getElementById('typing-text1');
typeText(typingElement, textToType, typingDelay);

textToType = "Team members: Seralinov Askar, Sembaev Nurbol, Bokenbayev Nursultan ";
typingElement = document.getElementById('typing-text2');
typeText(typingElement, textToType, typingDelay);

textToType = "Our project is a web-site aggregator of browser-games. A website aggregator of browser games serves as a centralized platform where users can discover, play, and review various browser-based games. This kind of site typically offers a wide selection of games in multiple genres, including action, puzzle, strategy, and casual games. The goal is to simplify the process for users by curating games from across the web and presenting them in an organized, accessible manner.";
typingElement = document.getElementById('typing-text3');
typingDelay = 50;
typeText(typingElement, textToType, typingDelay);

