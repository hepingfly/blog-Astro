/**
 * 获取带 BASE_URL 的完整路径
 * @param path 路径，如 "/posts" 或 "/about"
 * @returns 完整的 URL 路径
 */
export function getUrl(path: string): string {
  const baseUrl = import.meta.env.BASE_URL;
  const base = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;

  // 确保 path 以 / 开头
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;

  return `${base}${normalizedPath}`;
}
