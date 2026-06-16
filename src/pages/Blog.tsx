import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Calendar,
  Clock,
  ArrowRight,
  TrendingUp,
  Mail,
  BookOpen,
  ChevronRight,
} from "lucide-react";

interface Post {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
}

const CATEGORIES = [
  "All",
  "Web Development",
  "Python",
  "AI",
  "Cloud",
  "Startups",
  "Digital Transformation",
];

const CATEGORY_COLORS: Record<string, { bg: string; text: string; border: string; accent: string }> = {
  "Web Development": {
    bg: "rgba(123, 47, 247, 0.08)",
    text: "#7B2FF7",
    border: "rgba(123, 47, 247, 0.15)",
    accent: "bg-[#7B2FF7]",
  },
  Python: {
    bg: "rgba(59, 130, 246, 0.08)",
    text: "#3B82F6",
    border: "rgba(59, 130, 246, 0.15)",
    accent: "bg-[#3B82F6]",
  },
  AI: {
    bg: "rgba(236, 72, 153, 0.08)",
    text: "#EC4899",
    border: "rgba(236, 72, 153, 0.15)",
    accent: "bg-[#EC4899]",
  },
  Cloud: {
    bg: "rgba(6, 182, 212, 0.08)",
    text: "#06B6D4",
    border: "rgba(6, 182, 212, 0.15)",
    accent: "bg-[#06B6D4]",
  },
  Startups: {
    bg: "rgba(249, 115, 22, 0.08)",
    text: "#F97316",
    border: "rgba(249, 115, 22, 0.15)",
    accent: "bg-[#F97316]",
  },
  "Digital Transformation": {
    bg: "rgba(16, 185, 129, 0.08)",
    text: "#10B981",
    border: "rgba(16, 185, 129, 0.15)",
    accent: "bg-[#10B981]",
  },
};

const BLOG_POSTS: Post[] = [
  {
    id: "featured-1",
    title: "The Future of Web Development: Moving Beyond Traditional Single Page Apps",
    excerpt: "Explore how frameworks are shifting back towards server-driven interactive architectures, edge rendering, and zero-JS clients to maximize performance and core web vitals.",
    category: "Web Development",
    author: {
      name: "Saurav Raman",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80",
      role: "Lead Architect",
    },
    date: "June 12, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    featured: true,
  },
  {
    id: "post-1",
    title: "Scaling Python Backend Workflows with Asynchronous Task Queues",
    excerpt: "How we configured distributed workers using Python and Redis to handle complex high-frequency calculations for enterprise client platforms.",
    category: "Python",
    author: {
      name: "Vinesh Kumar",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
      role: "Senior Backend Engineer",
    },
    date: "June 10, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "post-2",
    title: "Designing Multi-Agent AI Workflows for Automated Quality Engineering",
    excerpt: "A deep dive into setting up orchestration frameworks where separate specialized LLM agents collaborate to debug codebases and generate tests.",
    category: "AI",
    author: {
      name: "Anita Rajan",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
      role: "AI Product Lead",
    },
    date: "June 05, 2026",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "post-3",
    title: "Reducing Serverless Latency by 40% with Edge Cache Strategies",
    excerpt: "How utilizing cloud edge functions and stateful globally replicated cache layers minimizes cold start times for production databases.",
    category: "Cloud",
    author: {
      name: "Devin Ross",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80",
      role: "DevOps Engineer",
    },
    date: "May 28, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "post-4",
    title: "How to Bootstrap a Tech Startup Without Venture Capital in 2026",
    excerpt: "Practical guidance on prioritizing organic customer growth, building lean MVPs, and achieving early cash-flow sustainability.",
    category: "Startups",
    author: {
      name: "Saurav Raman",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80",
      role: "Founder",
    },
    date: "May 20, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "post-5",
    title: "Rebuilding Legacy Systems: A Roadmap for Digital Transformation",
    excerpt: "A structured phase-by-phase framework on migrating decade-old monolithic architectures into clean, microservice-based solutions safely.",
    category: "Digital Transformation",
    author: {
      name: "Vinesh Kumar",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
      role: "Lead Engineer",
    },
    date: "May 12, 2026",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "post-6",
    title: "React Server Components: Best Practices for State Isolation",
    excerpt: "Learn how to draw clean lines between server actions and interactive client interfaces to keep bundle sizes minimal.",
    category: "Web Development",
    author: {
      name: "Anita Rajan",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
      role: "Front-End Lead",
    },
    date: "May 02, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=600&q=80",
  },
];

