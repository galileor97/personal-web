import { Chip } from "../util/Chip";
import Reveal from "../util/Reveal";
import { AiFillCode, AiFillSmile } from "react-icons/ai";

export const Stats = () => {
  return (
    <div className="relative">
      <Reveal>
        <div>
          <h4 className="flex items-center mb-6">
            <AiFillCode className="text-indigo-500 text-2xl" />
            <span className="font-bold ml-2">Frontend</span>
          </h4>
          <div className="flex flex-wrap gap-2 mb-12">
            <Chip>JavaScript</Chip>
            <Chip>TypeScript</Chip>
            <Chip>React</Chip>
            <Chip>Next.js</Chip>
            <Chip>Tailwind</Chip>
            <Chip>Redux</Chip>
            <Chip>Zustand</Chip>
            <Chip>Vue</Chip>
            <Chip>React Native</Chip>
            <Chip>HTML</Chip>
            <Chip>CSS</Chip>
            <Chip>Shadcn</Chip>
            <Chip>MUI</Chip>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div>
          <h4 className="flex items-center mb-6">
            <AiFillSmile className="text-indigo-500 text-2xl" />
            <span className="font-bold ml-2">Backend</span>
          </h4>
          <div className="flex flex-wrap gap-2 mb-12">
            <Chip>Node.js</Chip>
            <Chip>Express</Chip>
            <Chip>NestJS</Chip>
            <Chip>PostgreSQL</Chip>
            <Chip>Redis</Chip>
            <Chip>GraphQL</Chip>
            <Chip>Supabase</Chip>
            <Chip>Prisma</Chip>
            <Chip>Drizzle</Chip>
            <Chip>Sequelize</Chip>
            <Chip>Cloudinary</Chip>
            <Chip>Hono</Chip>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
