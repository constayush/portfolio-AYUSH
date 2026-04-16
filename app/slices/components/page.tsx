"use client";
import { useState } from "react";
import { Button1, Button2, Button3, Button4, Card1, Card2 } from "./indexer";
import { ChevronDown, ChevronUp } from "lucide-react"; 

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div className="flex flex-col gap-8">
      <h2
        className="text-3xl cursor-pointer font-bold select-none flex items-center gap-2"
        onClick={() => setIsVisible(prev => !prev)}
      >
        {title}
        {isVisible ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
      </h2>
      {isVisible && children}
    </div>
  );
}

export default function Page() {
  return (
    <main className="flex-1 relative min-h-screen w-full max-w-4xl mx-auto px-4 md:px-8 py-12">
         <div className="bg-grid absolute inset-0 pointer-events-none" />
      <div className="flex flex-col gap-8">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-[2rem] md:text-[2.8rem] text-[var(--text-color)] font-bold">
            Components
          </h1>
          <p className="text-md text-[var(--secondary-text)] mt-2">
            A collection of well-crafted reusable components.
          </p>
        </div>

        <hr className="w-full border-[var(--border-color)]/40" />

        <Section title="cards">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <Card2 />
            <Card1 />
          </div>
        </Section>

        <Section title="buttons">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <Button1 cta_text="hover me" href="https://example.com" />
            <Button2>slice me</Button2>
            <Button3>slice me</Button3>
            <Button4>slice me</Button4>
          </div>
        </Section>
      </div>
    </main>
  );
}