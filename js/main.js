// Placeholder for future JS
console.log("Dashboard ready.");

document.addEventListener('DOMContentLoaded', function() {
  const homeButton = document.getElementById('home-button');

  // Navigation
  if (homeButton) {
    homeButton.addEventListener('click', function() {
      window.location.href = 'home.html';
    });
  }

  // Chat functionality
  const chatInput = document.querySelector('.chat-input input');
  const sendButton = document.querySelector('.send-btn');
  const chatMessages = document.querySelector('.chat-messages');

  function addMessage(message, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user' : 'bot'}`;
    const p = document.createElement('p');
    p.textContent = message;
    messageDiv.appendChild(p);
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function handleSendMessage() {
    const message = chatInput.value.trim();
    if (message) {
      addMessage(message, true);
      chatInput.value = '';
      
      // Simulate bot response
      setTimeout(() => {
        addMessage('I understand you want to ' + message.toLowerCase() + '. I\'m here to help!');
      }, 1000);
    }
  }

  if (chatInput && sendButton) {
    sendButton.addEventListener('click', handleSendMessage);
    chatInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        handleSendMessage();
      }
    });
  }
});