export function initScrollReveal() {
  // Scroll reveal animation
  function revealElements() {
    const reveals = document.querySelectorAll('.reveal');
    
    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add('active');
      }
    }
  }
  
  window.addEventListener('scroll', revealElements);
  window.addEventListener('load', revealElements);
  
  // Add CSS to support the reveal animations
  const style = document.createElement('style');
  style.textContent = `
    .reveal {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.6s, transform 0.6s;
    }
    
    .reveal.active {
      opacity: 1;
      transform: translateY(0);
    }
    
    .service-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
    }
    
    @keyframes fadeIn {
      0% { opacity: 0; }
      100% { opacity: 1; }
    }
    
    @keyframes slideUp {
      0% { transform: translateY(20px); opacity: 0; }
      100% { transform: translateY(0); opacity: 1; }
    }
    
    .animate-fade-in {
      animation: fadeIn 0.5s ease-in-out;
    }
    
    .animate-slide-up {
      animation: slideUp 0.5s ease-out;
    }
  `;
  document.head.appendChild(style);
}
