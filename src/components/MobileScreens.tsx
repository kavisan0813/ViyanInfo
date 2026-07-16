import { motion } from "framer-motion";
import {
  Bell,
  Home as HomeIcon,
  CreditCard,
  LayoutDashboard,
  User,
  Search,
  ShoppingCart,
  Heart,
  Star,
  Plus,
  Calendar,
  CheckCircle2,
  Clock,
  CircleDashed
} from "lucide-react";

export const FloatingGlassCard = ({ children, delay, top, left, right, bottom, className = "" }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ opacity: { delay, duration: 0.6 }, scale: { delay, duration: 0.6 } }}
      style={{ position: "absolute", top, left, right, bottom, zIndex: 10 }}
      className={className}
    >
      <motion.div
        animate={{ y: [-6, 6, -6] }}
        transition={{ duration: 4 + delay * 0.5, repeat: Infinity, ease: "easeInOut" }}
        className="bg-white/80 backdrop-blur-xl border border-[#E9D5FF] rounded-[18px] p-3 shadow-[0_12px_40px_rgba(124,90,255,0.15)] flex items-center gap-3 whitespace-nowrap"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export const PremiumBankingScreen = () => {
  return (
    <div className="h-full bg-slate-50 flex flex-col font-sans relative overflow-hidden">
      {/* Header */}
      <div className="px-5 pt-7 pb-4 bg-white rounded-b-[24px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] z-10 relative">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center border border-purple-200">
              <span className="text-purple-600 font-bold text-sm">JD</span>
            </div>
            <div>
              <div className="text-[10px] text-slate-400 font-medium">Good Morning</div>
              <div className="text-sm font-bold text-slate-800">John Doe</div>
            </div>
          </div>
          <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center relative border border-slate-100">
            <Bell size={14} className="text-slate-600" />
            <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-red-500 rounded-full border border-white" />
          </div>
        </div>

        <div className="mb-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Account Balance</div>
        <div className="flex items-end gap-2">
          {/* Animated Count up */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[26px] font-black text-slate-900 tracking-tight leading-none"
          >
            ₹8,42,250
          </motion.div>
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="text-[10px] font-bold text-emerald-500 mb-1 px-1.5 py-0.5 bg-emerald-50 rounded-md"
          >
            +2.4%
          </motion.span>
        </div>
      </div>

      {/* Graph Section */}
      <div className="px-5 py-4">
        <div className="h-24 relative flex items-end">
          <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 40">
            <defs>
              <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#7B2FF7" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#7B2FF7" stopOpacity="0" />
              </linearGradient>
            </defs>
            <motion.path
              d="M0,35 Q10,25 20,30 T40,15 T60,20 T80,5 T100,10 L100,40 L0,40 Z"
              fill="url(#lineGrad)"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
            <motion.path
              d="M0,35 Q10,25 20,30 T40,15 T60,20 T80,5 T100,10"
              fill="none"
              stroke="#7B2FF7"
              strokeWidth="2.5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
            <motion.circle
              cx="100" cy="10" r="3" fill="#fff" stroke="#7B2FF7" strokeWidth="2"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 1.5 }}
            />
          </svg>
        </div>
      </div>

      {/* Transactions */}
      <div className="flex-1 px-5 pb-20 overflow-hidden">
        <div className="text-[11px] font-bold text-slate-800 mb-3">Recent Transactions</div>
        <div className="space-y-2.5">
          {[
            { name: "Apple Pay", amount: "-₹2,450", icon: "🍏", color: "bg-black text-white" },
            { name: "Salary", amount: "+₹1,45,000", icon: "💼", color: "bg-emerald-100 text-emerald-600" },
            { name: "Netflix", amount: "-₹649", icon: "N", color: "bg-red-100 text-red-600 font-bold" },
            { name: "Amazon", amount: "-₹1,299", icon: "A", color: "bg-orange-100 text-orange-600 font-bold" }
          ].map((tr, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 + 0.3 }}
              className="flex items-center justify-between bg-white p-2 rounded-[12px] border border-slate-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)]"
            >
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-[8px] flex items-center justify-center text-xs ${tr.color}`}>
                  {tr.icon}
                </div>
                <div className="text-xs font-bold text-slate-800">{tr.name}</div>
              </div>
              <div className={`text-[11px] font-bold ${tr.amount.startsWith('+') ? 'text-emerald-500' : 'text-slate-700'}`}>
                {tr.amount}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="absolute bottom-0 left-0 right-0 h-[68px] bg-white/90 backdrop-blur-md border-t border-slate-100 flex items-center justify-around px-2 z-20 pb-2">
        <div className="w-10 h-10 flex flex-col items-center justify-center text-[#7B2FF7]">
          <HomeIcon size={20} fill="currentColor" className="opacity-20" strokeWidth={2} />
        </div>
        <div className="w-10 h-10 flex flex-col items-center justify-center text-slate-400">
          <CreditCard size={20} strokeWidth={2} />
        </div>
        <div className="w-12 h-12 rounded-full bg-[#7B2FF7] -translate-y-5 flex items-center justify-center text-white shadow-[0_8px_16px_rgba(123,47,247,0.3)] border-4 border-slate-50">
          <div className="w-4 h-4 border-[2px] border-white rounded-[4px] relative">
            <div className="absolute inset-0 m-auto w-1.5 h-1.5 bg-white rounded-[2px]" />
          </div>
        </div>
        <div className="w-10 h-10 flex flex-col items-center justify-center text-slate-400">
          <LayoutDashboard size={20} strokeWidth={2} />
        </div>
        <div className="w-10 h-10 flex flex-col items-center justify-center text-slate-400">
          <User size={20} strokeWidth={2} />
        </div>
      </div>
    </div>
  );
};

export const PremiumEcomScreen = () => {
  return (
    <div className="h-full bg-[#FAF9FD] flex flex-col font-sans relative overflow-hidden">
      {/* Header */}
      <div className="px-5 pt-7 pb-3 bg-white z-10 relative">
        <motion.div
          initial={{ width: "80%" }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={14} className="text-slate-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-9 pr-3 py-2 border border-slate-200 rounded-xl leading-5 bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#10B981] sm:text-xs transition-colors"
            placeholder="Search products..."
            readOnly
          />
        </motion.div>
      </div>

      {/* Category Chips */}
      <div className="px-5 py-3 bg-white border-b border-slate-100 whitespace-nowrap overflow-hidden">
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex gap-2"
        >
          {["All", "Electronics", "Fashion", "Furniture"].map((c, i) => (
            <div
              key={c}
              className={`px-3 py-1.5 rounded-lg text-[10px] font-bold ${
                i === 0
                  ? "bg-[#10B981] text-white shadow-[0_4px_12px_rgba(16,185,129,0.3)]"
                  : "bg-slate-100 text-slate-500"
              }`}
            >
              {c}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Product Grid */}
      <div className="flex-1 px-5 pt-4 pb-20 overflow-hidden">
        <div className="grid grid-cols-2 gap-3">
          {[
            { n: "AirPods Pro", p: "₹24,900", r: "4.9", c: "#F3F4F6", tag: "NEW" },
            { n: "Smart Watch", p: "₹18,500", r: "4.7", c: "#FEF3C7" },
            { n: "HomePod Mini", p: "₹9,900", r: "4.8", c: "#E0E7FF" },
            { n: "MagSafe", p: "₹4,500", r: "4.6", c: "#FCE7F3" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: i * 0.1 + 0.2 }}
              className="bg-white rounded-[14px] border border-slate-100 p-2 shadow-[0_4px_16px_rgba(0,0,0,0.02)] relative group overflow-hidden"
            >
              {/* Material Ripple Effect (simulated via scale) */}
              <motion.div 
                whileTap={{ scale: 4, opacity: 0 }} 
                className="absolute inset-0 bg-[#10B981]/10 rounded-full opacity-0 pointer-events-none transform -translate-x-1/2 -translate-y-1/2 origin-center" 
              />
              
              <div className="h-20 rounded-[10px] mb-2 flex items-center justify-center relative" style={{ backgroundColor: item.c }}>
                {item.tag && (
                  <span className="absolute top-1.5 left-1.5 px-1.5 py-0.5 bg-white rounded text-[7px] font-bold text-slate-800">
                    {item.tag}
                  </span>
                )}
                <Heart size={12} className="absolute top-1.5 right-1.5 text-slate-400" />
                <div className="w-10 h-10 rounded-full bg-black/5 blur-md absolute" />
              </div>
              <div className="text-[10px] font-bold text-slate-800 truncate mb-0.5">{item.n}</div>
              <div className="flex items-center gap-1 mb-2">
                <Star size={8} className="text-yellow-400 fill-yellow-400" />
                <span className="text-[8px] font-semibold text-slate-500">{item.r}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-xs font-black text-[#10B981]">{item.p}</div>
                <div className="w-5 h-5 rounded-md bg-slate-900 flex items-center justify-center text-white relative overflow-hidden">
                   <Plus size={12} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="absolute bottom-0 left-0 right-0 h-[68px] bg-white border-t border-slate-100 flex items-center justify-around px-2 z-20 pb-2">
        <div className="w-10 h-10 flex flex-col items-center justify-center text-[#10B981]">
          <HomeIcon size={20} fill="currentColor" className="opacity-20" strokeWidth={2} />
        </div>
        <div className="w-10 h-10 flex flex-col items-center justify-center text-slate-400 relative">
          <ShoppingCart size={20} strokeWidth={2} />
          <div className="absolute top-1.5 right-1 w-3 h-3 bg-[#10B981] rounded-full flex items-center justify-center text-[7px] font-bold text-white border border-white">2</div>
        </div>
        <div className="w-10 h-10 flex flex-col items-center justify-center text-slate-400">
          <Heart size={20} strokeWidth={2} />
        </div>
        <div className="w-10 h-10 flex flex-col items-center justify-center text-slate-400">
          <User size={20} strokeWidth={2} />
        </div>
      </div>
    </div>
  );
};

export const PremiumTaskScreen = () => {
  return (
    <div className="h-full bg-white flex flex-col font-sans relative overflow-hidden">
      {/* Header */}
      <div className="px-5 pt-8 pb-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-xs font-bold text-[#7B2FF7] mb-0.5 uppercase tracking-wider">Today's Tasks</div>
            <div className="text-xl font-black text-slate-900">June 24</div>
          </div>
          <div className="w-10 h-10 rounded-full bg-purple-50 border border-purple-100 flex items-center justify-center text-[#7B2FF7]">
            <Calendar size={16} />
          </div>
        </div>

        {/* Progress Ring */}
        <div className="flex items-center gap-4 bg-slate-50 border border-slate-100 p-3 rounded-[16px]">
          <div className="relative w-12 h-12 flex items-center justify-center">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
              <circle cx="18" cy="18" r="16" fill="none" stroke="#E9D5FF" strokeWidth="3" />
              <motion.circle
                cx="18" cy="18" r="16" fill="none" stroke="#7B2FF7" strokeWidth="3"
                strokeDasharray="100"
                strokeLinecap="round"
                initial={{ strokeDashoffset: 100 }}
                whileInView={{ strokeDashoffset: 18 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </svg>
            <div className="absolute text-[10px] font-black text-slate-800">82%</div>
          </div>
          <div>
            <div className="text-xs font-bold text-slate-800 mb-0.5">Great Progress!</div>
            <div className="text-[10px] text-slate-500">4 of 5 tasks completed</div>
          </div>
        </div>
      </div>

      {/* Task Cards */}
      <div className="flex-1 px-5 space-y-3 pb-20 overflow-hidden">
        {[
          { title: "Client Meeting", time: "10:00 AM", status: "completed", color: "text-emerald-500", bg: "bg-emerald-50", icon: <CheckCircle2 size={14} /> },
          { title: "Project Review", time: "01:30 PM", status: "in-progress", color: "text-[#7B2FF7]", bg: "bg-purple-50", icon: <CircleDashed size={14} className="animate-spin-slow" /> },
          { title: "UI Design Handoff", time: "04:00 PM", status: "pending", color: "text-slate-400", bg: "bg-slate-50", icon: <Clock size={14} /> },
        ].map((task, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.15 + 0.3 }}
            className={`p-3 rounded-[14px] border border-slate-100 flex items-center justify-between ${task.status === 'in-progress' ? 'shadow-[0_4px_20px_rgba(123,47,247,0.08)] bg-white' : 'bg-white'}`}
          >
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${task.bg} ${task.color}`}>
                {task.icon}
              </div>
              <div>
                <div className={`text-xs font-bold ${task.status === 'completed' ? 'text-slate-400 line-through' : 'text-slate-800'}`}>{task.title}</div>
                <div className="text-[9px] font-semibold text-slate-400">{task.time}</div>
              </div>
            </div>
            {task.status === 'in-progress' && (
              <div className="w-1.5 h-1.5 rounded-full bg-[#7B2FF7] animate-pulse" />
            )}
          </motion.div>
        ))}
      </div>

      {/* Bottom Logos */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-slate-50 border-t border-slate-100 flex items-center justify-center gap-8 z-20 pb-2">
         {/* Flutter-like logo */}
         <div className="flex items-center gap-1.5 opacity-50">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none">
               <path d="M14.314 0L2.3 12 6 15.7 21.684 0h-7.37z" fill="#42A5F5"/>
               <path d="M14.314 24L7.857 17.55 11.543 13.85 21.684 24h-7.37z" fill="#0D47A1"/>
               <path d="M7.857 17.55L2.3 12 6 8.3 15.228 17.55H7.857z" fill="#42A5F5"/>
            </svg>
            <span className="text-[10px] font-bold text-slate-500">Flutter</span>
         </div>
         {/* React Native-like logo */}
         <div className="flex items-center gap-1.5 opacity-50">
            <svg viewBox="-11.5 -10.23174 23 20.46348" width="16" height="16">
              <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
              <g stroke="#61dafb" strokeWidth="1" fill="none">
                <ellipse rx="11" ry="4.2"/>
                <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
                <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
              </g>
            </svg>
            <span className="text-[10px] font-bold text-slate-500">React</span>
         </div>
      </div>
    </div>
  );
};
