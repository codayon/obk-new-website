import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { Book, FileText } from "lucide-react";
import Image from "next/image";
import Flex from "@/components/common/flex";
import { appName, gitConfig } from "./shared";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      transparentMode: "top",
      title: (
        <Flex className="gap-2">
          <Image
            src="https://placehold.co/32x32/e2e8f0/475569"
            alt="placeholder"
            height={32}
            width={32}
            className="rounded-lg"
            loading="eager"
          />
          <span className="font-bold">{appName}</span>
        </Flex>
      ),
    },
    links: [
      {
        icon: <Book />,
        text: "Docs",
        url: "/docs",
      },
      {
        icon: <FileText />,
        text: "Blog",
        url: "/blog",
      },
    ],
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
