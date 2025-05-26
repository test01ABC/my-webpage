document.addEventListener('DOMContentLoaded', () => {
  // Navigation toggle for mobile
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      menuToggle.setAttribute('aria-expanded', navMenu.classList.contains('active'));
    });
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = anchor.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Interactive service cards
  const serviceCards = document.querySelectorAll('.service-card');
  serviceCards.forEach(card => {
    card.addEventListener('click', () => {
      serviceCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
    });
  });

  // Typing effect for system status
  const statusOutput = document.querySelector('.system-status pre');
  if (statusOutput) {
    const text = statusOutput.textContent;
    statusOutput.textContent = '';
    let i = 0;
    const typeText = () => {
      if (i < text.length) {
        statusOutput.textContent += text.charAt(i);
        i++;
        setTimeout(typeText, 50); // Adjust speed (ms)
      } else {
        statusOutput.innerHTML += '<span class="cursor">_</span>';
        setInterval(() => {
          const cursor = statusOutput.querySelector('.cursor');
          if (cursor) cursor.style.visibility = 
            cursor.style.visibility === 'hidden' ? 'visible' : 'hidden';
        }, 500); // Cursor blink interval
      }
    };
    setTimeout(typeText, 1000); // Start typing after 1s
  }
});