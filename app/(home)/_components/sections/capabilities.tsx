/**
 * AI GENERATED CODE
 * Most of the code is rewritten by an AI model.
 */

"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Container from "@/app/(home)/_components/common/container";
import Flex from "@/app/(home)/_components/common/flex";

const CAPABILITIES = [
  {
    id: "avro-phonetic",
    label: "Avro Phonetic",
    description:
      "Preview window with smart suggestions for fluid phonetic typing.",
    image: "https://placehold.co/500x500/e2e8f0/475569?text=Avro+Phonetic",
  },
  {
    id: "fixed-layout-support",
    label: "Fixed Layout Support",
    description: "Probhat, Munir Optima, National (Jatiya) layouts built-in.",
    image: "https://placehold.co/500x500/cbd5e1/1e293b?text=Fixed+Layout",
  },
  {
    id: "dictionary-for-fixed-layouts",
    label: "Dictionary for Fixed Layouts",
    description:
      "Intelligent suggestions even when using non-phonetic layouts.",
    image: "https://placehold.co/500x500/94a3b8/0f172a?text=Dictionary",
  },
  {
    id: "traditional-kar-joining",
    label: "Traditional Kar Joining",
    description:
      "Supports beautiful literary Bangla ligatures and traditional typography.",
    image: "https://placehold.co/500x500/64748b/020617?text=Kar+Joining",
  },
  {
    id: "configuration-tool",
    label: "Configuration Tool",
    description: "Dedicated GUI tool for easy, intuitive customization.",
    image: "https://placehold.co/500x500/475569/ffffff?text=Config+Tool",
  },
];

export default function Capabilities() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (!containerRef.current) return;

          const rect = containerRef.current.getBoundingClientRect();
          const sectionHeight = containerRef.current.scrollHeight;

          const scrollable = sectionHeight - window.innerHeight;
          if (scrollable <= 0) return;

          const progress = Math.abs(rect.top) / scrollable;

          const index = Math.min(
            Math.floor(progress * CAPABILITIES.length),
            CAPABILITIES.length - 1,
          );

          if (rect.top <= 0 && index >= 0) {
            setActiveIndex(index);
          }

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // The height of this container (400vh) determines how long the user scrolls
    <section
      ref={containerRef}
      className="relative h-[500vh] bg-neutral-50 dark:bg-neutral-950"
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <Container>
          <Flex className="flex-col items-center justify-between gap-12 lg:flex-row lg:gap-16">
            {/* Left Side: Images */}
            <div className="relative h-75 w-full max-w-125 overflow-hidden rounded-3xl bg-zinc-200 lg:h-125 lg:w-1/2 dark:bg-zinc-800">
              {CAPABILITIES.map((cap, i) => (
                <div
                  key={cap.id}
                  className={`absolute inset-0 transition-all duration-300 ease-in-out ${activeIndex === i ? "opacity-100" : "opacity-0"
                    }`}
                >
                  <Image
                    src={cap.image}
                    alt={cap.label}
                    fill
                    className="object-cover"
                    priority={i === 0}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>

            {/* Right Side: Clickable Options (Stationary) */}
            <div className="grid w-full grid-cols-1 gap-4 lg:w-1/2">
              <div className="mb-6 flex flex-col gap-2">
                <h2 className="font-bold font-bricolage-grotesque text-3xl md:text-4xl text-zinc-900 dark:text-zinc-50">
                  Core Typing Capabilities
                </h2>
              </div>

              {CAPABILITIES.map((capability, i) => (
                <button
                  key={capability.id}
                  onClick={() => {
                    // Optional: Scroll to the specific part of the section when clicked
                    if (!containerRef.current) return;

                    const scrollPos =
                      containerRef.current.offsetTop +
                      i *
                      (containerRef.current.scrollHeight /
                        CAPABILITIES.length);
                    window.scrollTo({ top: scrollPos, behavior: "smooth" });
                  }}
                  className={`flex flex-col gap-2 rounded-2xl border p-6 text-left transition-all duration-300 ${activeIndex === i
                    ? "border-emerald-500/50 bg-white shadow-md dark:bg-zinc-900"
                    : "border-transparent bg-transparent opacity-50 hover:opacity-100"
                    }`}
                >
                  <h3
                    className={`font-bold transition-colors ${activeIndex === i ? "text-emerald-600 dark:text-emerald-400" : "text-zinc-600 dark:text-zinc-400"}`}
                  >
                    {capability.label}
                  </h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    {capability.description}
                  </p>
                </button>
              ))}
            </div>
          </Flex>
        </Container>
      </div>
    </section>
  );
}
