
document.addEventListener('DOMContentLoaded', function() {
  // Hiệu ứng xuất hiện cho các mục menu khi scroll
  const menuItems = document.querySelectorAll('.menu-item');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });
  
  menuItems.forEach(item => {
    observer.observe(item);
  });
  
  // Hiệu ứng xoay cho logo
  const logo = document.getElementById('logo');
  if (logo) {
    logo.addEventListener('mouseenter', () => {
      logo.style.animation = 'rotate 1s ease-in-out';
    });
    
    logo.addEventListener('animationend', () => {
      logo.style.animation = 'pulse 2s infinite';
    });
  }
  
  // Thêm animation cho nút menu khi hover
  const menuLinks = document.querySelectorAll('nav ul li a');
  menuLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
      this.style.transition = 'color 0.3s, transform 0.3s';
      this.style.transform = 'translateY(-3px)';
    });
    
    link.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
  // Chat functionality
  const chatBox = document.getElementById('chatBox');
  const messageInput = document.getElementById('messageInput');
  const sendButton = document.getElementById('sendButton');

  function sendMessage() {
    const message = messageInput.value.trim();
    if (message) {
      // Add user message
      const userMessage = document.createElement('div');
      userMessage.className = 'chat-message user';
      userMessage.innerHTML = `<p>${message}</p>`;
      chatBox.appendChild(userMessage);

      // Clear input
      messageInput.value = '';

      // Auto-scroll to bottom
      chatBox.scrollTop = chatBox.scrollHeight;

      // Simulate shop response (after a short delay)
      setTimeout(() => {
        const shopMessage = document.createElement('div');
        shopMessage.className = 'chat-message shop';
        shopMessage.innerHTML = `<p>Cảm ơn bạn đã chia sẻ! Chúng tôi ghi nhận phản hồi của bạn và sẽ liên hệ lại nếu cần thêm thông tin.</p>`;
        chatBox.appendChild(shopMessage);
        
        // Auto-scroll to bottom again
        chatBox.scrollTop = chatBox.scrollHeight;
      }, 1000);
    }
  }

  // Send message when button is clicked
  sendButton.addEventListener('click', sendMessage);

  // Send message when Enter key is pressed
  messageInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      sendMessage();
    }
  });

  // Accordion functionality for Q&A section
  const accordionButtons = document.querySelectorAll('.accordion-button');
  
  accordionButtons.forEach(button => {
    button.addEventListener('click', () => {
      const accordionItem = button.parentElement;
      
      // Check if current item is already active
      const isActive = accordionItem.classList.contains('active');
      
      // Close all accordion items
      document.querySelectorAll('.accordion-item').forEach(item => {
        item.classList.remove('active');
      });
      
      // If current item wasn't active, open it
      if (!isActive) {
        accordionItem.classList.add('active');
      }
    });
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70, // Account for fixed header
          behavior: 'smooth'
        });
      }
    });
  });
});
