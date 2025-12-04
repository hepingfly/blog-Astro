// 计算文章阅读时长（分钟）
export function getReadingTime(content: string): string {
  const wordsPerMinute = 200; // 平均阅读速度

  // 移除 markdown 语法
  const text = content
    .replace(/```[\s\S]*?```/g, "") // 移除代码块
    .replace(/`[^`]*`/g, "") // 移除行内代码
    .replace(/[#*_~[\]()]/g, "") // 移除 markdown 标记
    .trim();

  // 中文字符数 + 英文单词数
  const chineseChars = (text.match(/[\u4e00-\u9fa5]/g) || []).length;
  const englishWords = text
    .replace(/[\u4e00-\u9fa5]/g, "")
    .split(/\s+/)
    .filter(word => word.length > 0).length;

  // 估算总阅读时间
  const totalWords = chineseChars + englishWords;
  const minutes = Math.ceil(totalWords / wordsPerMinute);

  return `${minutes} min read`;
}
