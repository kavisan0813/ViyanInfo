import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { onHoverBurst } from "../utils/particleBurst";
import {
  Search,
  Calendar,
  Clock,
  ArrowRight,
  TrendingUp,
  Mail,
  BookOpen,
  ChevronRight,
  Linkedin,
  Github,
  Instagram,
  Facebook
} from "lucide-react";
import { Link } from "react-router-dom";
import blogImg from "../assets/blog img.webp";
import logo1 from "../assets/Logoimage.svg";

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
            onMouseEnter={onHoverBurst}
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
      
      {/* COMBINED CTA + FOOTER SECTION */}
      <section className="relative w-full overflow-hidden" style={{ minHeight: "950px" }}>
        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0 z-0">
          <img
            src={blogImg}
            alt="Blog Background"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* WARM DARK CINEMATIC OVERLAY */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(20, 8, 2, 0.45), rgba(25, 10, 5, 0.60), rgba(10, 4, 2, 0.82))",
          }}
        />

        {/* TOP AREA: CTA OVERLAY */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center pt-16 pb-12 px-6 mt-4 md:mt-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto flex flex-col items-center"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight mb-6 drop-shadow-xl" style={{ fontSize: "42px" }}>
              Ready to start your internship journey?
            </h2>
            <motion.div
              whileHover={{ scale: 1.05, translateY: -3 }}
              whileTap={{ scale: 0.98 }}
              className="mt-6"
            >
              <a href="#contactform" className="block relative group">
                <div className="absolute inset-0 bg-[#7c3aed] blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-300 rounded-full" />
                <button
                  className="relative px-8 py-4 text-white font-bold text-sm uppercase tracking-wider rounded-full shadow-2xl transition-all duration-300 border border-white/10"
                  style={{
                    background: "linear-gradient(135deg, #7c3aed, #9333ea)",
                  }}
                >
                  Apply Now
                </button>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* BOTTOM AREA: GLASSMORPHISM FOOTER */}
        <div
          className="relative z-10 w-[94%] md:w-[90%] max-w-[1450px] mx-auto mb-12 rounded-[34px] p-7 md:p-[40px] lg:p-[60px]"
          style={{
            background: "rgba(35, 15, 5, 0.55)",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 10px 50px rgba(255, 120, 40, 0.18)",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Column 1: Logo & Description */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <Link to="/" className="block w-fit mb-6">
                <img
                  src={logo1}
                  alt="ViyanInfo"
                  className="h-10 w-auto object-contain select-none"
                />
              </Link>
              <p className="text-sm leading-relaxed text-[rgba(255,255,255,0.82)] max-w-xs mb-8">
                Building scalable software, AI solutions, and digital products
                that help businesses grow faster and operate smarter.
              </p>
              {/* Social Icons */}
              <div className="flex gap-4">
                {[
                  { icon: <Linkedin size={18} />, href: "#" },
                  { icon: <Github size={18} />, href: "#" },
                  { icon: <Instagram size={18} />, href: "#" },
                  { icon: <Facebook size={18} />, href: "#" },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white transition-all duration-300"
                    style={{
                      background: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      backdropFilter: "blur(4px)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = "0 0 15px rgba(255, 120, 40, 0.6)";
                      e.currentTarget.style.transform = "scale(1.08)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = "none";
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Services */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h4 className="text-white font-bold text-sm uppercase tracking-[0.5px] mb-6">
                Services
              </h4>
              <ul className="space-y-4">
                {[
                  { name: "Custom Software Development", path: "/services" },
                  { name: "Web Applications", path: "/services/websites" },
                  { name: "Mobile Applications", path: "/services/mobile" },
                  { name: "AI Solutions", path: "/services" },
                  { name: "UI/UX Design", path: "/services" },
                  { name: "Internship Programs", path: "/internship" },
                ].map((item, idx) => (
                  <li key={idx}>
                    <Link
                      to={item.path}
                      className="text-[rgba(255,255,255,0.82)] hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,120,40,0.8)] transition-all duration-300 text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Resources */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h4 className="text-white font-bold text-sm uppercase tracking-[0.5px] mb-6">
                Resources
              </h4>
              <ul className="space-y-4">
                {[
                  { name: "Portfolio", path: "/portfolio" },
                  { name: "Case Studies", path: "/portfolio" },
                  { name: "Careers", path: "/careers" },
                  { name: "Blog", path: "/blog" },
                  { name: "Technology Stack", path: "/tech-stack" },
                  { name: "Contact", path: "/contact" },
                ].map((item, idx) => (
                  <li key={idx}>
                    <Link
                      to={item.path}
                      className="text-[rgba(255,255,255,0.82)] hover:text-white hover:drop-shadow-[0_0_8px_rgba(124,58,237,0.8)] transition-all duration-300 text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h4 className="text-white font-bold text-sm uppercase tracking-[0.5px] mb-6">
                Contact
              </h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 justify-center md:justify-start group cursor-pointer">
                  <div className="text-[rgba(255,255,255,0.82)] group-hover:text-[#ff7828] transition-colors">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <span className="text-[rgba(255,255,255,0.82)] group-hover:text-white text-sm transition-colors">
                    admin@viyaninfo.com
                  </span>
                </li>
                <li className="flex items-center gap-3 justify-center md:justify-start group cursor-pointer">
                  <div className="text-[rgba(255,255,255,0.82)] group-hover:text-[#ff7828] transition-colors">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <span className="text-[rgba(255,255,255,0.82)] group-hover:text-white text-sm transition-colors">
                    +91 6379723465
                  </span>
                </li>
                <li className="flex items-center gap-3 justify-center md:justify-start group cursor-pointer">
                  <div className="text-[rgba(255,255,255,0.82)] group-hover:text-[#ff7828] transition-colors">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <span className="text-[rgba(255,255,255,0.82)] group-hover:text-white text-sm transition-colors">
                    Tiruvallur, Tamil Nadu
                  </span>
                </li>
                <li className="flex items-center gap-3 justify-center md:justify-start group cursor-pointer">
                  <div className="text-[rgba(255,255,255,0.82)] group-hover:text-[#ff7828] transition-colors">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                  </div>
                  <span className="text-[rgba(255,255,255,0.82)] group-hover:text-white text-sm transition-colors">
                    www.viyaninfo.com
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* BOTTOM BAR */}
          <div className="h-px bg-[rgba(255,255,255,0.12)] w-full mb-6 mt-12" />

          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4 text-xs text-[rgba(255,255,255,0.62)] pb-8">
            <p>© 2026 ViyanInfo. All rights reserved.</p>

            <div className="flex flex-wrap gap-5 justify-center">
              <Link
                to="/privacy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                to="/about"
                className="hover:text-white transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
