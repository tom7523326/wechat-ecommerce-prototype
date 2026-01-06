# 乡村数字化经营生态赋能平台 - 设计系统

## Design System v2.0

---

## 一、设计原则（Design Principles）

### 1. 清晰性（Clarity）
> 复杂的系统，简单的表达

- 信息架构清晰，用户能快速找到所需功能
- 关键数据突出显示，次要信息收纳有序
- 操作路径明确，减少用户思考成本

### 2. 一致性（Consistency）
> 统一的语言，连贯的体验

- 视觉元素统一（颜色、字体、图标、圆角）
- 交互模式统一（点击、滑动、长按）
- 文案风格统一（友好、专业、简洁）

### 3. 高效性（Efficiency）
> 最少的步骤，最快的结果

- 减少操作步骤（3步内完成核心任务）
- 智能预填充和推荐
- 快捷入口和手势操作

### 4. 包容性（Inclusivity）
> 服务不同背景的用户

- 考虑不同年龄层用户（25-50岁）
- 考虑不同数字化水平（从新手到专家）
- 支持无障碍访问（对比度、字体大小）

### 5. 愉悦性（Delight）
> 超出预期的体验

- 适度的动效和反馈
- 成就感和荣誉感设计
- 温暖的文案和鼓励

---

## 二、视觉设计（Visual Design）

### 2.1 色彩系统（Color Palette）

#### 主色调
```scss
// 微信绿（品牌色）
$primary-color: #07C160;
$primary-hover: #06AD56;
$primary-active: #059A4D;
$primary-light: #E6F7F0;
$primary-lighter: #F0FAF5;

// 使用场景
- 主按钮
- 品牌标识
- 强调元素
- 成功状态
```

#### 分层等级色
```scss
// S级 - 金色（生态共建）
$level-s: #FFB800;
$level-s-light: #FFF7E6;
$level-s-gradient: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);

// A级 - 橙色（标杆储备）
$level-a: #FF6B00;
$level-a-light: #FFF2E8;
$level-a-gradient: linear-gradient(135deg, #FF8C00 0%, #FF6B00 100%);

// B级 - 蓝色（能力提升）
$level-b: #1890FF;
$level-b-light: #E6F7FF;
$level-b-gradient: linear-gradient(135deg, #40A9FF 0%, #1890FF 100%);

// C级 - 灰色（基础入门）
$level-c: #8C8C8C;
$level-c-light: #F5F5F5;
$level-c-gradient: linear-gradient(135deg, #BFBFBF 0%, #8C8C8C 100%);
```

#### 功能色
```scss
$success: #52C41A;    // 成功
$warning: #FAAD14;    // 警告
$error: #FF4D4F;      // 错误
$info: #1890FF;       // 信息
$link: #1890FF;       // 链接
```

#### 中性色
```scss
$text-primary: #262626;      // 标题、主要文字
$text-secondary: #595959;    // 次要文字
$text-tertiary: #8C8C8C;     // 辅助文字
$text-disabled: #BFBFBF;     // 禁用文字

$border-base: #D9D9D9;       // 边框
$border-light: #F0F0F0;      // 浅边框
$border-dark: #BFBFBF;       // 深边框

$background: #FFFFFF;        // 纯白背景
$background-light: #FAFAFA;  // 浅色背景
$background-dark: #F5F5F5;   // 深色背景
```

### 2.2 字体系统（Typography）

#### 字体家族
```css
font-family: 
  -apple-system,
  BlinkMacSystemFont,
  "Segoe UI",
  "PingFang SC",
  "Hiragino Sans GB",
  "Microsoft YaHei",
  "Helvetica Neue",
  Arial,
  sans-serif;
```

