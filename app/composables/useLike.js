export const useLike = () => {
  const loading = ref(false);
  const error = ref(null);

  const likePost = async (postId) => {
    try {
      loading.value = true;
      error.value = null;

      const res = await $fetch(
        "https://spec-blog-backend.vercel.app/api/blog/like",
        {
          method: "POST",
          body: {
            id: postId,
          },
        },
      );

      if (!res.success) {
        throw new Error(res.message);
      }

      return true;
    } catch (err) {
      error.value = err.message || "Failed to like post";
      return false;
    } finally {
      loading.value = false;
    }
  };

  return {
    likePost,
    loading,
    error,
  };
};
