import React from "react";
import {
  SiHtml5, SiCss, SiReact, SiTailwindcss, SiNextdotjs, SiSass, SiMui, 
  SiStyledcomponents, SiRedux, SiNodedotjs, SiExpress, SiJavascript, 
  SiTypescript, SiSanity, SiFirebase, SiSupabase, SiMongodb, SiMysql, 
  SiPostgresql, SiRedis, SiGit, SiGithub, SiDocker, SiKubernetes, 
  SiTurborepo, SiPython, SiCplusplus, SiC, SiKotlin, SiGo, SiRust,
  SiCloudflareworkers, SiFramer, SiPrisma, SiWebrtc
} from "react-icons/si";
import { FaAws, FaJava } from "react-icons/fa";

export default function SkillCategory() {
  return (
    <section className="mt-20 p-4 sm:p-6 max-w-7xl mx-auto font-sans">
      <h1 className="font-bold text-center text-3xl sm:text-4xl mb-12 sm:mb-20 text-gray-800 tracking-tight">
        Technical Arsenal
      </h1>

      <div className="space-y-10 sm:space-y-16">
        {/* FRONTEND */}
        <SkillRow title="Frontend Skills">
          <Skill icon={<SiHtml5 className="text-orange-600" />} name="HTML5" />
          <Skill icon={<SiCss className="text-blue-600" />} name="CSS3" />
          <Skill icon={<SiJavascript className="text-yellow-400" />} name="JS" />
          <Skill icon={<SiTypescript className="text-blue-600" />} name="TS" />
          <Skill icon={<SiReact className="text-cyan-400" />} name="React" />
          <Skill icon={<SiNextdotjs className="text-black" />} name="Next.js" />
          <Skill icon={<SiTailwindcss className="text-sky-400" />} name="Tailwind" />
          <Skill icon={<SiRedux className="text-purple-600" />} name="Redux" />
          <Skill icon={<SiFramer className="text-pink-500" />} name="Framer" />
          <Skill icon={<SiSass className="text-pink-400" />} name="Sass" />
        </SkillRow>

        {/* BACKEND & CLOUD */}
        <SkillRow title="Backend & Cloud">
          <Skill icon={<SiNodedotjs className="text-green-600" />} name="Node.js" />
          <Skill icon={<SiExpress className="text-gray-800" />} name="Express" />
          <Skill icon={<SiPrisma className="text-gray-700" />} name="Prisma" />
          <Skill icon={<SiWebrtc className="text-red-500" />} name="WebRTC" />
          <Skill icon={<FaAws className="text-orange-500" />} name="AWS" />
          <Skill icon={<SiCloudflareworkers className="text-orange-400" />} name="Cloudflare" />
          <Skill icon={<SiFirebase className="text-yellow-500" />} name="Firebase" />
          <Skill icon={<SiSupabase className="text-emerald-500" />} name="Supabase" />
        </SkillRow>

        {/* DATABASE */}
        <SkillRow title="Database">
          <Skill icon={<SiMongodb className="text-green-500" />} name="MongoDB" />
          <Skill icon={<SiPostgresql className="text-blue-600" />} name="Postgres" />
          <Skill icon={<SiMysql className="text-blue-400" />} name="MySQL" />
          <Skill icon={<SiRedis className="text-red-600" />} name="Redis" />
          <Skill icon={<SiSanity className="text-red-500" />} name="Sanity" />
        </SkillRow>

        {/* LANGUAGES */}
        <SkillRow title="Languages">
          <Skill icon={<SiCplusplus className="text-blue-600" />} name="C++" />
          <Skill icon={<SiC className="text-blue-700" />} name="C" />
          <Skill icon={<SiPython className="text-blue-400" />} name="Python" />
          <Skill icon={<FaJava className="text-red-600" />} name="Java" />
          <Skill icon={<SiGo className="text-cyan-500" />} name="Go" />
          <Skill icon={<SiRust className="text-orange-700" />} name="Rust" />
          <Skill icon={<SiKotlin className="text-purple-500" />} name="Kotlin" />
        </SkillRow>

        {/* DEVOPS & TOOLS */}
        <SkillRow title="DevOps & Tools">
          <Skill icon={<SiGit className="text-orange-600" />} name="Git" />
          <Skill icon={<SiGithub className="text-black" />} name="GitHub" />
          <Skill icon={<SiDocker className="text-blue-500" />} name="Docker" />
          <Skill icon={<SiKubernetes className="text-blue-600" />} name="K8s" />
          <Skill icon={<SiTurborepo className="text-pink-500" />} name="Turborepo" />
        </SkillRow>
      </div>
    </section>
  );
}

function SkillRow({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 items-start border-b border-gray-100 pb-5 gap-2">
      {/* Label Section */}
      <div className="md:col-span-3 pt-2">
        <h2 className="text-base sm:text-xl font-bold uppercase tracking-widest text-left">
          {title}
        </h2>
      </div>

      {/* Icons Section */}
      <div className="md:col-span-9 flex flex-wrap gap-x-4 gap-y-6 sm:gap-x-5 sm:gap-y-5 md:pl-16">
        {children}
      </div>
    </div>
  );
}

function Skill({ icon, name }: { icon: React.ReactNode; name: string }) {
  return (
    <div className="flex flex-col items-center group w-13">
      <div className="text-3xl sm:text-4xl transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-2 cursor-pointer">
        {icon}
      </div>
      <span className="text-[10px] mt-3 text-gray-400 font-bold uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {name}
      </span>
    </div>
  );
}