#### 字体层级
```scss
// 特大标题（数据大屏、落地页）
$font-size-hero: 48px;
$line-height-hero: 64px;
$font-weight-hero: 700;

// 一级标题（页面主标题）
$font-size-h1: 32px;
$line-height-h1: 44px;
$font-weight-h1: 600;

// 二级标题（区块标题）
$font-size-h2: 24px;
$line-height-h2: 32px;
$font-weight-h2: 600;

// 三级标题（卡片标题）
$font-size-h3: 20px;
$line-height-h3: 28px;
$font-weight-h3: 600;

// 四级标题（小标题）
$font-size-h4: 16px;
$line-height-h4: 24px;
$font-weight-h4: 600;

// 正文（主要内容）
$font-size-body: 14px;
$line-height-body: 22px;
$font-weight-body: 400;

// 辅助文字（说明、时间戳）
$font-size-caption: 12px;
$line-height-caption: 20px;
$font-weight-caption: 400;

// 小字（角标、提示）
$font-size-small: 11px;
$line-height-small: 18px;
```

### 2.3 间距系统（Spacing）

基于 8px Grid System

```scss
$spacing-xs: 4px;    // 极小间距（图标与文字）
$spacing-sm: 8px;    // 小间距（元素间）
$spacing-md: 16px;   // 中间距（组件间）
$spacing-lg: 24px;   // 大间距（模块间）
$spacing-xl: 32px;   // 特大间距（区块间）
$spacing-xxl: 48px;  // 超大间距（页面分隔）
```

### 2.4 圆角系统（Border Radius）

```scss
$radius-sm: 4px;     // 标签、徽章
$radius-md: 8px;     // 按钮、输入框
$radius-lg: 12px;    // 卡片
$radius-xl: 16px;    // 大卡片
$radius-round: 50%;  // 圆形（头像、图标按钮）
```

### 2.5 阴影系统（Shadows）

```scss
// 卡片阴影（默认）
$shadow-card: 0 2px 8px rgba(0, 0, 0, 0.1);

// 悬浮阴影（hover状态）
$shadow-hover: 0 4px 16px rgba(0, 0, 0, 0.15);

// 强调阴影（模态框）
$shadow-modal: 0 8px 32px rgba(0, 0, 0, 0.2);

// 浮动按钮阴影
$shadow-fab: 0 6px 16px rgba(7, 193, 96, 0.3);
```

---

## 三、组件库（Component Library）

### 3.1 按钮组件（Button）

#### 类型
```
主按钮（Primary）：实心，微信绿，强调操作
次按钮（Secondary）：空心，灰色边框，次要操作
文字按钮（Text）：无边框，辅助操作
危险按钮（Danger）：红色，删除等危险操作
```

#### 尺寸
```
大号：高度48px，内边距16px 32px
默认：高度40px，内边距12px 24px
小号：高度32px，内边距8px 16px
```

#### 状态
```
默认：正常显示
悬停：背景加深10%，轻微抬起
点击：scale(0.98)，100ms
禁用：灰色，不可点击
加载：loading动画
```

### 3.2 卡片组件（Card）

#### 类型
```
数据卡片：展示关键指标
信息卡片：展示详细内容
列表卡片：展示列表数据
交互卡片：可点击跳转
```

#### 结构
```html
<card>
  <card-header>
    <title>标题</title>
    <action>操作按钮</action>
  </card-header>
  <card-body>
    内容区域
  </card-body>
  <card-footer>
    次要信息
  </card-footer>
</card>
```

### 3.3 徽章组件（Badge）

#### 等级徽章
```
S级：金色徽章，👑图标
A级：橙色徽章，⭐⭐⭐图标
B级：蓝色徽章，⭐⭐图标
C级：灰色徽章，⭐图标
```

#### 状态徽章
```
进行中：橙色，#FAAD14
已完成：绿色，#52C41A
未开始：灰色，#8C8C8C
```

### 3.4 进度条组件（Progress）

#### 类型
```
线性进度条：常规进度展示
环形进度条：百分比展示
阶梯进度条：分步骤展示
```

#### 样式
```scss
高度：8px / 12px
背景：#F0F0F0
填充：渐变色（根据等级）
动画：平滑过渡，500ms
```

### 3.5 表单组件（Form）

