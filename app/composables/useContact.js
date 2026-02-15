export const useContact = () => {
  const sendMessage = async (fullName, email, message) => {
    try {
      const res = await $fetch(
        "https://spec-blog-backend.vercel.app/api/message/send",
        {
          method: "POST",
          body: { fullName, email, message },
        },
      );

      if (!res.success) throw new Error(res.message);

      return res;
    } catch (error) {
      console.log(error);
    }
  };

  return { sendMessage };
};

export const useContactMessages = () => {
  const { data, pending } = useFetch(
    "https://spec-blog-backend.vercel.app/api/message",
    {
      transform: (response) => response.messages,
    },
  );
  console.log(data?.value);

  return { msg: data, pending };
};
