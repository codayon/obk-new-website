import Flex from "@/app/(home)/_components/common/common/flex";

interface InfoCardProps {
  label: string;
  description: string;
}

export default function InfoCard({ label, description }: InfoCardProps) {
  return (
    <Flex className="flex-col items-baseline gap-2 rounded-xl border border-zinc-200 bg-white px-6 py-4 shadow-sm transition-colors hover:border-emerald-500/30 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-emerald-500/20">
      <h3 className="font-bold text-lg text-zinc-900 md:text-xl dark:text-zinc-100">
        {label}
      </h3>
      <p className="text-sm text-zinc-500 md:text-base dark:text-zinc-400">
        {description}
      </p>
    </Flex>
  );
}
