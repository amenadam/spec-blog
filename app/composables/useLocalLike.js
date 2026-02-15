export const useLocalLike = () => {
  const liked = ref(
    process.client ? JSON.parse(localStorage.getItem("liked_posts")) || [] : [],
  );

  const isLiked = (id) => liked.value.includes(id);

  const toggleLike = async (id, likeApiFn, post) => {
    if (isLiked(id)) return;

    const success = await likeApiFn(id);
    if (!success) return;

    liked.value.push(id);
    localStorage.setItem("liked_posts", JSON.stringify(liked.value));

    // optimistic UI update
    if (post) post.likes++;
  };

  return {
    liked,
    isLiked,
    toggleLike,
  };
};
