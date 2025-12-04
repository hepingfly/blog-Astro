import { slug as slugger } from "github-slugger";

export const slugifyStr = (str: string) => slugger(str);

export const slugify = (post: {
  slug?: string;
  title: string;
}) => {
  return post.slug ? slugger(post.slug) : slugger(post.title);
};

export const slugifyAll = (arr: string[]) => arr.map(str => slugifyStr(str));
