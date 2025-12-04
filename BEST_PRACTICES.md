# 博客 SEO 最佳实践指南

## 📝 写作 SEO 友好的文章

### 1. Frontmatter 配置模板

每篇文章都应该包含以下 frontmatter：

```markdown
---
title: "清晰、吸引人的标题（50-60 字符）"
description: "简洁的描述，包含核心关键词（150-160 字符）"
pubDatetime: 2024-12-04T10:00:00Z
modDatetime: 2024-12-04T15:00:00Z  # 可选，更新时间
author: "Your Name"
featured: true  # 是否在首页展示
draft: false    # 是否为草稿
tags:
  - 主要标签
  - 次要标签
  - 相关标签
readingTime: "5 min read"  # 可选，手动设置阅读时长
ogImage: "/images/custom-og.jpg"  # 可选，自定义 OG 图片
canonicalURL: "https://example.com/original"  # 可选，规范链接
---
```

### 2. 标题优化

✅ **好的标题示例：**
- "2024 年 React 性能优化完整指南"
- "如何用 TypeScript 构建类型安全的 API"
- "JavaScript 异步编程：从回调到 async/await"

❌ **不好的标题示例：**
- "React 教程"
- "编程技巧"
- "学习笔记"

**标题要点：**
- 包含核心关键词
- 具体且有价值
- 控制在 50-60 字符
- 吸引点击但不夸大

### 3. 描述优化

```markdown
✅ 好的描述：
"详细介绍 React 18 并发特性的工作原理、使用场景和最佳实践，包含实际代码示例和性能对比数据。"

❌ 不好的描述：
"这是一篇关于 React 的文章。"
```

**描述要点：**
- 准确概括文章内容
- 包含 1-2 个关键词
- 控制在 150-160 字符
- 给读者明确的阅读预期

### 4. 内容结构

```markdown
# H1 主标题（每篇文章只有一个）

## H2 主要章节

### H3 子章节

#### H4 详细说明（慎用）

- 使用列表增强可读性
- 每个要点简洁明了
- 保持层次清晰

代码示例要有注释：
\`\`\`javascript
// 清晰的注释说明代码作用
function example() {
  // ...
}
\`\`\`
```

### 5. 关键词使用

- 标题中包含主关键词
- 前 100 字中出现主关键词
- 全文自然使用相关关键词
- 避免关键词堆砌
- 关键词密度保持在 1-2%

### 6. 内部链接

```markdown
相关阅读：
- [React Hooks 完整指南](/posts/react-hooks-guide)
- [TypeScript 最佳实践](/posts/typescript-best-practices)

在正文中自然引用：
如我们在[上一篇文章](/posts/previous-article)中讨论的...
```

### 7. 图片优化

```markdown
![清晰描述图片内容的 alt 文本](./images/descriptive-name.jpg)

图片命名：
✅ react-performance-comparison.jpg
❌ IMG_1234.jpg

alt 文本：
✅ "React 18 与 React 17 性能对比图表"
❌ "图片" 或空白
```

## 🎯 标签策略

### 标签选择原则

1. **主标签**（1-2个）：核心技术或主题
   - JavaScript, React, TypeScript, Python 等

2. **次要标签**（2-3个）：具体方向
   - 性能优化, 最佳实践, 教程, 源码分析 等

3. **相关标签**（1-2个）：相关技术
   - Web开发, 前端工程化, 测试 等

### 标签命名规范

- 使用统一的命名规范
- 避免同义词标签（如 "JS" 和 "JavaScript"）
- 保持标签数量在 3-6 个
- 定期整理和合并相似标签

## 📊 性能优化

### 图片优化

1. **压缩图片**
   - 使用 TinyPNG、ImageOptim 等工具
   - 目标：减少 70-80% 体积

2. **使用现代格式**
   - WebP 优先
   - 提供 fallback 格式

