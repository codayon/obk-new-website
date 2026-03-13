import { ArrowRight, Calendar } from "lucide-react";
import Image from "next/image";
import Flex from "@/components/common/flex";

interface BlogCardProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
  date: string;
  description: string;
}

export default function BlogCard({
  imgSrc,
  imgAlt,
  title,
  date,
  description,
}: BlogCardProps) {
  return (
    <Flex className="flex-col justify-between gap-4 rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition-colors hover:border-emerald-500/30 sm:flex-row md:gap-6 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-emerald-500/20">
      <div className="aspect-video w-full shrink-0 overflow-hidden rounded-lg sm:aspect-auto sm:w-40">
        <Image
          src={imgSrc}
          alt={imgAlt}
          width={160}
          height={90}
          className="h-full w-full object-cover"
          loading="eager"
        />
      </div>

      <div className="min-w-0 flex-1">
        <Flex className="items-start justify-between gap-2">
          <div className="flex-1">
            <h3 className="font-baloo-da-2 font-extrabold text-base text-zinc-900 leading-tight md:text-lg dark:text-zinc-50">
              {title}
            </h3>
            <Flex className="mt-1 items-center justify-start gap-2 text-zinc-400 dark:text-zinc-500">
              <Calendar size={14} />
              <p className="text-xs uppercase tracking-wider">{date}</p>
            </Flex>
          </div>
          <ArrowRight
            size={16}
            className="mt-1 shrink-0 text-zinc-300 dark:text-zinc-600"
          />
        </Flex>
        <p className="mt-2 line-clamp-2 font-baloo-da-2 text-sm text-zinc-500 leading-relaxed dark:text-zinc-400">
          {description}
        </p>
      </div>
    </Flex>
  );
}
