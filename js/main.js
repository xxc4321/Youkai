// Main JavaScript for Youkai Website

// Guestbook functionality
const GUESTBOOK_KEY = 'youkai_guestbook';

function loadGuestMessages() {
    const list = document.getElementById('guestbook-list');
    if (!list) return;
    
    const messages = JSON.parse(localStorage.getItem(GUESTBOOK_KEY) || '[]');
    list.innerHTML = '';
    
    if (messages.length === 0) {
        list.innerHTML = '<p class="empty-state">还没有留言，来抢沙发吧！</p>';
        return;
    }
    
    // 使用副本避免修改原数组
    [...messages].reverse().forEach(msg => {
        const item = document.createElement('div');
        item.className = 'guest-message';
        item.innerHTML = `
            <div class="guest-avatar">${msg.name.charAt(0).toUpperCase()}</div>
            <div class="guest-content">
                <div class="guest-name">${escapeHtml(msg.name)}</div>
                <div class="guest-text">${escapeHtml(msg.message)}</div>
            </div>
        `;
        list.appendChild(item);
    });
}

function addGuestMessage() {
    const nameInput = document.getElementById('guest-name');
    const messageInput = document.getElementById('guest-message');
    
    if (!nameInput || !messageInput) return;
    
    const name = nameInput.value.trim();
    const message = messageInput.value.trim();
    
    if (!name || !message) {
        alert('请填写名字和留言内容');
        return;
    }
    
    const messages = JSON.parse(localStorage.getItem(GUESTBOOK_KEY) || '[]');
    messages.push({
        name: name,
        message: message,
        time: new Date().toISOString()
    });
    
    // 只保留最近50条
    if (messages.length > 50) {
        messages.shift();
    }
    
    localStorage.setItem(GUESTBOOK_KEY, JSON.stringify(messages));
    
    nameInput.value = '';
    messageInput.value = '';
    
    loadGuestMessages();
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    loadGuestMessages();
});
