// Placeholder for future JS
console.log("Dashboard ready.");

document.addEventListener('DOMContentLoaded', function() {
  // Navigation
  document.getElementById('home-button')?.addEventListener('click', () => window.location.href = 'home.html');
  document.querySelector('.sidebar-btn[data-button="apps"]')?.addEventListener('click', () => window.location.href = 'apps.html');

  // Chat functionality
  const chatInput = document.querySelector('.chat-input input');
  const sendButton = document.querySelector('.send-btn');
  const chatMessages = document.querySelector('.chat-messages');

  if (chatInput && sendButton && chatMessages) {
    function addMessage(message, isUser = false) {
      const messageDiv = document.createElement('div');
      messageDiv.className = `message ${isUser ? 'user' : 'bot'}`;
      messageDiv.innerHTML = `<p>${message}</p>`;
      chatMessages.appendChild(messageDiv);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function handleSendMessage() {
      const message = chatInput.value.trim();
      if (message) {
        addMessage(message, true);
        chatInput.value = '';
        setTimeout(() => addMessage('I understand you want to ' + message.toLowerCase() + '. I\'m here to help!'), 1000);
      }
    }

    sendButton.addEventListener('click', handleSendMessage);
    chatInput.addEventListener('keypress', e => e.key === 'Enter' && handleSendMessage());
  }
});