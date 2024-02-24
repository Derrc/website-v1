export type Section = {
  label: string;
  name: "about" | "experience" | "projects";
};

export const sections: Section[] = [
  {
    label: "About",
    name: "about",
  },
  {
    label: "Experience",
    name: "experience",
  },
  {
    label: "Projects",
    name: "projects",
  },
];
