import Image from "next/image";
import Container from "@/app/(home)/_components/common/common/container";
import Flex from "@/app/(home)/_components/common/common/flex";
import Button from "@/app/(home)/_components/ui/button";

export default function Hero() {
  return (
    <section className="py-12 md:py-20 lg:py-28">
      <Container>
        <Flex className="flex-col justify-between gap-12 lg:flex-row lg:gap-0">
          <Flex className="flex-col items-baseline">
            <h4 className="rounded-full bg-emerald-500/20 px-5 py-2.5 font-medium text-emerald-900 text-sm dark:bg-emerald-500/10 dark:text-emerald-400">
              Open Source • Cross Platform
            </h4>

            <h1 className="max-w-2xl pt-4 pb-5 font-bricolage-grotesque font-extrabold text-3xl text-zinc-900 leading-tight tracking-tight md:text-5xl dark:text-zinc-50">
              The Last{" "}
              <span className="bg-linear-to-r from-emerald-900 to-emerald-800/80 bg-clip-text text-transparent dark:bg-linear-to-r dark:from-emerald-600 dark:to-emerald-600/80">
                Bangla writing solution
              </span>{" "}
              you'll ever need!
            </h1>

            <p className="max-w-xl pb-8 font-medium text-lg text-zinc-600 leading-relaxed md:pb-12 md:text-xl dark:text-zinc-400">
              Fast, smart Bangla typing with phonetic and fixed layouts
              Available on
              <span className="font-bold"> Linux, Windows, and macOS.</span>
            </p>

            <Flex className="w-full flex-col gap-4 sm:w-auto sm:flex-row sm:gap-6">
              <Button className="w-full font-semibold sm:w-auto">
                Install OpenBangla Keyboard
              </Button>{" "}
              <Button className="w-full border-zinc-300 bg-transparent text-zinc-600 hover:bg-zinc-100 sm:w-auto dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800">
                View Demo
              </Button>
            </Flex>
          </Flex>
          <div className="flex w-full justify-center lg:w-auto">
            <Image
              src="https://placehold.co/500x300/e2e8f0/475569"
              alt="placeholder"
              height={300}
              width={500}
              className="h-auto max-w-full rounded-2xl dark:opacity-90"
              loading="eager"
            />
          </div>
        </Flex>
      </Container>
    </section>
  );
}
