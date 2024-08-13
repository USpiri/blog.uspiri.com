import { sortPosts } from "@utils/sort";
import { getCollection } from "astro:content";

export async function GET({ request }: { request: Request }) {
  const posts = sortPosts(await getCollection("post"), { limit: 5 });
  const url = new URL(request.url);
  const data = posts.map((p) => {
    return {
      id: p.id,
      url: `${url.origin}/post/${p.slug}`,
      ...p.data,
    };
  });
  return new Response(JSON.stringify(data));
}