3. **响应式图片**
   ```html
   <picture>
     <source srcset="image-large.webp" media="(min-width: 1200px)">
     <source srcset="image-medium.webp" media="(min-width: 768px)">
     <img src="image-small.jpg" alt="描述">
   </picture>
   ```

4. **懒加载**
   ```html
   <img src="image.jpg" loading="lazy" alt="描述">
   ```

### 代码优化

1. **代码块不要过长**
   - 超过 50 行考虑拆分
   - 只展示关键部分
   - 提供完整代码的链接

2. **避免大文件**
   - 单篇文章不超过 300KB
   - 合理分页长文章

## 🔍 SEO Checklist

每篇文章发布前检查：

- [ ] 标题包含关键词且吸引人
- [ ] 描述简洁且信息丰富
- [ ] 至少 3 个相关标签
- [ ] 所有图片都有 alt 文本
- [ ] 代码块都有语法高亮
- [ ] 包含内部链接
- [ ] 包含外部权威来源链接
- [ ] 移动端显示正常
- [ ] 阅读时长 5-15 分钟
- [ ] 没有拼写错误
- [ ] 段落间距合理
- [ ] 有清晰的目录结构

## 📈 内容策略

### 文章类型

1. **教程类**（最受欢迎）
   - 步骤清晰
   - 包含代码示例
   - 可复现的结果

2. **深度分析**
   - 源码解析
   - 原理剖析
   - 对比评测

3. **最佳实践**
   - 经验总结
   - 避坑指南
   - 模式汇总

4. **快速参考**
   - Cheatsheet
   - API 速查
   - 命令大全

### 发布频率

- 质量优于数量
- 建议：每周 1-2 篇高质量文章
- 定期更新旧文章

### 更新策略

```markdown
---
modDatetime: 2024-12-04T15:00:00Z
---

> **更新说明（2024-12-04）：**
> - 添加了 React 19 的新特性
> - 更新了性能测试数据
> - 修正了过时的 API 用法
```

## 🚀 推广技巧

### 社交媒体

1. **Twitter/X**
   - 发布文章摘要
   - 使用相关话题标签
   - @提及相关账号

2. **Reddit**
   - 找到相关 subreddit
   - 参与讨论
   - 提供价值，非纯推广

3. **Dev.to / 掘金**
   - 同步发布
   - 添加 canonical 链接
   - 互动评论

### 技术社区

- Stack Overflow 回答问题时引用
- GitHub 项目的 README
- 技术论坛的签名档

## 📝 Markdown 技巧

### 表格

```markdown
| 特性 | React | Vue | Angular |
|------|-------|-----|---------|
| 学习曲线 | 中等 | 简单 | 陡峭 |
| 性能 | 优秀 | 优秀 | 良好 |
```

### 提示框

```markdown
> **注意：** 这是一个重要提示

> **提示：** 这是一个有用的建议

> **警告：** 这可能会导致问题
```

### 代码高亮

\`\`\`javascript
// 使用语言标识符
const example = "code here";
\`\`\`

支持的语言：
- javascript / js
- typescript / ts
- python / py
- bash / shell
- html
- css
- json
- markdown / md

## 🔧 常用工具

### SEO 检查
- Google Search Console
- Lighthouse
- Screaming Frog

### 关键词研究
- Google Keyword Planner
- Ahrefs
- SEMrush
- Ubersuggest

### 图片优化
- TinyPNG
- ImageOptim
- Squoosh

### 写作辅助
- Grammarly
- Hemingway Editor
- LanguageTool

## 📚 参考资源

- [Google SEO 指南](https://developers.google.com/search/docs)
- [Moz SEO 学习中心](https://moz.com/learn/seo)
- [Schema.org 文档](https://schema.org/)
- [MDN Web 文档](https://developer.mozilla.org/)

---

**记住：内容为王，用户体验至上！**

优秀的文章应该：
1. 解决实际问题
2. 提供可操作的建议
3. 包含具体示例
4. 保持准确和最新
5. 易于阅读和理解
