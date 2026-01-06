// 全局通用JavaScript - 微信电商能力提升平台

// 导航路由配置
const navRoutes = {
    '首页': '交互原型-首页.html',
    '知识图谱': '交互原型-知识图谱.html',
    '我的名片': '交互原型-数字化名片.html',
    '学员中心': '交互原型-学员等级.html',
    '学习路径': '交互原型-学习路径.html',
    '活动中心': '交互原型-活动中心.html',
    '社区': '交互原型-社区首页.html'
};

// 底部Tab路由
const tabRoutes = {
    'home': '交互原型-首页.html',
    'learn': '交互原型-课程中心.html',
    'resource': '交互原型-资源对接中心.html',
    'community': '交互原型-社区首页.html',
    'profile': '交互原型-个人中心.html'
};

// 统一返回函数
function goBack() {
    const referrer = document.referrer;
    // 如果来源是本站页面，使用浏览器返回
    if (referrer && referrer.includes('交互原型') || referrer.includes('原型')) {
        window.history.back();
    } else {
        // 否则返回首页
        window.location.href = '交互原型-首页.html';
    }
}

// 统一导航跳转
function goToNav(navName) {
    if (navRoutes[navName]) {
        window.location.href = navRoutes[navName];
    }
}

// 统一Tab跳转
function goToTab(tab) {
    if (tabRoutes[tab]) {
        window.location.href = tabRoutes[tab];
    }
}

// 跳转到首页
function goToHome() {
    window.location.href = '交互原型-首页.html';
}

// 跳转到消息中心
function goToMessages() {
    window.location.href = '交互原型-消息中心.html';
}

// 跳转到个人中心
function goToProfile() {
    window.location.href = '交互原型-个人中心.html';
}

// 获取URL参数
function getUrlParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// 自动高亮当前页面的导航项
function highlightCurrentNav() {
    const currentPage = window.location.pathname.split('/').pop();
    
    // 高亮顶部导航
    document.querySelectorAll('.nav-item').forEach(item => {
        const navText = item.textContent.trim();
        if (navRoutes[navText] && navRoutes[navText] === currentPage) {
            item.classList.add('active');
        }
    });
    
    // 高亮底部Tab
    const tabMap = {
        '交互原型-首页.html': 'home',
        '交互原型-课程中心.html': 'learn',
        '交互原型-学习路径.html': 'learn',
        '交互原型-知识图谱.html': 'learn',
        '交互原型-资源对接中心.html': 'resource',
        '交互原型-数字化名片.html': 'resource',
        '交互原型-社区首页.html': 'community',
        '交互原型-活动中心.html': 'community',
        '交互原型-个人中心.html': 'profile',
        '交互原型-数据统计.html': 'profile',
        '交互原型-消息中心.html': 'profile'
    };
    
    const tabId = tabMap[currentPage];
    if (tabId) {
        const tabItem = document.getElementById('nav-' + tabId);
        if (tabItem) {
            tabItem.classList.add('active');
        }
    }
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    highlightCurrentNav();
});

