import { Component } from "vue";
import GithubLogoVue from "../components/icons/GithubLogo.vue";
import LinkedinLogoVue from "../components/icons/LinkedinLogo.vue";
import EnvelopeLogoVue from "../components/icons/EnvelopeLogo.vue";

type Contact = {
  name: string;
  logo: Component;
  link: string;
};

export const contacts: Contact[] = [
  {
    name: "Github",
    logo: GithubLogoVue,
    link: "https://github.com/Derrc",
  },
  {
    name: "Linkedin",
    logo: LinkedinLogoVue,
    link: "https://www.linkedin.com/in/derrick-kim-a66293225/",
  },
  {
    name: "Email",
    logo: EnvelopeLogoVue,
    link: "mailto:kim.der@northeastern.edu",
  },
];
