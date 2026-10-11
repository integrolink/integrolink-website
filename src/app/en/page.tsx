import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/sections/Hero";
import { HomeExperience } from "@/sections/HomeExperience";

export const metadata: Metadata = { title: "IntegroLink | Safer, more efficient, easier-to-manage spaces", description: "Integrated solutions that make homes, businesses and shared spaces safer, more efficient and easier to manage.", alternates:{canonical:"/en",languages:{"pt-PT":"/",en:"/en"}} };

export default function EnglishHomePage() { return <><Navbar /><main><Hero locale="en" /><HomeExperience locale="en" /></main></>; }
