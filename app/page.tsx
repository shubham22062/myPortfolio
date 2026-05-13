import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center">
      
      <div className="w-200 max-w-5xl border-x border-gray-300 px-4">
        <Navbar />
        <div className="justify-center">
          <Hero/>
          <Skills/>
          <div>
            <About/>
          </div>
        </div>
      </div>

    </div>
  );
}