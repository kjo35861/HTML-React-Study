import { useQuery } from "@tanstack/react-query";

const requestPosts = async (page, size) => {
    const postsJson = localStorage.getItem("posts");
    const posts = !!postsJson ? JSON.parse(postsJson) : [];
    const startIndex = (page - 1) * size;
    const endIndex = startIndex + size;
    const filteringPosts = posts.slice(startIndex, endIndex);

    return filteringPosts;
}

export function usePosts(page, size) {

    return useQuery({
        queryKey: ["posts", page, size],
        queryFn: async () => {
            return await requestPosts(page, size)
        },
    });
}