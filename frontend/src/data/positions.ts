import { type Component } from "vue";
import CargurusLogoVue from "../components/icons/CargurusLogo.vue";
import SkillzLogoVue from "../components/icons/SkillzLogo.vue";
import GenerateLogoVue from "../components/icons/GenerateLogo.vue";

export type Position = {
  title: string;
  company: string;
  logo: Component;
  description: string;
  startDate: string;
  endDate: string;
  link: string;
};

export const positions: Position[] = [
  {
    title: "Software Engineering Co-op, Mobile App",
    company: "CarGurus",
    logo: CargurusLogoVue,
    description:
      "Planned and implemented new features and native screens such as a new onboarding flow and search results page for the CarGurus mobile application using Typescript/React Native. Contributed to the application's API Gateway and internal microservices using Java/Spring and Open API Spec.",
    startDate: "July",
    endDate: "December 2023",
    link: "https://apps.apple.com/us/app/cargurus-used-new-cars/id814517475",
  },
  {
    title: "Software Engineer",
    company: "Generate NU",
    logo: GenerateLogoVue,
    description:
      "Collaborated with other student engineers and designers and developed a gifting web application using React/Typescript and Go/PostgreSQL. Revamped Generate's website by refactoring their codebase and implementing responsive layouts in React/JS.",
    startDate: "September",
    endDate: "December 2023",
    link: "https://generatenu.com/",
  },
  {
    title: "SDK Developer Co-op",
    company: "Skillz Inc.",
    logo: SkillzLogoVue,
    description:
      "Collaborated on development of UI features and components for the Skillz application using Typescript/React Native. Maintained code quality through unit and automated testing with Jest and Appium.",
    startDate: "Jan",
    endDate: "August 2022",
    link: "https://games.skillz.com/",
  },
];
