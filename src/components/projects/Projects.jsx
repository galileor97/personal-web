import React from "react";
import { SectionHeader } from "../util/SectionHeader";
import { Project } from "./Project";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className="grid gap-12 grid-cols-1 md:grid-cols-2">
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Potret-ai",
    imgSrc: "project-imgs/img.png",
    code: "https://www.github.com",
    projectLink: "#",
    tech: ["Node.js", "Express", "React", "Replicate"],
    description: "A diffusion pipeline for zero-shot stylized portrait creation.",
    modalContent: (
      <>
        <p>Portrait Image Generator: A diffusion pipeline for zero-shot stylized portrait creation.</p>
        <p>Tech stack: Node.js, Express, Google Auth, React, PostgreSQL, Replicate, Cloudinary, NextUI, Tailwind.css and Sequelize.</p>
      </>
    ),
  },
  {
    title: "Instagram Clone",
    imgSrc: "project-imgs/img.png",
    code: "https://www.github.com",
    projectLink: "#",
    tech: ["React Native", "GraphQL", "MongoDB", "Redis"],
    description: "Mobile application with an Instagram-like theme focusing on user interaction.",
    modalContent: (
      <>
        <p>Mobile application with an Instagram-like theme focusing on user interaction and content management.</p>
        <p>Tech stack: GraphQL, Apollo Server, MongoDB, Redis, React Native (Expo), and React Navigation.</p>
      </>
    ),
  },
  {
    title: "Gumpstore",
    imgSrc: "project-imgs/img.png",
    code: "https://www.github.com",
    projectLink: "#",
    tech: ["Next.js", "TypeScript", "Node.js", "MongoDB"],
    description: "Web-based eCommerce platform designed with a neo-brutalism style.",
    modalContent: (
      <>
        <p>Web-based eCommerce platform designed with a neo-brutalism style.</p>
        <p>Tech stack: Node.js, Next.js, Typescript, and MongoDB.</p>
      </>
    ),
  },
  {
    title: "Project Shura",
    imgSrc: "project-imgs/img.png",
    code: "https://www.github.com",
    projectLink: "#",
    tech: ["React", "Web3", "NFT"],
    description: "Mint Page for a futuristic NFT collection designed by Japanese artist Akihiro.",
    modalContent: (
      <>
        <p>NFT Collection Featuring 5,500 Unique Digital Illustrations.</p>
        <p>Developed the Mint Page for a futuristic NFT collection, generating significant revenue within 24 hours.</p>
      </>
    ),
  },
];
