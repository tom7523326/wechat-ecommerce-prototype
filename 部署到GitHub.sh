#!/bin/bash

# 微信电商能力提升平台 - GitHub Pages 部署脚本

echo "═══════════════════════════════════════════════════════"
echo "   微信电商能力提升平台 - GitHub Pages 部署"
echo "═══════════════════════════════════════════════════════"
echo ""

# 检查是否已设置远程仓库
if git remote -v | grep -q "origin"; then
    echo "✅ 已检测到远程仓库"
    git remote -v
    echo ""
    echo "正在推送到GitHub..."
    git branch -M main
    git push -u origin main
    echo ""
    echo "✅ 推送完成！"
    echo ""
    echo "📝 下一步："
    echo "1. 访问你的GitHub仓库页面"
    echo "2. 进入 Settings → Pages"
    echo "3. 选择 Source: Deploy from a branch"
    echo "4. 选择 Branch: main，文件夹: / (root)"
    echo "5. 点击 Save"
    echo "6. 等待几分钟，访问 https://你的用户名.github.io/仓库名"
else
    echo "⚠️  尚未设置远程仓库"
    echo ""
    echo "请先完成以下步骤："
    echo ""
    echo "1. 访问 https://github.com/new 创建新仓库"
    echo "2. 仓库名称建议：wechat-ecommerce-prototype"
    echo "3. 选择 Public（公开）或 Private（私有）"
    echo "4. 不要勾选 'Initialize this repository with a README'"
    echo "5. 创建仓库后，复制仓库地址（如：https://github.com/你的用户名/仓库名.git）"
    echo ""
    echo "然后运行以下命令："
    echo ""
    echo "git remote add origin https://github.com/你的用户名/仓库名.git"
    echo "git branch -M main"
    echo "git push -u origin main"
    echo ""
    echo "或者直接运行此脚本，它会提示你输入仓库地址"
    echo ""
    read -p "请输入GitHub仓库地址（或按Enter跳过）: " repo_url
    
    if [ -n "$repo_url" ]; then
        echo ""
        echo "正在添加远程仓库..."
        git remote add origin "$repo_url"
        git branch -M main
        echo ""
        echo "正在推送到GitHub..."
        git push -u origin main
        echo ""
        echo "✅ 推送完成！"
        echo ""
        echo "📝 下一步："
        echo "1. 访问你的GitHub仓库页面"
        echo "2. 进入 Settings → Pages"
        echo "3. 选择 Source: Deploy from a branch"
        echo "4. 选择 Branch: main，文件夹: / (root)"
        echo "5. 点击 Save"
        echo "6. 等待几分钟，访问 https://你的用户名.github.io/仓库名"
    else
        echo "已跳过，请手动执行上述步骤"
    fi
fi

