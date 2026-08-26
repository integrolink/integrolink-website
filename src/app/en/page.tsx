import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/sections/Hero";
import { HomeExperience } from "@/sections/HomeExperience";

export const metadata: Metadata = { title: "IntegroLink | Technology integration", description: "Integrated automation, security, networking and energy management solutions for homes and businesses." };

export default function EnglishHomePage() { return <><Navbar /><main><Hero locale="en" /><HomeExperience locale="en" /></main></>; }
