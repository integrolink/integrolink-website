import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/sections/Hero";
import { EnglishHomeExperience } from "@/sections/EnglishHomeExperience";

export const metadata: Metadata = { title: "IntegroLink | Technology integration", description: "Integrated automation, security, networking and energy management solutions for homes and businesses." };

export default function EnglishHomePage() { return <><Navbar /><main><Hero locale="en" /><EnglishHomeExperience /></main></>; }
