# 博客文章 Frontmatter 模板

## 基础模板

```markdown
---
title: "文章标题（50-60 字符）"
description: "文章描述，包含核心关键词（150-160 字符）"
pubDatetime: 2024-12-04T10:00:00Z
author: "Your Name"
draft: false
tags:
  - 标签1
  - 标签2
  - 标签3
---

文章内容从这里开始...
```

## 完整模板

```markdown
---
# 必填字段
title: "文章标题（清晰、吸引人、包含关键词）"
description: "文章描述，简洁概括文章内容，包含 1-2 个核心关键词"
pubDatetime: 2024-12-04T10:00:00Z

# 可选但推荐
author: "Your Name"
featured: false
draft: false
tags:
  - 主要标签
  - 次要标签
  - 相关标签

# 高级选项
modDatetime: 2024-12-04T15:30:00Z  # 文章更新时间
readingTime: "5 min read"          # 自定义阅读时长
ogImage: "/images/custom-og.jpg"   # 自定义 OG 图片
canonicalURL: "https://example.com/original"  # 规范链接（转载时使用）
slug: "custom-url-slug"            # 自定义 URL（默认使用文件名）
---

## 文章标题

文章内容...
```

## 字段说明

### 必填字段

#### `title`
- **类型：** String
- **限制：** 50-60 字符最佳
- **说明：** 文章标题，会显示在页面标题、meta 标签、OG 标签中
- **示例：**
  ```yaml
  title: "2024 年 React 性能优化完整指南"
  ```

#### `description`
- **类型：** String
- **限制：** 150-160 字符最佳
- **说明：** 文章描述，用于 meta description 和搜索结果摘要
- **示例：**
  ```yaml
  description: "详细介绍 React 18 性能优化技巧，包括组件优化、渲染优化、打包优化等实战技巧，含完整代码示例。"
  ```

#### `pubDatetime`
- **类型：** Date (ISO 8601 格式)
- **说明：** 文章发布时间
- **示例：**
  ```yaml
  pubDatetime: 2024-12-04T10:00:00Z
  pubDatetime: 2024-12-04T10:00:00+08:00  # 带时区
  ```

### 推荐字段

#### `author`
- **类型：** String
- **默认值：** "Site Owner"（在 config.ts 中配置）
- **说明：** 文章作者
- **示例：**
  ```yaml
  author: "Zhang San"
  ```

#### `featured`
- **类型：** Boolean
- **默认值：** false
- **说明：** 是否在首页"精选文章"区域展示
- **示例：**
  ```yaml
  featured: true
  ```

#### `draft`
- **类型：** Boolean
- **默认值：** false
- **说明：** 是否为草稿（草稿不会在生产环境显示）
- **示例：**
  ```yaml
  draft: true  # 开发中
  draft: false # 已发布
  ```

#### `tags`
- **类型：** Array of Strings
- **默认值：** ["others"]
- **说明：** 文章标签，用于分类和 SEO
- **建议：** 3-6 个标签
- **示例：**
  ```yaml
  tags:
    - React
    - 性能优化
    - JavaScript
    - Web开发
  ```

### 高级字段

#### `modDatetime`
- **类型：** Date (ISO 8601 格式)
- **默认值：** null
- **说明：** 文章最后更新时间
- **示例：**
  ```yaml
  modDatetime: 2024-12-04T15:30:00Z
  ```

#### `readingTime`
- **类型：** String
- **默认值：** 自动计算
- **说明：** 文章阅读时长（可手动设置覆盖自动计算）
- **示例：**
  ```yaml
  readingTime: "8 min read"
  ```

#### `ogImage`
- **类型：** String
- **默认值：** "/og-default.jpg"
- **说明：** 自定义 Open Graph 图片路径
- **尺寸：** 建议 1200x630 像素
- **示例：**
  ```yaml
  ogImage: "/images/react-performance.jpg"
  ```

#### `canonicalURL`
- **类型：** String
- **默认值：** 当前页面 URL
- **说明：** 规范链接，用于指定文章的原始来源（转载时使用）
- **示例：**
  ```yaml
  canonicalURL: "https://original-site.com/article"
  ```

#### `slug`
- **类型：** String
- **默认值：** 文件名
- **说明：** 自定义 URL slug
- **示例：**
  ```yaml
  slug: "react-performance-guide-2024"
  ```

## 常见场景

### 1. 新文章

```markdown
---
title: "Vue 3 Composition API 完整指南"
description: "深入讲解 Vue 3 Composition API 的核心概念、使用方法和最佳实践，包含大量实战示例。"
pubDatetime: 2024-12-04T10:00:00Z
author: "Your Name"
featured: true
draft: false
tags:
  - Vue
  - Vue3
  - Composition API
  - 前端开发
---
```

### 2. 更新已有文章

```markdown
---
title: "Vue 3 Composition API 完整指南"
description: "深入讲解 Vue 3 Composition API 的核心概念、使用方法和最佳实践，包含大量实战示例。"
pubDatetime: 2024-11-01T10:00:00Z
modDatetime: 2024-12-04T15:30:00Z  # 添加更新时间
author: "Your Name"
featured: true
draft: false
tags:
  - Vue
  - Vue3
  - Composition API
  - 前端开发
---

> **更新说明（2024-12-04）：**
> - 添加了 Vue 3.4 的新特性
> - 更新了代码示例
> - 修正了部分描述
```

### 3. 草稿文章

```markdown
---
title: "TypeScript 5.0 新特性详解（进行中）"
description: "介绍 TypeScript 5.0 的新特性和改进"
pubDatetime: 2024-12-04T10:00:00Z
draft: true  # 标记为草稿
tags:
  - TypeScript
  - 编程语言
---

这篇文章还在编写中...
```

### 4. 转载文章

```markdown
---
title: "深入理解 JavaScript 闭包"
description: "详细讲解 JavaScript 闭包的原理、应用场景和常见陷阱"
pubDatetime: 2024-12-04T10:00:00Z
author: "Original Author"
canonicalURL: "https://original-blog.com/closures"  # 指向原文
draft: false
tags:
  - JavaScript
  - 闭包
  - 编程基础
---

> **声明：** 本文转载自 [原作者博客](https://original-blog.com/closures)，已获授权。
```

### 5. 系列文章

```markdown
---
title: "React 进阶系列（一）：深入理解 Hooks"
description: "React 进阶系列第一篇，深入探讨 React Hooks 的实现原理和最佳实践"
pubDatetime: 2024-12-04T10:00:00Z
featured: true
tags:
  - React
  - Hooks
  - 系列文章
  - 进阶教程
---

这是 React 进阶系列的第一篇文章。

**系列文章：**
1. **深入理解 Hooks**（本文）
2. [性能优化技巧](/posts/react-advanced-02)
3. [状态管理最佳实践](/posts/react-advanced-03)
```

## 快速开始

1. 复制基础模板
2. 填写必填字段
3. 根据需要添加可选字段
4. 检查 SEO 友好性
5. 预览并发布

## 注意事项

1. ✅ 日期使用 ISO 8601 格式
2. ✅ 标题控制在 60 字符以内
3. ✅ 描述控制在 160 字符以内
4. ✅ 至少使用 3 个相关标签
5. ✅ 草稿设置 `draft: true`
6. ✅ 重要文章设置 `featured: true`
7. ✅ 更新文章时添加 `modDatetime`

## 验证 Frontmatter

发布前检查：
- [ ] 所有必填字段都已填写
- [ ] 日期格式正确
- [ ] 标题和描述符合 SEO 要求
- [ ] 标签相关且准确
- [ ] draft 状态正确
- [ ] 如果是更新，添加了 modDatetime
