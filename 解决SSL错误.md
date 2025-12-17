# 解决手机端SSL协议错误（ERR_SSL_PROTOCOL_ERROR）

## 问题描述
- 电脑端可以正常访问
- 苹果手机Chrome浏览器显示：ERR_SSL_PROTOCOL_ERROR
- 错误信息：此网站无法提供安全连接

## 可能的原因
1. GitHub Pages的SSL证书在手机上验证失败
2. 手机浏览器的SSL/TLS版本不兼容
3. 手机网络环境的SSL拦截（如公司Wi-Fi、VPN等）
4. GitHub Pages的SSL配置问题

## 解决方案

### 方案一：清除浏览器SSL状态（推荐先试这个）

**iPhone Chrome浏览器**：
1. 打开Chrome浏览器
2. 点击右上角三个点（菜单）
3. 设置 → 隐私和安全 → 清除浏览数据
4. 选择"高级"标签
5. 勾选"Cookie和网站数据"、"缓存的图片和文件"
6. 时间范围选择"全部时间"
7. 点击"清除数据"
8. 重新访问网站

### 方案二：检查GitHub Pages的SSL设置

1. 访问：https://github.com/tom7523326/wechat-ecommerce-prototype/settings/pages
2. 查看"Enforce HTTPS"选项
3. 如果已启用，尝试：
   - 先取消勾选"Enforce HTTPS"
   - 保存
   - 等待几分钟
   - 再重新启用"Enforce HTTPS"
   - 保存

### 方案三：尝试使用HTTP访问（临时测试）

**注意**：这只是为了测试，不推荐长期使用

尝试访问：
```
http://tom7523326.github.io/wechat-ecommerce-prototype/
```

如果HTTP可以访问，说明问题确实是SSL相关。

### 方案四：使用Safari浏览器

iPhone上尝试使用Safari浏览器访问：
1. 打开Safari
2. 访问：https://tom7523326.github.io/wechat-ecommerce-prototype/
3. 如果Safari可以访问，说明是Chrome的SSL问题

### 方案五：检查网络环境

1. **切换网络**：
   - 从Wi-Fi切换到移动数据，或反之
   - 某些Wi-Fi网络可能拦截SSL连接

2. **关闭VPN**：
   - 如果使用了VPN，尝试关闭后再访问

3. **检查代理设置**：
   - 设置 → Wi-Fi → 当前网络 → HTTP代理
   - 确认没有设置代理

### 方案六：更新浏览器

1. 确保Chrome浏览器是最新版本
2. 前往App Store更新Chrome

### 方案七：重置网络设置（最后手段）

如果以上都不行：
1. iPhone设置 → 通用 → 传输或还原iPhone
2. 还原 → 还原网络设置
3. 重新连接Wi-Fi

## 快速测试步骤

1. ✅ 先清除Chrome的浏览数据和缓存
2. ✅ 尝试使用Safari浏览器访问
3. ✅ 切换网络（Wi-Fi ↔ 移动数据）
4. ✅ 检查GitHub Pages的SSL设置
5. ✅ 尝试HTTP访问（确认是否是SSL问题）

## 如果还是不行

请告诉我：
1. Safari浏览器可以访问吗？
2. 切换网络后可以访问吗？
3. 使用移动数据可以访问吗？

