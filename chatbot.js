const chatBox = document.getElementById('chat-box');
const input = document.getElementById('user-input');

function sendMessage() {
  const message = input.value.trim();
  if (message === '') return;
  appendMessage('Você', message);
  input.value = '';
  simulateBotResponse(message);
}

function appendMessage(sender, text) {
  const msg = document.createElement('div');
  msg.innerHTML = `<strong>${sender}:</strong> ${text}`;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function simulateBotResponse(userMessage) {
  let response = 'Obrigado pela sua mensagem!';
  if (userMessage.toLowerCase().includes('serviços')) {
    response = 'Oferecemos design gráfico, edição de vídeo/foto, produção musical e muito mais. Veja mais na nossa página de serviços: https://studiomiwhastonpro.my.canva.site/com/#pagina-de-servi%C3%A7os';
  } else if (userMessage.toLowerCase().includes('pagamento')) {
    response = 'Consulte nossos métodos de pagamento aqui: https://xcr725th.forms.app/formulario-de-identificacao-e-pagamento-1';
  } else if (userMessage.toLowerCase().includes('comunidade')) {
    response = 'Participe da comunidade: https://chat.whatsapp.com/HtGEJH2UCWv85SKz4H8qXC';
  } else if (userMessage.toLowerCase().includes('canal')) {
    response = 'Siga nosso canal no WhatsApp: https://whatsapp.com/channel/0029VayXpRH4dTnF74uw7801';
  }
  appendMessage('Studio Bot', response);
}