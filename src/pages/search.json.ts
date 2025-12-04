import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import getSortedPosts from "@utils/getSortedPosts";
import { slugify } from "@utils/slugify";

export const GET: APIRoute = async () => {
  const posts = await getCollection("blog");
  const sortedPosts = getSortedPosts(posts);

  const searchData = sortedPosts.map(post => ({
    slug: slugify(post.data),
    data: {
      title: post.data.title,
      description: post.data.description,
      tags: post.data.tags,
    },
  }));

  return new Response(JSON.stringify(searchData), {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
