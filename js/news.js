// News Page JavaScript

const newsData = [
    {
        id: 1,
        topic: 'ai',
        topicName: 'AI发展',
        date: '2026-04-02',
        title: 'OpenAI发布GPT-5预览版',
        summary: 'OpenAI今日发布了GPT-5的预览版本，在多模态理解和推理能力上有显著提升...',
        content: 'OpenAI今日发布了GPT-5的预览版本，在多模态理解和推理能力上有显著提升。新版本支持更长的上下文窗口，达到200万token。'
    },
    {
        id: 2,
        topic: 'career',
        topicName: '回国就业',
        date: '2026-04-02',
        title: '2026年海归就业报告发布',
        summary: '最新报告显示，AI相关岗位需求增长300%，PMP认证持有者平均薪资提升25%...',
        content: '最新报告显示，AI相关岗位需求增长300%，PMP认证持有者平均薪资提升25%。建议海归人才关注人工智能和项目管理领域。'
    },
    {
        id: 3,
        topic: 'fitness',
        topicName: '健身营养',
        date: '2026-04-02',
        title: '春季减脂最佳训练方案',
        summary: '研究表明，春季是减脂的黄金期，结合有氧和力量训练效果最佳...',
        content: '研究表明，春季是减脂的黄金期，结合有氧和力量训练效果最佳。建议每周进行3次力量训练配合2次有氧运动。'
    }
];

function renderNews(topicFilter = null) {
    const container = document.getElementById('news-container');
    if (!container) return;
    
    const filtered = topicFilter 
        ? newsData.filter(n => n.topic === topicFilter)
        : newsData;
    
    container.innerHTML = filtered.map(news => `
        <div class="news-card" onclick="openNewsModal(${news.id})">
            <div class="news-header">
                <span class="news-topic">${news.topicName}</span>
                <span class="news-date">${news.date}</span>
            </div>
            <h3 class="news-title">${news.title}</h3>
            <p class="news-summary">${news.summary}</p>
        </div>
    `).join('');
}

function openNewsModal(newsId) {
    const news = newsData.find(n => n.id === newsId);
    if (!news) return;
    
    const modal = document.getElementById('news-modal');
    const body = document.getElementById('modal-body');
    
    body.innerHTML = `
        <span class="news-topic">${news.topicName}</span>
        <h2>${news.title}</h2>
        <p class="news-date">${news.date}</p>
        <p>${news.content}</p>
    `;
    
    modal.style.display = 'block';
}

// Topic filter
document.querySelectorAll('.topic-tag').forEach(tag => {
    tag.addEventListener('click', function() {
        const topic = this.dataset.topic;
        
        // Toggle active state
        if (this.classList.contains('active')) {
            this.classList.remove('active');
            renderNews();
        } else {
            document.querySelectorAll('.topic-tag').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            renderNews(topic);
        }
    });
});

// Close modal
document.querySelector('.close')?.addEventListener('click', function() {
    document.getElementById('news-modal').style.display = 'none';
});

window.onclick = function(event) {
    const modal = document.getElementById('news-modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

// Initialize
renderNews();
