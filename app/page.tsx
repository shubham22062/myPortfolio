import About from "@/components/About";
import Card from "@/components/Card";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import SkillCategory from "@/components/SkillCategory";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center">
      
      <div className="w-full max-w-3xl border-x border-gray-300 px-4">
        <Navbar />
        <div className="justify-center">
          <Hero/>
          <Skills/>
          <div>
            <About/>
          </div>
          <div>
            <Card/>
          </div>
          
          <div>
             <Experience/>
          </div>

          <div>
            <Projects/>
          </div>

          <div>
            <SkillCategory/>
          </div>

          <div>
            <Contact/>
          </div>

          <div>
            <Footer/>
          </div>

        </div>
      </div>

    </div>
  );
}