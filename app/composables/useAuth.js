import { ref, onMounted } from "vue";

export const useAuth = () => {
  const token = ref(null);
  const user = ref(null);

  onMounted(() => {
    token.value = localStorage.getItem("token");

    const storedUser = localStorage.getItem("user");
    user.value = storedUser ? JSON.parse(storedUser) : null;
  });

  const login = async (email, password) => {
    try {
      const res = await $fetch("http://localhost:5500/api/auth/login", {
        method: "POST",
        body: { email, password },
      });

      if (!res.success) throw new Error(res.message);

      token.value = res.token;
      user.value = res.user;

      localStorage.setItem("token", res.token);
      localStorage.setItem("user", JSON.stringify(res.user));

      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  };

  const logout = () => {
    token.value = null;
    user.value = null;

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigateTo("/admin");
  };

  const isAuthenticated = () => {
    return !!token.value;
  };

  return {
    token,
    user,
    login,
    logout,
    isAuthenticated,
  };
};
