import Image from "next/image";
import Container from "@/app/(home)/_components/common/common/container";
import Flex from "@/app/(home)/_components/common/common/flex";
import Option from "../ui/info-card";

const CAPABILITIES = [
  {
    id: "avro-phonetic",
    label: "Avro Phonetic",
    description:
      "Preview window with smart suggestions for fluid phonetic typing.",
  },
  {
    id: "fixed-layout-support",
    label: "Fixed Layout Support",
    description: "Probhat, Munir Optima, National (Jatiya) layouts built-in.",
  },
  {
    id: "dictionary-for-fixed-layouts",
    label: "Dictionary for Fixed Layouts",
    description:
      "Intelligent suggestions even when using non-phonetic layouts.",
  },
  {
    id: "traditional-kar-joining",
    label: "Traditional Kar Joining",
    description:
      "Supports beautiful literary Bangla ligatures and traditional typography.",
  },
  {
    id: "configuration-tool",
    label: "Configuration Tool",
    description: "Dedicated GUI tool for easy, intuitive customization.",
  },
];

export default function Capabilities() {
  return (
    <section className="py-20">
      <Container>
        <Flex className="flex-col justify-between gap-12 lg:flex-row lg:gap-16">
          <div className="flex w-full justify-center lg:block lg:w-1/2">
            <Image
              src="https://placehold.co/500x500/e2e8f0/475569"
              alt="placeholder"
              height={500}
              width={500}
              className="h-auto max-w-full rounded-3xl dark:opacity-90"
              loading="eager"
            />
          </div>
          <Flex className="w-full flex-col items-start gap-8 lg:w-1/2">
            <div className="flex flex-col gap-4 text-left">
              <h2 className="font-bold font-bricolage-grotesque text-3xl text-zinc-900 md:text-4xl dark:text-zinc-50">
                Core Typing Capabilities
              </h2>
              <p className="max-w-lg text-lg text-zinc-600 leading-relaxed md:text-xl dark:text-zinc-400">
                From phonetic to fixed layouts, OpenBangla covers every way you
                type Bangla.
              </p>
            </div>
            <div className="grid w-full gap-3">
              {CAPABILITIES.map((capability) => (
                <Option
                  key={capability.id}
                  label={capability.label}
                  description={capability.description}
                />
              ))}
            </div>
          </Flex>
        </Flex>
      </Container>
    </section>
  );
}
