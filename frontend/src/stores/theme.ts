import { ref } from "vue";

type Theme = {
  theme: "light" | "dark";
  toggle: () => void;
};

export const themeStore = ref<Theme>({
  theme: "dark",
  toggle() {
    // remove current theme
    document.documentElement.classList.remove(this.theme);
    // toggle theme
    this.theme = this.theme == "dark" ? "light" : "dark";
    // add new theme
    document.documentElement.classList.add(this.theme);
  },
});
