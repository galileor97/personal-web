import { SectionHeader } from "../util/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "PT Applimetis Parama Solusi",
    position: "Full Stack Developer",
    time: "March 2025 - Present",
    location: "Jakarta, Indonesia",
    description:
      "Develop and maintain full-stack web applications using JavaScript, React, Next.js, Tailwind CSS. Build responsive front-end interfaces and scalable backend systems for healthcare workflow optimization.",
    tech: ["React", "Next.js", "Node.js", "Tailwind", "JavaScript", "PostgreSQL"],
  },
  {
    title: "esportsku.com",
    position: "Digital Marketing",
    time: "March 2016 - Sep 2024",
    location: "Jakarta, Indonesia",
    description:
      "Grew eSportku from 10k to 2 million monthly visitors and increased revenue significantly. Established collaborations with brands like Realme and Edifier.",
    tech: ["SEO", "Digital Marketing", "Content Strategy", "Link Building"],
  },
  {
    title: "Fiverr",
    position: "Freelancing",
    time: "October 2015 - Present",
    location: "Jakarta, Indonesia",
    description:
      "Specializing in front-end development using Tailwind CSS and React. Delivering responsive websites across SaaS, eCommerce, and NFT niches.",
    tech: ["React", "Tailwind", "HTML", "CSS", "UI/UX"],
  },
];
