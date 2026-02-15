import { ref } from "vue";

export const useToggle = (initialValue) => {
  const state = ref(initialValue);
  const toggle = () => {
    state.value = !state.value;
  };

  return { state, toggle };
};
