import { InlineTOC } from "fumadocs-ui/components/inline-toc";
import defaultMdxComponents from "fumadocs-ui/mdx";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blog, getBlogImage } from "@/lib/source";

export default async function Page(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const page = blog.getPage([params.slug]);

  if (!page) notFound();
  const Mdx = page.data.body;

  return (
    <>
      <div className="mx-auto w-full max-w-[1400px] px-4">
        <div className="mt-8 rounded-xl border px-4 py-8 md:px-8">
          <h1 className="mb-2 font-bold text-3xl">{page.data.title}</h1>
          <p className="mb-4 text-fd-muted-foreground">
            {page.data.description}
          </p>
          <Link href="/blog">Back</Link>
        </div>
      </div>

      <article className="mx-auto flex w-full max-w-[1400px] flex-col px-4 py-8">
        <div className="prose min-w-0">
          <InlineTOC items={page.data.toc} />
          <Mdx components={defaultMdxComponents} />
        </div>

        <div className="mt-8 flex flex-col gap-4 text-sm">
          <div>
            <p className="mb-1 text-fd-muted-foreground">Written by</p>
            <p className="font-medium">{page.data.author}</p>
          </div>

          <div>
            <p className="mb-1 text-fd-muted-foreground text-sm">At</p>
            <p className="font-medium">
              {new Date(page.data.date).toDateString()}
            </p>
          </div>
        </div>
      </article>
    </>
  );
}

export function generateStaticParams(): { slug: string }[] {
  return blog.getPages().map((page) => ({
    slug: page.slugs[0],
  }));
}

export async function generateMetadata(
  props: PageProps<"/blog/[slug]">,
): Promise<Metadata> {
  const params = await props.params;
  const page = blog.getPage([params.slug]);

  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description ?? "A blog post by OpenBangla Team",
    openGraph: {
      images: getBlogImage(page).url,
    },
  };
}
