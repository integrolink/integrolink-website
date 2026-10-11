import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/sections/Hero";
import { HomeExperience } from "@/sections/HomeExperience";

export const metadata: Metadata = { title: "IntegroLink | Automation, security and Smart Occupancy", description: "Technology integration for homes, businesses and shared spaces: automation, security, networks, energy, access and Smart Occupancy.", alternates:{canonical:"/en",languages:{"pt-PT":"/",en:"/en"}} };

export default function EnglishHomePage() { return <><Navbar /><main><Hero locale="en" /><HomeExperience locale="en" /></main></>; }
