import { Navbar } from "@/components/Navbar";
import { Hero } from "@/sections/Hero";
import { HomeExperience } from "@/sections/HomeExperience";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HomeExperience />
      </main>
    </>
  );
}
