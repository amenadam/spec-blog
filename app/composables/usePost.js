export const usePost = () => {
  const { data, pending, error } = useFetch(
    "http://localhost:5500/api/blog/all",
    {
      transform: (response) => response.blogs,
    },
  );

  return { posts: data, pending, error };
};

export const useOnePost = (id) => {
  const { data, pending, error } = useFetch(
    "http://localhost:5500/api/blog/" + id,
    {
      transform: (response) => response.post,
    },
  );

  return { post: data, pending, error };
};

export const useAdminPost = () => {
  const newPost = async (title, discription, imageUrl, category) => {
    try {
      const res = await $fetch("http://localhost:5500/api/blog/create", {
        method: "POST",
        body: { title, discription, imageUrl, category },
      });

      if (!res.success) throw new Error(res.message);

      return res;
    } catch (err) {
      console.error(err);
      return false;
    }
  };

  const deletePost = async (postId) => {
    try {
      const res = await $fetch(
        "http://localhost:5500/api/blog/delete/" + postId,
        {
          method: "POST",
        },
      );
      if (!res.success) throw new Error(res.message);

      return res;
    } catch (err) {
      console.error(err);
    }
  };
  return { newPost, deletePost };
};
