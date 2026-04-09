import Container from "@/app/(home)/_components/common/common/container";
import BlogCard from "../ui/blog-card";

const BLOGS = [
  {
    imgSrc: "https://placehold.co/160x90",
    imgAlt: "placeholder",
    title: "বিশেষ বিজ্ঞপ্তি!",
    date: "October 2, 2026",
    description:
      "প্রায় ২ বছর পর আপনাদের কাছে ওপেনবাংলা কিবোর্ডের ২.০.০ সংস্করণ এনে দিতে পেরে আমরা খুবই আনন্দিত। তবে আগেই বলে দিতে চাই, এযাবতকালে ওপেনবাংলা কিবোর্ডের অন্যতম বড় রিলিজ হতে চলেছে এটি!",
  },
];

export default function Blogs() {
  return (
    <section className="py-14">
      <Container>
        <div className="text-center lg:text-left">
          <h2 className="font-bold font-bricolage-grotesque text-3xl text-zinc-900 md:text-4xl dark:text-zinc-50">
            Stay Updated
          </h2>
          <p className="pt-2 text-lg text-zinc-600 md:text-xl dark:text-zinc-400">
            Release notes, announcements, and updates from the OpenBangla team.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 pt-10 lg:grid-cols-2">
          {BLOGS.map((blog) => (
            <BlogCard
              key={blog.title}
              imgSrc={blog.imgSrc}
              imgAlt={blog.imgAlt}
              title={blog.title}
              date={blog.date}
              description={blog.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
