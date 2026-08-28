import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Blog",
  description: "Tips and guides on paint protection film, ceramic coating, and paint correction.",
};

const posts = [
  {
    title: "PPF vs ceramic coating",
    href: "https://www.songautodetail.com/post/ppf-vs-ceramic-coating",
  },
  {
    title: "What is paint correction and what are some benefits?",
    href: "https://www.songautodetail.com/post/what-is-a-paint-correction-and-what-are-some-benefits",
  },
];

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="Blog"
        intro="Educational posts from the current site. These will move into the CMS; project writeups will live under Projects."
      />
      <section className="mx-auto max-w-6xl space-y-4 px-5 pb-20">
        {posts.map((post) => (
          <a
            key={post.href}
            href={post.href}
            className="block border border-line bg-elevated p-6 hover:border-accent"
          >
            <h2 className="text-2xl">{post.title}</h2>
            <p className="mt-2 text-sm normal-case tracking-normal text-muted">
              Currently on the Wix site — migrated in a later phase.
            </p>
          </a>
        ))}
      </section>
    </>
  );
}
