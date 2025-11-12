// Кастомизация интерфейса Jitsi Meet

document.addEventListener('DOMContentLoaded', function() {
    document.title = 'Cinimex Meet';
    
    const logoContainer = document.querySelector('.welcome-page h1');
    if (logoContainer) {
        const customLogo = document.createElement('img');
        customLogo.src = '/images/custom-logo.png'; 
        customLogo.className = 'custom-logo';
        customLogo.alt = 'Логотип';
        logoContainer.parentNode.insertBefore(customLogo, logoContainer);
    }
    
    const welcomeText = document.querySelector('.welcome-page p');
    if (welcomeText) {
        welcomeText.textContent = 'Добро пожаловать в нашу систему видеоконференций!';
    }
});