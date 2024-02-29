import SipDiagram from "../assets/sip_diagram.png";

export type Project = {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
};

export const projects: Project[] = [
  {
    title: "Recipy",
    description:
      "A cooking recipe blog application built using React, Typescript, Express, Node.js, and MongoDB.",
    imageUrl: "",
    link: "https://recipys.netlify.app/",
  },
  {
    title: "Serverless Image Processor",
    description:
      "Serverless image processing pipeline developed using Terraform and AWS S3, Lambda. Supports uploading, processing, and retrieving images from one endpoint.",
    imageUrl: SipDiagram,
    link: "https://github.com/Derrc/serverless-image-processor",
  },
];
