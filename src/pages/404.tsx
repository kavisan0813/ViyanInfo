import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  // Animation settings extracted from the source logic
  const springTransition = {
    type: "spring" as const,
    bounce: 0.2,
    duration: 0.8,
  };

  return (
    <div
      className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center font-sans"
      style={{
        background: "linear-gradient(180deg, #5c9fcb 0%, #e4ecf9 100%)",
      }}
    >
      {/* Moving Clouds Background */}
      <div className="absolute top-0 left-0 w-full h-[80vh] pointer-events-none z-0">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full h-full"
        >
          <img
            src="https://framerusercontent.com/images/7VzAUrVoJj5SUdtluaknwLEpQ.png"
            alt="Clouds"
            className="w-full h-full object-contain opacity-60"
          />
        </motion.div>
      </div>

      {/* Main Content Container */}
      <main className="relative z-10 flex flex-col items-center max-w-4xl px-6 text-center">
        {/* 404 Graphic & Video Section */}
        <div className="relative w-full max-w-[600px] mb-8">
          <motion.div
            initial={{ opacity: 0, y: -150 }}
            animate={{ opacity: 0.8, y: 0 }}
            transition={springTransition}
          >
            <img
              src="https://framerusercontent.com/images/i3cHrscm5nkjoxd2Xm0cn8g6AT0.svg"
              alt="404"
              className="w-full h-auto mix-blend-overlay"
            />
          </motion.div>

          {/* Centered Overlay Video */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[72%] aspect-[1.37] mix-blend-darken rounded-2xl overflow-hidden">
            <video
              src="https://framerusercontent.com/assets/RXryTP4CWkVI3fdtwhwqGX0DsEs.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          animate={{ opacity: 1, y: 0 }}
          transition={springTransition}
          className="flex flex-col items-center gap-6"
        >
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#2c2a48]">
              Oops, I think we’re lost...
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-[#6e6e6e]">
              Let’s get you back to somewhere familiar.
            </p>
          </div>

          {/* Back Home Button */}
          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-gradient-to-b from-[#fafafa] to-[#f8f8f8] shadow-[0_1px_1px_rgba(0,0,0,0.25),0_3px_4px_-1px_rgba(0,0,0,0.1),inset_0_1px_#fff] border border-[#e6e6e666] cursor-pointer"
            >
              <svg width="24" height="24" viewBox="0 0 20 20" fill="none">
                <path
                  d="M8 6L5 9M5 9L8 12M5 9H13M18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18C13.9706 18 18 13.9706 18 9Z"
                  stroke="#2C2A49"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-xl font-bold text-[#2c2a49]">
                Back Home
              </span>
            </motion.div>
          </Link>
        </motion.div>
      </main>
    </div>
  );
};

export default NotFoundPage;