const POPULAR_POSTS = [
  {
    id: "post-2",
    title: "Designing Multi-Agent AI Workflows for Automated Quality Engineering",
    views: "1.2k reads",
  },
  {
    id: "post-1",
    title: "Scaling Python Backend Workflows with Asynchronous Task Queues",
    views: "980 reads",
  },
  {
    id: "featured-1",
    title: "The Future of Web Development: Moving Beyond SPAs",
    views: "850 reads",
  },
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setNewsletterEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0];

  return (
    <div className="bg-white min-h-screen text-text-primary font-body relative overflow-hidden pt-24 pb-20">
      {/* Background blobs */}
      <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-gradient-to-br from-purple-100/40 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-[-15%] w-[500px] h-[500px] bg-gradient-to-tr from-blue-50/30 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="container max-w-[1240px] mx-auto px-6 relative z-10">
        
        {/* HERO SECTION */}
        <section className="text-center max-w-3xl mx-auto mt-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-100 text-purple-700 text-xs font-semibold uppercase tracking-wider mb-6"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Tech Insights</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6"
          >
            Insights, Trends & <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Technology</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl mx-auto"
          >
            Deep dives into architectural design patterns, software engineering practices, AI agent workflows, and the future of scalable applications.
          </motion.p>

          {/* Search bar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative max-w-lg mx-auto"
          >
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-400">
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              placeholder="Search articles, keywords, or guides..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-6 py-4 rounded-2xl border border-slate-200 focus:border-purple-500 bg-white/70 backdrop-blur-md shadow-sm focus:shadow-md outline-none text-slate-800 transition-all duration-300 placeholder:text-slate-400"
            />
          </motion.div>
        </section>

        {/* FEATURED ARTICLE SECTION */}
        {searchQuery === "" && selectedCategory === "All" && (
          <section className="mb-20">
            <h2 className="text-xl font-display font-extrabold text-slate-900 mb-6 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-purple-600" />
              Featured Article
            </h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 grid grid-cols-1 lg:grid-cols-12 gap-0 relative group"
            >
              {/* Purple gradient accent border on top */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#7B2FF7] via-[#9333EA] to-[#EC4899] z-10" />

              {/* Cover Image */}
              <div className="lg:col-span-7 relative overflow-hidden min-h-[300px] lg:min-h-[460px]">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Text Info */}
              <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  {(() => {
                    const col = CATEGORY_COLORS[featuredPost.category] || {
                      bg: "rgba(123, 47, 247, 0.08)",
                      text: "#7B2FF7",
                    };
                    return (
                      <span
                        className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
                        style={{ backgroundColor: col.bg, color: col.text }}
                      >
                        {featuredPost.category}
                      </span>
                    );
                  })()}
                  <span className="text-slate-400 text-xs flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {featuredPost.readTime}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 leading-tight tracking-tight mb-4 group-hover:text-purple-600 transition-colors duration-300">
                  {featuredPost.title}
                </h3>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  {featuredPost.excerpt}
                </p>

                {/* Author + read link */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-slate-100 pt-6 mt-2">
                  <div className="flex items-center gap-3">
                    <img
                      src={featuredPost.author.avatar}
                      alt={featuredPost.author.name}
                      className="w-10 h-10 rounded-full object-cover ring-2 ring-purple-100"
                    />
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-800">
                        {featuredPost.author.name}
                      </h4>
                      <p className="text-[10px] sm:text-xs text-slate-400">
                        {featuredPost.author.role}
                      </p>
                    </div>
                  </div>

                  <button className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#7B2FF7] hover:text-[#9333EA] transition-colors group/btn cursor-pointer">
                    Read Article
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          </section>
        )}

        {/* BLOG MAIN CATEGORIES TABS */}
        <section className="mb-10">
          <div className="flex flex-wrap gap-2 pb-4 overflow-x-auto border-b border-slate-100">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              const catColors = CATEGORY_COLORS[cat] || {
                text: "#64748B",
                bg: "transparent",
                border: "transparent",
              };

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 shrink-0 cursor-pointer ${
                    isActive
                      ? "bg-slate-900 text-white shadow-sm"
                      : "bg-slate-50 text-slate-600 border border-slate-100 hover:bg-slate-100/70"
                  }`}
                  style={
                    isActive && cat !== "All"
                      ? {
                          backgroundColor: catColors.text,
                          color: "#ffffff",
                        }
                      : {}
                  }
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </section>

        {/* TWO COLUMN GRID CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT: ARTICLES LIST */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            <AnimatePresence mode="popLayout">
              {filteredPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredPosts.map((post, idx) => {
                    const catColors = CATEGORY_COLORS[post.category] || {
                      bg: "rgba(123, 47, 247, 0.08)",
                      text: "#7B2FF7",
                      border: "rgba(123, 47, 247, 0.15)",
                      accent: "bg-[#7B2FF7]",
                    };

                    return (
                      <motion.article
                        layout
                        key={post.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.4, delay: idx * 0.05 }}
                        className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-slate-200/60 transition-all duration-300 flex flex-col group"
                      >
                        {/* Thumbnail */}
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent pointer-events-none" />
                          
                          {/* Floating Category Tag */}
                          <span
                            className="absolute top-4 left-4 px-3 py-1 rounded-lg text-[10px] font-extrabold uppercase tracking-widest shadow-sm"
                            style={{
                              backgroundColor: "rgba(255, 255, 255, 0.96)",
                              color: catColors.text,
                            }}
                          >
                            {post.category}
                          </span>
                        </div>

                        {/* Card Info */}
                        <div className="p-6 flex-1 flex flex-col justify-between">
                          <div>
                            {/* Metadata */}
                            <div className="flex items-center gap-4 text-slate-400 text-[10px] sm:text-xs font-medium mb-3">
                              <span className="flex items-center gap-1">
                                <Calendar className="w-3.5 h-3.5" />
                                {post.date}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="w-3.5 h-3.5" />
                                {post.readTime}
                              </span>
                            </div>

                            <h3 className="text-lg font-display font-bold text-slate-900 leading-snug mb-3 group-hover:text-purple-600 transition-colors duration-200">
                              {post.title}
                            </h3>

                            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3">
                              {post.excerpt}
                            </p>
                          </div>

                          {/* Author Block */}
                          <div className="flex items-center justify-between border-t border-slate-50 pt-4 mt-auto">
                            <div className="flex items-center gap-2.5">
                              <img
                                src={post.author.avatar}
                                alt={post.author.name}
                                className="w-8 h-8 rounded-full object-cover"
                              />
                              <div>
                                <h4 className="text-xs font-bold text-slate-800">
                                  {post.author.name}
                                </h4>
                                <p className="text-[10px] text-slate-400">
                                  {post.author.role}
                                </p>
                              </div>
                            </div>

                            <div className="w-8 h-8 rounded-full bg-slate-50 group-hover:bg-purple-50 flex items-center justify-center text-slate-400 group-hover:text-[#7B2FF7] transition-colors">
                              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                            </div>
                          </div>
                        </div>
                      </motion.article>
                    );
                  })}
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-16 bg-slate-50 rounded-2xl border border-dashed border-slate-200"
                >
                  <p className="text-slate-500 text-sm">
                    No articles found matching your criteria. Try adjusting filters or search string.
                  </p>
                  <button
                    onClick={() => {
                      setSelectedCategory("All");
                      setSearchQuery("");
                    }}
                    className="mt-4 px-4 py-2 bg-purple-600 text-white font-bold text-xs rounded-xl hover:bg-purple-700 transition-colors"
                  >
                    Clear All Filters
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* RIGHT: SIDEBAR */}
          <aside className="lg:col-span-4 flex flex-col gap-10">
            
            {/* Newsletter Subscription */}
            <div className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-2xl p-8 shadow-md relative overflow-hidden">
              {/* Sparkle background elements */}
              <div className="absolute right-0 bottom-0 w-32 h-32 rounded-full bg-purple-600/20 blur-2xl pointer-events-none" />
              <div className="absolute left-0 top-0 w-24 h-24 bg-gradient-to-tr from-cyan-500/10 to-transparent blur-xl pointer-events-none" />

              <Mail className="w-10 h-10 text-cyan-400 mb-4" />
              <h3 className="text-xl font-display font-extrabold tracking-tight mb-2">
                Tech Briefings
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                Receive weekly breakdowns of cutting-edge technologies, systems engineering, and coding resources. No spam.
              </p>

              <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
                <input
                  type="email"
                  required
                  placeholder="Enter email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="px-4 py-3 text-xs rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:border-cyan-400 transition-colors"
                />
                <button
                  type="submit"
                  className="w-full py-3 bg-[#7B2FF7] hover:bg-[#9333EA] text-white font-bold text-xs rounded-xl shadow-lg transition-colors cursor-pointer"
                >
                  Subscribe
                </button>
              </form>

              {subscribed && (
                <p className="text-[10px] text-emerald-400 font-semibold mt-3 text-center">
                  Successfully subscribed! Welcome aboard.
                </p>
              )}
            </div>

            {/* Popular Posts */}
            <div className="border border-slate-100 rounded-2xl p-8 bg-white/50 backdrop-blur-md">
              <h3 className="text-sm font-display font-extrabold text-slate-900 uppercase tracking-wider mb-6 flex items-center gap-2 pb-3 border-b border-slate-100">
                <TrendingUp className="w-4 h-4 text-purple-600" />
                Popular Reading
              </h3>

              <div className="flex flex-col gap-5">
                {POPULAR_POSTS.map((post, idx) => (
                  <div key={post.id} className="flex gap-4 group cursor-pointer">
                    <span className="text-lg font-display font-black text-slate-200 group-hover:text-purple-600 transition-colors pt-0.5 shrink-0">
                      0{idx + 1}
                    </span>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-800 leading-snug group-hover:text-[#7B2FF7] transition-colors line-clamp-2">
                        {post.title}
                      </h4>
                      <p className="text-[10px] text-slate-400 mt-1">
                        {post.views}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Topics/Categories Quick List */}
            <div className="border border-slate-100 rounded-2xl p-8 bg-white/50 backdrop-blur-md">
              <h3 className="text-sm font-display font-extrabold text-slate-900 uppercase tracking-wider mb-6 flex items-center gap-2 pb-3 border-b border-slate-100">
                <BookOpen className="w-4 h-4 text-purple-600" />
                Browse Topics
              </h3>

              <div className="flex flex-col gap-3">
                {CATEGORIES.filter(c => c !== "All").map((cat) => {
                  const count = BLOG_POSTS.filter(p => p.category === cat).length;
                  const catColors = CATEGORY_COLORS[cat] || { text: "#64748B" };

                  return (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className="flex items-center justify-between text-left py-1 text-slate-600 hover:text-slate-900 text-xs sm:text-sm transition-colors group cursor-pointer"
                    >
                      <span className="flex items-center gap-2">
                        <span className={`w-1.5 h-1.5 rounded-full ${catColors.accent || "bg-slate-400"}`} />
                        {cat}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-slate-50 text-[10px] text-slate-400 group-hover:bg-purple-50 group-hover:text-[#7B2FF7] transition-all">
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

          </aside>

        </div>

      </div>
    </div>
  );
}
