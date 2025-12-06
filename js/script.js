/* ==========================================
   FAQ ACCORDION FUNCTIONALITY
========================================== */

/**
 * Initialize FAQ accordion functionality
 * Handles opening/closing of FAQ items
 */

// ==========================================
// SELECT ALL FAQ QUESTION BUTTONS
// ==========================================
const faqQuestions = document.querySelectorAll('.faq-question-header');


// ==========================================
// ADD EVENT LISTENERS TO EACH QUESTION
// ==========================================
faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    
    // Get the answer container (next sibling element)
    const answer = question.nextElementSibling;
    
    // Get the icon element using class selector
    const icon = question.querySelector('.faq-icon');
    
    // Check if answer is currently visible
    const isExpanded = question.getAttribute('aria-expanded') === 'true';
    
    
    // ======================================
    // TOGGLE ACCORDION STATE
    // ======================================
    
    // Toggle aria-expanded attribute for accessibility
    question.setAttribute('aria-expanded', !isExpanded);
    
    // Toggle answer visibility using class
    answer.classList.toggle('active');
    
    // Change icon based on state
    if (isExpanded) {
      // Closed state - show plus icon
      icon.src = './assets/images/icon-plus.svg';
      icon.alt = 'Show Answer';
    } else {
      // Open state - show minus icon
      icon.src = './assets/images/icon-minus.svg';
      icon.alt = 'Hide Answer';
    }
  });
});

