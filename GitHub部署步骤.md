# GitHub Pages 部署步骤

## ✅ 第一步：创建GitHub仓库

1. 访问 https://github.com/new
2. **Repository name（仓库名称）**：建议使用 `wechat-ecommerce-prototype` 或 `wechat-ecommerce-demo`
3. **Description（描述）**：可选，填写 "微信电商能力提升平台原型"
4. **Visibility（可见性）**：
   - 选择 **Public（公开）** - 免费，任何人都可以访问
   - 或选择 **Private（私有）** - 需要GitHub Pro（付费）
5. **⚠️ 重要**：不要勾选以下选项：
   - ❌ Add a README file
   - ❌ Add .gitignore
   - ❌ Choose a license
6. 点击 **Create repository（创建仓库）**

---

## ✅ 第二步：推送代码到GitHub

在终端中执行以下命令（已自动完成部分）：

```bash
# 进入项目目录（如果不在的话）
cd "/Users/tangshoulin/微信电商能力提升"

# 添加远程仓库（将 YOUR_USERNAME 和 REPO_NAME 替换为你的实际值）
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# 设置主分支为 main
git branch -M main

# 推送到GitHub
git push -u origin main
```

**或者直接运行部署脚本**：
```bash
chmod +x 部署到GitHub.sh
./部署到GitHub.sh
```

---

## ✅ 第三步：启用GitHub Pages

1. 访问你的GitHub仓库页面（如：`https://github.com/你的用户名/仓库名`）
2. 点击仓库顶部的 **Settings（设置）** 标签
3. 在左侧菜单中找到 **Pages** 选项
4. 在 **Source（源）** 部分：
   - 选择 **Deploy from a branch**
   - **Branch（分支）**：选择 `main`
   - **Folder（文件夹）**：选择 `/ (root)`
5. 点击 **Save（保存）**
6. 等待1-2分钟，GitHub会自动构建和部署

---

## ✅ 第四步：访问你的网站

部署完成后，你的网站地址将是：
```
https://你的用户名.github.io/仓库名
```

例如：
- 用户名：`zhangsan`
- 仓库名：`wechat-ecommerce-prototype`
- 访问地址：`https://zhangsan.github.io/wechat-ecommerce-prototype`

---

## 📱 访问入口

- **索引页**：`https://你的域名/原型索引.html`
- **首页**：`https://你的域名/交互原型-首页.html`
- **根目录**：`https://你的域名/` （会自动跳转到索引页）

---

## 🔄 更新内容

如果需要更新内容：

```bash
# 修改文件后
git add .
git commit -m "更新内容描述"
git push
```

GitHub Pages会自动重新部署（通常需要1-2分钟）。

---

## ❓ 常见问题

**Q: 部署后显示404？**
A: 
- 检查仓库名称是否正确
- 确认已启用GitHub Pages（Settings → Pages）
- 等待几分钟让GitHub完成部署

**Q: 如何自定义域名？**
A: 在Settings → Pages中，可以设置Custom domain（需要域名DNS配置）

**Q: 可以设置私有仓库吗？**
A: 可以，但GitHub Pages对私有仓库需要GitHub Pro订阅（付费）

**Q: 部署需要多长时间？**
A: 通常1-5分钟，首次部署可能需要更长时间

---

## 🎉 完成！

部署成功后，你就可以分享链接给其他人查看了！



