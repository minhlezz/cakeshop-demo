
chat()

function chat() {
    toggleChat();
}


function toggleChat() {
    let chatBtn = document.getElementById('chat-btn');
    let chatClose = document.getElementById('chat-close');

    let chatBox = document.getElementById('chat-box');

    chatBtn.addEventListener('click', () => {
        chatBox.style.display = 'block';
        chatBtn.style.display = 'none';
    })

    chatClose.addEventListener('click', () => {
        chatBox.style.display = 'none';
        chatBtn.style.display = 'block';
    })
}