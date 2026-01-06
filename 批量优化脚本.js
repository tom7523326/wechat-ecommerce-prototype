// 批量优化脚本 - 用于优化所有HTML页面
// 这个脚本展示了需要执行的优化操作

const optimizations = {
    // 1. 在所有页面head中添加
    addCommonFiles: `
        <link rel="stylesheet" href="common.css">
        <script src="common.js"></script>
    `,
    
    // 2. 更新viewport
    updateViewport: `width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no`,
    
    // 3. 底部导航HTML
    bottomNav: `
    <!-- 底部导航（移动端） -->
    <nav class="bottom-nav">
        <div class="bottom-nav-list">
            <a href="交互原型-首页.html" class="bottom-nav-item" id="nav-home">
                <div class="bottom-nav-icon">🏠</div>
                <div class="bottom-nav-label">首页</div>
            </a>
            <a href="交互原型-课程中心.html" class="bottom-nav-item" id="nav-learn">
                <div class="bottom-nav-icon">📚</div>
                <div class="bottom-nav-label">学习</div>
            </a>
            <a href="交互原型-资源对接中心.html" class="bottom-nav-item" id="nav-resource">
                <div class="bottom-nav-icon">🤝</div>
                <div class="bottom-nav-label">资源</div>
            </a>
            <a href="交互原型-社区首页.html" class="bottom-nav-item" id="nav-community">
                <div class="bottom-nav-icon">💬</div>
                <div class="bottom-nav-label">社群</div>
            </a>
            <a href="交互原型-个人中心.html" class="bottom-nav-item" id="nav-profile">
                <div class="bottom-nav-icon">👤</div>
                <div class="bottom-nav-label">我的</div>
            </a>
        </div>
    </nav>
    `,
    
    // 4. 统一返回函数
    goBackFunction: `
        function goBack() {
            const referrer = document.referrer;
            if (referrer && (referrer.includes('交互原型') || referrer.includes('原型'))) {
                window.history.back();
            } else {
                window.location.href = '交互原型-首页.html';
            }
        }
    `
};

// 需要优化的页面列表
const pagesToOptimize = [
    '交互原型-课程中心.html',
    '交互原型-知识图谱.html',
    '交互原型-学习路径.html',
    '交互原型-数字化名片.html',
    '交互原型-学员等级.html',
    '交互原型-活动中心.html',
    '交互原型-社区首页.html',
    '交互原型-个人中心.html',
    '交互原型-学员准入.html',
    '交互原型-精准筛选.html',
    '交互原型-数据中台.html',
    '交互原型-SABC体系.html'
];

