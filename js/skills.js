// Skills Page JavaScript

const skillsData = {
    tavily: {
        name: 'Tavily Search',
        icon: '🔍',
        date: '2026-04-02',
        installs: 287,
        description: '高级搜索技能，支持深度网页搜索和内容提取。',
        details: 'Tavily Search是一个强大的搜索工具，可以获取实时网页内容，支持多种搜索参数和过滤选项。'
    },
    pdf: {
        name: 'PDF to Markdown',
        icon: '📄',
        date: '2026-04-02',
        installs: 311,
        description: 'PDF文档转换为Markdown格式，保留文档结构。',
        details: '支持将PDF文件转换为Markdown格式，保留标题、列表、表格等文档结构，便于后续编辑和处理。'
    },
    browser: {
        name: '谷歌浏览器操作',
        icon: '🌐',
        date: '2026-04-02',
        installs: 1501,
        description: '自动化浏览器操作，支持页面导航、元素交互等。',
        details: '提供完整的浏览器自动化能力，包括页面导航、点击、输入、截图等操作，安装量超过1500次。'
    },
    rabbit: {
        name: 'Rabbit 每日新闻源',
        icon: '📰',
        date: '2026-03-28',
        installs: 128,
        description: 'AI采集RSS新闻源，支持多主题配置。',
        details: '自动采集RSS新闻源，支持6大主题配置。测试中28个源成功采集55条新闻，去重后54条。'
    },
    staroffice: {
        name: 'Star Office UI',
        icon: '🏢',
        date: '2026-03-28',
        installs: 89,
        description: '像素办公室看板，实时显示AI助手工作状态。',
        details: '可视化AI助手工作状态，支持idle、writing、researching等多种状态显示，端口19000。'
    }
};

document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('click', function() {
        const skillKey = this.dataset.skill;
        const skill = skillsData[skillKey];
        if (!skill) return;
        
        const modal = document.getElementById('skill-modal');
        const body = document.getElementById('skill-modal-body');
        
        body.innerHTML = `
            <div style="text-align: center; margin-bottom: 1rem;">
                <span style="font-size: 3rem;">${skill.icon}</span>
            </div>
            <h2 style="text-align: center; margin-bottom: 0.5rem;">${skill.name}</h2>
            <p style="text-align: center; color: #7f8c8d; margin-bottom: 1rem;">
                安装时间: ${skill.date} | ${skill.installs} 次安装
            </p>
            <p style="margin-bottom: 1rem;"><strong>简介:</strong> ${skill.description}</p>
            <p style="color: #555;">${skill.details}</p>
        `;
        
        modal.style.display = 'block';
    });
});

// Close modal
document.querySelector('#skill-modal .close')?.addEventListener('click', function() {
    document.getElementById('skill-modal').style.display = 'none';
});

window.onclick = function(event) {
    const modal = document.getElementById('skill-modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};
