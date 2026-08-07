(function () {
  const secretCode = 'pride';
  let inputBuffer = '';

  window.addEventListener('keydown', (e) => {
    // Ignorujeme psaní, pokud uživatel právě píše do textového pole (input/textarea)
    const activeElement = document.activeElement;
    const isInput = activeElement.tagName === 'INPUT' || 
                    activeElement.tagName === 'TEXTAREA' || 
                    activeElement.isContentEditable;
    if (isInput) return;

    // Přidáme stisknutou klávesu do bufferu
    inputBuffer += e.key.toLowerCase();

    // Udržujeme buffer maximálně stejně dlouhý jako hledané slovo
    if (inputBuffer.length > secretCode.length) {
      inputBuffer = inputBuffer.slice(-secretCode.length);
    }

    // Pokud se buffer shoduje se slovem "pride"
    if (inputBuffer === secretCode) {
      triggerPrideAnimation();
      inputBuffer = ''; // Resetujeme buffer
    }
  });

  function triggerPrideAnimation() {
    // Vytvoříme element pro srdce
    const heart = document.createElement('div');
    heart.classList.add('pride-heart-easter-egg');
    document.body.appendChild(heart);

    // Po skončení animace element odstraníme z DOMu
    setTimeout(() => {
      heart.remove();
    }, 1200);
  }
})();