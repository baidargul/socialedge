import React from "react";
import Link from "next/link";
import { Download, ExternalLink, BookOpen, Video, FileText } from "lucide-react";

const ResourcesPage = () => {
  const resources = [
    {
      type: "Guide",
      icon: <BookOpen size={24} className="text-site-btnPrimary" />,
      title: "Performance Creative Playbook 2026",
      description: "A practical guide to building creative systems that scale.",
      download: true,
    },
    {
      type: "Template",
      icon: <FileText size={24} className="text-site-btnPrimary" />,
      title: "Weekly Creative Sprint Template",
      description: "Plan testing cycles, hooks, and deliverables in one doc.",
      download: true,
    },
    {
      type: "Video",
      icon: <Video size={24} className="text-site-btnPrimary" />,
      title: "Creative Testing Framework",
      description: "Learn how we structure experiments that drive ROAS.",
      download: false,
    },
    {
      type: "Guide",
      icon: <BookOpen size={24} className="text-site-btnPrimary" />,
      title: "AI in Post-Production",
      description: "Use AI to accelerate tagging, cutdowns, and versioning.",
      download: true,
    },
    {
      type: "Template",
      icon: <FileText size={24} className="text-site-btnPrimary" />,
      title: "Brand Video Checklist",
      description: "Ensure every edit is on-brand with this quick checklist.",
      download: true,
    },
    {
      type: "Video",
      icon: <Video size={24} className="text-site-btnPrimary" />,
      title: "Content Ops for Growth Teams",
      description: "How to keep production flowing without bottlenecks.",
      download: false,
    },
  ];

  const blogPosts = [
    {
      title: "Why creative velocity matters in 2026",
      excerpt:
        "Speed is the new moat. Here is how top teams ship faster without losing quality.",
      date: "Jan 20, 2026",
      readTime: "6 min read",
    },
    {
      title: "The modern paid social creative stack",
      excerpt:
        "From briefs to insights, a practical stack for performance marketers.",
      date: "Jan 12, 2026",
      readTime: "7 min read",
    },
    {
      title: "How to brief editors for better first cuts",
      excerpt:
        "A clear brief cuts revision time and improves creative outcomes.",
      date: "Jan 5, 2026",
      readTime: "5 min read",
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="bg-site-primary pt-28 sm:pt-32 pb-14 sm:pb-16 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-site-btnPrimary/70">
            Resources
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-semibold mt-4">
            Toolkits, insights, and templates for growth teams.
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mt-4">
            Free guides to help you produce better content and scale your
            creative workflows.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12 sm:py-16">
        <section className="mb-16">
          <h2 className="font-display text-3xl font-semibold mb-8 text-site-primary">
            Free resources
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource) => (
              <div
                key={resource.title}
                className="bg-white/90 p-6 rounded-2xl shadow-sm border border-white/70 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center mb-4">
                  {resource.icon}
                  <span className="ml-2 text-xs text-slate-500 font-semibold uppercase tracking-[0.2em]">
                    {resource.type}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-site-primary">
                  {resource.title}
                </h3>
                <p className="text-slate-600 mb-4">{resource.description}</p>
                <button className="flex items-center text-site-primary font-semibold hover:text-site-primary/80 transition-colors">
                  {resource.download ? (
                    <>
                      <Download size={16} className="mr-2" />
                      Download resource
                    </>
                  ) : (
                    <>
                      <ExternalLink size={16} className="mr-2" />
                      Watch now
                    </>
                  )}
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-display text-3xl font-semibold mb-8 text-site-primary">
            Latest insights
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <div
                key={post.title}
                className="bg-white/90 p-6 rounded-2xl shadow-sm border border-white/70 hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-3 text-site-primary">
                  {post.title}
                </h3>
                <p className="text-slate-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between text-xs text-slate-500">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <button className="mt-4 text-site-primary font-semibold hover:text-site-primary/80 transition-colors">
                  Read more
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-site-primary text-white p-8 sm:p-12 rounded-3xl text-center">
          <h2 className="font-display text-3xl font-semibold mb-4">
            Want a custom creative roadmap?
          </h2>
          <p className="text-lg mb-8 text-gray-300">
            We can audit your current content pipeline and propose a 90-day
            roadmap.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pricing"
              className="bg-site-btnPrimary text-site-primary px-8 py-3 rounded-full font-semibold hover:bg-[#c9f76f] transition-colors"
            >
              Request a roadmap
            </Link>
            <Link
              href="/services"
              className="border border-white/40 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors"
            >
              Explore services
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ResourcesPage;
