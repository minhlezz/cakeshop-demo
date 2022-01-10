
initializeChat()

function initializeChat() {

    registerOpenChatButton();
    registerCloseChatButton();
}

function registerOpenChatButton() {
    const chatBtn = document.getElementById('chat-btn');
    chatBtn.addEventListener('click', () => {
        toggleChat(true)

    })
}

function registerCloseChatButton() {
    const chatClose = document.getElementById('chat-close');
    chatClose.addEventListener('click', () => {
        toggleChat(false)
    })
}

function toggleChat(value) {
    const chatBtn = document.getElementById('chat-btn');
    const chatBox = document.getElementById('chat-box');
    if (value) {
        chatBox.style.display = 'block';
        chatBtn.style.display = 'none';
    } else {
        chatBox.style.display = 'none';
        chatBtn.style.display = 'block';
    }
}

