import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://hepingfly.github.io/blog-Astro/", // 替换为你的完整域名
  author: "Your Name", // 替换为你的名字
  profile: "https://github.com/hepingfly", // 替换为你的个人主页
  desc: "一个高质量、SEO 优化的个人技术博客，分享编程、技术和生活感悟", // 站点描述
  title: "Astro Paper Blog", // 站点标题
  ogImage: "og-default.jpg", // OG 默认图片
  lightAndDarkMode: true, // 启用暗色模式
  postPerIndex: 4, // 首页显示文章数
  postPerPage: 6, // 每页显示文章数
  scheduledPostMargin: 15 * 60 * 1000, // 15 分钟
};

export const LOCALE = {
  lang: "zh-CN", // HTML lang 代码
  langTag: ["zh-CN"], // BCP 47 语言标签
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/hepingfly", // 替换为你的 GitHub
    linkTitle: `访问我的 GitHub`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/yourhandle", // 替换为你的 Twitter
    linkTitle: `关注我的 Twitter`,
    active: false,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/yourprofile", // 替换为你的 LinkedIn
    linkTitle: `访问我的 LinkedIn`,
    active: false,
  },
  {
    name: "Mail",
    href: "mailto:yourmail@example.com", // 替换为你的邮箱
    linkTitle: `发送邮件给我`,
    active: true,
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@yourchannel",
    linkTitle: `订阅我的 YouTube`,
    active: false,
  },
  {
    name: "Telegram",
    href: "https://t.me/yourusername",
    linkTitle: `联系我的 Telegram`,
    active: false,
  },
];
