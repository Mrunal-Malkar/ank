"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";


const content = [
   {
    title: "Feed your own data",
    description:
      "Feeding your own data lets Torq understand who you are — what you care about, need, or want — and provide you fine-tuned responses. Think of it as training your own micro-AI to align with your personality and goals.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Train Torq
      </div>
    ),
  },
  {
    title: "Vocal Communication",
    description:
      "Torq listens and speaks back — no typing needed. This bridges accessibility gaps, especially for elders, children, or anyone who prefers speaking over typing.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--indigo-500),var(--violet-500))] text-white">
        Talk to Torq
      </div>
    ),
  },
  {
    title: "Multilingual Understanding",
    description:
      "Torq understands and responds in multiple Indian languages, allowing people from every region to interact naturally without language barriers.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--amber-500),var(--rose-500))] text-white">
        Speak Your Language
      </div>
    ),
  },
  {
    title: "Visual Insights",
    description:
      "Torq can generate simple graphs and analytics based on your data — turning your information into visual insights that help you make smarter decisions.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--emerald-500),var(--teal-500))] text-white">
        View Analytics
      </div>
    ),
  },
  {
    title: "Human-Guided Automation",
    description:
      "Torq can act as a digital guide — for example, helping people navigate ticket machines, hospital kiosks, or information booths — reducing dependency on human help for repetitive guidance.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--sky-500),var(--cyan-600))] text-white">
        Assist in Action
      </div>
    ),
  },
];
export function StickyScrollReveal() {
  return (
    <div className="w-full py-4">
      <StickyScroll content={content} />
    </div>
  );
}