#### 输入框
```
高度：44px（移动端）/ 40px（桌面端）
内边距：12px 16px
边框：1px solid #D9D9D9
圆角：8px
焦点：边框变为主色，外发光
```

#### 选择器
```
下拉选择：原生select（移动端）/ 自定义dropdown（桌面端）
单选/多选：圆形/方形勾选框，18px
开关：iOS风格switch，40x24px
```

### 3.6 数据可视化组件

#### 图表类型
```
折线图：趋势分析
柱状图：数据对比
饼图：占比分析
雷达图：能力模型
环形图：进度展示
```

#### 设计规范
```
图表颜色：使用色彩系统定义的颜色
图表圆角：4px
图表动画：渐进式绘制，800ms
图表交互：hover显示详情，click跳转
```

---

## 四、布局系统（Layout System）

### 4.1 栅格系统（Grid System）

#### 桌面端（≥1200px）
```
列数：12列
间距：24px
最大宽度：1200px
左右边距：24px
```

#### 平板端（768px-1199px）
```
列数：8列
间距：16px
最大宽度：100%
左右边距：16px
```

#### 移动端（<768px）
```
列数：4列
间距：12px
最大宽度：100%
左右边距：16px
```

### 4.2 响应式断点

```scss
$screen-xs: 480px;   // 小屏手机
$screen-sm: 768px;   // 大屏手机/小平板
$screen-md: 1024px;  // 平板
$screen-lg: 1200px;  // 桌面
$screen-xl: 1600px;  // 大屏桌面
```

---

## 五、交互设计（Interaction Design）

### 5.1 手势操作

```
点击（Tap）：基础交互
长按（Long Press）：显示更多选项
滑动（Swipe）：翻页、删除
双击（Double Tap）：点赞
下拉（Pull to Refresh）：刷新数据
上拉（Pull to Load）：加载更多
```

### 5.2 动效规范

#### 时长
```
快速：100ms（微交互）
常规：200-300ms（页面切换）
慢速：500ms+（数据动画）
```

#### 缓动曲线
```
ease-out：fade-in, scale-up
ease-in-out：slide, move
ease-in：fade-out, scale-down
linear：progress, loading
```

#### 动效类型
```scss
// 淡入淡出
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

// 滑入滑出
@keyframes slideInUp {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

// 缩放
@keyframes scaleIn {
  from { transform: scale(0.9); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

// 脉冲（强调）
@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}
```

### 5.3 状态反馈

#### 加载状态
```
骨架屏（Skeleton）：页面加载
进度条（Progress）：数据上传
加载动画（Spinner）：等待响应
```

#### 成功/失败反馈
```
Toast提示：2-3秒自动消失
模态框（Modal）：需要确认的操作
结果页：完整的成功/失败页面
```

---

## 六、图标系统（Icon System）

### 6.1 图标风格
- 风格：线性图标（outline）
- 粗细：1.5px
- 尺寸：16px, 20px, 24px, 32px
- 颜色：继承父元素颜色

### 6.2 常用图标
```
首页：🏠
学习：📚
数据：📊
资源：🤝
社群：💬
个人：👤
设置：⚙️
消息：🔔
搜索：🔍
分享：↗️
点赞：👍
评论：💬
等级徽章：👑⭐
```

---

## 七、文案规范（Content Guidelines）

### 7.1 文案原则

#### 1. 友好亲切
```
❌ "用户未完成必填项"
✅ "还差一点点，请完善信息"

❌ "操作失败"
✅ "出了点小问题，请稍后再试"
```

#### 2. 简洁明确
```
❌ "点击此处进行下一步操作"
✅ "下一步"

❌ "您确定要执行此操作吗？"
✅ "确认删除吗？"
```

#### 3. 行动导向
```
❌ "课程"
✅ "开始学习"

❌ "数据"
✅ "查看数据"
```

### 7.2 文案模板

#### 空状态
```
标题：描述当前状态
说明：简短的解释
操作：引导用户行动

示例：
还没有课程记录
开始第一门课程，开启成长之旅
[浏览课程]
```

