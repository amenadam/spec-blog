export default defineNuxtRouteMiddleware((to) => {
  if (process.server) return;

  const token = localStorage.getItem("token");
  const isLoggedIn = !!token;

  if (!isLoggedIn && to.path.startsWith("/admin/dashboard")) {
    return navigateTo("/admin");
  }

  if (isLoggedIn && to.path === "/admin") {
    return navigateTo("/admin/dashboard");
  }
});
