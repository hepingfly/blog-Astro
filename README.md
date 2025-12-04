# 🚀 Astro Paper Blog

一个高质量、SEO 优化的个人技术博客，基于 Astro 构建。

## ✨ 特性

### 核心功能
- ⚡ **极致性能** - Astro 静态站点生成，Lighthouse 满分
- 🎨 **现代设计** - 简洁优雅的 UI，支持深色模式
- 📱 **完全响应式** - 完美适配各种设备
- 🔍 **SEO 优化** - 完整的 meta、OG、Schema.org 支持
- 🏷️ **标签系统** - 自动标签分类和筛选
- 📊 **自动 Sitemap** - 自动生成 sitemap.xml
- 🤖 **Robots.txt** - SEO 友好的爬虫配置
- 🔎 **全文搜索** - 基于 Fuse.js 的客户端搜索
- 📖 **阅读时长** - 自动计算文章阅读时间
- 🎯 **代码高亮** - Shiki 语法高亮，支持多种主题

### SEO 功能
- ✅ Meta 标签自动注入
- ✅ Canonical URL 配置
- ✅ Open Graph (OG) 标签
- ✅ Twitter Card 配置
- ✅ JSON-LD 结构化数据
- ✅ 自动生成 sitemap.xml
- ✅ 自动生成 robots.txt
- ✅ RSS Feed 支持

## 🚀 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 配置站点信息

编辑 `src/config.ts`：

```typescript
export const SITE: Site = {
  website: "https://yourdomain.com/", // 替换为你的域名
  author: "Your Name",                // 替换为你的名字
  profile: "https://github.com/yourname",
  desc: "你的博客描述",
  title: "你的博客标题",
  // ...
};
```

编辑 `astro.config.mjs`：

```javascript
export default defineConfig({
  site: "https://hepingfly.github.io",     // 替换为你的域名
  base: "/blog-Astro",                     // 仓库名
  // ...
});
```

### 3. 本地开发

```bash
npm run dev
```

访问 http://localhost:4321

### 4. 构建

```bash
npm run build
```

### 5. 预览构建结果

```bash
npm run preview
```

## ✍️ 写作指南

### 创建新文章

在 `src/content/blog/` 目录下创建新的 `.md` 或 `.mdx` 文件：

```markdown
---
title: "文章标题"
description: "文章描述"
pubDatetime: 2024-12-04T10:00:00Z
author: "Your Name"
featured: false
draft: false
tags:
  - 标签1
  - 标签2
---

文章内容...
```

### Frontmatter 字段说明

详见 [FRONTMATTER_TEMPLATE.md](./FRONTMATTER_TEMPLATE.md)

### SEO 最佳实践

详见 [BEST_PRACTICES.md](./BEST_PRACTICES.md)

## 🌐 部署

### GitHub Pages（已配置）

项目已配置 GitHub Actions 自动部署到 GitHub Pages。

**推送代码即可自动部署：**

```bash
git add .
git commit -m "Update blog"
git push origin main
```

部署地址：https://hepingfly.github.io/blog-Astro/

### Vercel（可选）

1. 访问 [Vercel](https://vercel.com)
2. 导入你的 GitHub 仓库
3. Framework Preset 选择 Astro
4. 点击 Deploy

## 🛠️ 技术栈

- **框架**: [Astro](https://astro.build) 4.x
- **样式**: [Tailwind CSS](https://tailwindcss.com) 3.x
- **Markdown**: [MDX](https://mdxjs.com/) 支持
- **搜索**: [Fuse.js](https://fusejs.io)
- **代码高亮**: [Shiki](https://shiki.matsu.io)
- **部署**: GitHub Pages / Vercel

## 📁 项目结构

```
blog-Astro/
├── src/
│   ├── components/        # Astro 组件
│   ├── content/          # 博客文章（Markdown）
│   ├── layouts/          # 页面布局
│   ├── pages/            # 路由页面
│   ├── styles/           # 全局样式
│   ├── utils/            # 工具函数
│   ├── config.ts         # 站点配置
│   └── types.ts          # TypeScript 类型
├── public/               # 静态资源
├── .github/workflows/    # GitHub Actions
├── astro.config.mjs      # Astro 配置
├── tailwind.config.cjs   # Tailwind 配置
└── package.json          # 依赖配置
```

## 📄 许可证

MIT License

---

**Happy Blogging! 🎉**