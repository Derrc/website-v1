import { ref, onMounted, onUnmounted } from "vue";

export enum Direction {
  Up = "up",
  Down = "down",
}

export const useScrollDirection = () => {
  const direction = ref<Direction>(Direction.Up);

  let lastScrollY = window.scrollY;

  const handleScroll = () => {
    window.scrollY > lastScrollY
      ? (direction.value = Direction.Down)
      : (direction.value = Direction.Up);
    lastScrollY = window.scrollY;
  };

  onMounted(() => {
    window.addEventListener("scroll", handleScroll);
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
  });

  return direction;
};