#### 错误提示
```
标题：简短的错误描述
说明：可能的原因和解决方法
操作：明确的操作按钮

示例：
网络连接失败
请检查网络设置后重试
[重试] [取消]
```

---

## 八、移动端设计（Mobile Design）

### 8.1 触摸目标尺寸

```
最小触摸区域：44x44px（iOS规范）
推荐触摸区域：48x48px
按钮最小高度：44px
列表项最小高度：56px
```

### 8.2 移动端优化

#### 导航
```
顶部导航：固定，最多3个主要入口
底部Tab：5个主要功能入口
汉堡菜单：次要功能收纳
```

#### 布局
```
单列布局为主
卡片间距：16px
屏幕边距：16px
内容最大宽度：无限制
```

#### 操作
```
支持手势操作
支持下拉刷新
支持上拉加载
支持侧滑返回
```

---

## 九、无障碍设计（Accessibility）

### 9.1 颜色对比度

```
正常文字：至少4.5:1
大号文字：至少3:1
图形和UI组件：至少3:1
```

### 9.2 可读性

```
最小字号：12px（移动端14px）
行高：1.5-2倍字号
段落间距：1em
```

### 9.3 交互可达性

```
所有功能支持键盘操作
明确的焦点状态
清晰的错误提示
屏幕阅读器支持
```

---

## 十、设计资源（Design Resources）

### 10.1 设计工具
- **Figma**：UI设计、原型设计
- **Sketch**：UI设计（备选）
- **Principle**：交互动效
- **Zeplin**：设计交付

### 10.2 组件库
- **Ant Design**：桌面端参考
- **Vant**：移动端参考
- **Element Plus**：管理后台

### 10.3 图标库
- **Ant Design Icons**
- **Feather Icons**
- **Font Awesome**（补充）

---

## 十一、设计交付规范

### 11.1 设计文件命名
```
页面设计：[模块]-[页面名]-[版本].fig
组件设计：Component-[组件名]-[版本].fig
图标设计：Icon-[类别]-[版本].fig
```

### 11.2 切图规范
```
格式：PNG（透明）/SVG（图标）
倍率：@1x, @2x, @3x
命名：icon_name_size@2x.png
```

### 11.3 标注规范
```
尺寸标注：px单位
颜色标注：Hex格式
间距标注：上下左右明确
状态说明：默认/悬停/点击/禁用
```

---

## 十二、品牌元素（Brand Elements）

### 12.1 Logo设计
```
主Logo：文字+图形
图标Logo：纯图形（用于小尺寸）
颜色：微信绿
最小使用尺寸：24x24px
```

### 12.2 插画风格
```
风格：扁平化、温暖、乡村元素
颜色：品牌色+辅助色
场景：空状态、引导页、成功页
```

### 12.3 摄影风格
```
内容：乡村、农产品、学员实拍
风格：真实、自然、温暖
处理：轻度调色，保持真实感
```

---

## 十三、质量检查清单（Quality Checklist）

### 设计质量
- [ ] 符合设计系统规范
- [ ] 视觉层级清晰
- [ ] 颜色对比度达标
- [ ] 字体大小合适
- [ ] 间距统一规范
- [ ] 响应式适配完整

### 交互质量
- [ ] 操作路径清晰
- [ ] 反馈及时明确
- [ ] 状态变化清楚
- [ ] 错误处理完善
- [ ] 边界情况考虑

### 性能质量
- [ ] 页面加载速度
- [ ] 动画流畅度
- [ ] 图片优化
- [ ] 代码规范

---

## 十四、更新日志（Changelog）

### v2.0（2024-01-15）
- 全面升级设计系统
- 新增SABC分层色彩体系
- 完善组件库规范
- 增加移动端优化标准

### v1.0（2024-01-01）
- 初始版本
- 基础色彩和字体系统
- 核心组件定义

---

**维护者**：产品设计团队  
**最后更新**：2024年1月  
**版本**：v2.0

