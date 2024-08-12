import type { CollectionEntry } from "astro:content";

interface SortOptions {
  filterDrafts?: boolean;
  filterSnippets?: boolean;
  filterFurutePosts?: boolean;
  sortByDate?: boolean;
  sortDirection?: "ASC" | "DESC";
  limit?: number;
}

/**
 * Ordena y filtra una colección de publicaciones.
 * @param posts - La colección de publicaciones a ordenar y filtrar.
 * @param options - Opciones de orden y filtrado (opcional). Si no se proporciona, se utilizan los valores por defecto:
 *   - filterDrafts: true
 *   - filterFurutePosts: true
 *   - sortByDate: true
 *   - randomize: false
 *   - limit: undefined
 * @returns La colección de publicaciones ordenada y filtrada.
 */
export function sortPosts(
  posts: CollectionEntry<"post">[],
  options?: SortOptions,
) {
  const {
    filterDrafts,
    filterSnippets,
    filterFurutePosts,
    sortByDate,
    sortDirection,
    limit,
  } = {
    // Default sorting values
    ...{
      filterDrafts: true,
      filterSnippets: true,
      filterFurutePosts: true,
      sortByDate: true,
      sortDirection: "DESC",
    },
    ...options,
  };

  // Filters
  const filteredPosts = posts.reduce((acc: CollectionEntry<"post">[], post) => {
    const { date: date, draft, snippet } = post.data;

    // Drafts
    if (filterDrafts && draft) return acc;

    // Future posts
    if (filterFurutePosts && new Date(date) > new Date()) return acc;

    // NonPublished
    if (filterSnippets && snippet) return acc;

    acc.push(post);

    return acc;
  }, []);

  // Sort Date
  if (sortByDate) {
    filteredPosts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
    if (sortDirection === "ASC") filteredPosts.reverse();
  }

  // Limit
  if (limit) {
    return filteredPosts.slice(0, limit);
  }

  return filteredPosts;
}
