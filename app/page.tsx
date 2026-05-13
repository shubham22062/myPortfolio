import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center">
      
      <div className="w-200 max-w-5xl border-x border-gray-300 px-4">
        <Navbar />
        <div className="flex justify-center">
          <Hero/>
        </div>
      </div>

    </div>
  );
}