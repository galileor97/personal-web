import { AiOutlineArrowRight } from "react-icons/ai";
import { SectionHeader } from "../util/SectionHeader";
import Reveal from "../util/Reveal";
import { MyLinks } from "../nav/Header";
import { Stats } from "./Stats";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8">
        <div className="space-y-4">
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              <span className="bg-indigo-500 text-white py-2 px-3 rounded font-bold mr-1 float-left text-2xl">
                H
              </span>
              ey! I&apos;m Galih, if you haven&apos;t already gathered that by
              now. I&apos;m a digital marketer turned software developer from Jakarta,
              Indonesia. I specialize in the full stack, primarily React and Node.js, but
              love building with whatever tools are right for the job.
            </p>
          </Reveal>
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              I currently work for PT Applimetis Parama Solusi as a Full Stack Developer.
              Whether building web apps, launching NFT platforms, or enhancing brands&apos; online presence, I bring a design-first mindset and creative problem-solving to every project.
            </p>
          </Reveal>
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              Outside of my main job, I enjoy freelancing on Fiverr where I deliver responsive websites across SaaS, eCommerce, and NFT niches.
              I also love exploring new technologies and building cool projects.
            </p>
          </Reveal>
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              I&apos;m always looking for new challenges and opportunities to grow. If you think
              you&apos;ve got an opening that I might like, let&apos;s connect
              🔗
            </p>
          </Reveal>
          <Reveal>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4 text-sm text-indigo-300">
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
