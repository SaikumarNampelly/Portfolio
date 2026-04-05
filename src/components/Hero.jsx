import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import heroData from "../Data/hero";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import profilePic from "../assets/profile.png";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.16,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Hero = () => {
  const [typedRole, setTypedRole] = useState("");
  const [isGradient, setIsGradient] = useState(false);

  useEffect(() => {
    const fullRole = heroData.role;
    let currentIndex = 0;

    const interval = setInterval(() => {
      currentIndex++;
      setTypedRole(fullRole.slice(0, currentIndex));

      if (currentIndex === fullRole.length) {
        setTimeout(() => {
          currentIndex = 0;
          setTypedRole("");

          // 🔥 toggle color every loop
          setIsGradient((prev) => !prev);
        }, 700);
      }
    }, 80);

    return () => clearInterval(interval);
  }, []);
  return (
    <section id="hero" className="min-h-screen bg-slate-950 text-slate-100 my-0 pt-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-8 md:gap-10 md:px-6 lg:px-12 md:grid-cols-2">
        <motion.div
          className="space-y-6 md:max-w-xl lg:max-w-2xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={fadeUp}
            className="inline-flex items-center rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300 ring-1 ring-cyan-500/20"
          >
            Full Stack Development • MERN • API-first
          </motion.p>

          <div className="space-y-8">
            {/* 🔥 REFINED GREETING */}
            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl lg:text-2xl text-slate-200 font-semibold text-center md:text-left"
            >
              Hello👋, I'm{" "}
            </motion.p>

            {/* NAME */}
            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-center md:text-left"
            >
              <span className="block text-slate-100 italic">
                {heroData.name.split(" ").slice(0, 2).join(" ")}
              </span>
              <span className="block bg-gradient-to-r from-cyan-400 italic via-sky-500 to-blue-500 bg-clip-text text-transparent md:ml-28">
                {heroData.name.split(" ").slice(2).join(" ")}
              </span>
            </motion.h1>

            {/* TYPING ROLE */}
            <motion.p
              variants={fadeUp}
              className={`text-lg md:text-xl lg:text-2xl font-bold text-center md:text-left ${
                isGradient
                  ? "bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-500 bg-clip-text text-transparent"
                  : "text-white"
              }`}
            >
              {typedRole}
              <span className="ml-2 inline-block animate-pulse text-cyan-300">|</span>
            </motion.p>
          </div>

          <div className="space-y-4 text-slate-300">
            <p className="max-w-2xl text-lg leading-relaxed">
              {heroData.tagline}
            </p>
            <p className="max-w-2xl text-base leading-7 text-slate-400">
              I build user-focused experiences with scalable frontends and secure backend systems. My work is centered on responsiveness, performance, and reliable production delivery.
            </p>
          </div>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            {[
              {
                icon: <FaLinkedin />,
                link: "https://www.linkedin.com/in/nampelly-sai-kumar/",
                color: "hover:text-blue-400",
              },
              {
                icon: <FaGithub />,
                link: "https://github.com/SaikumarNampelly",
                color: "hover:text-gray-300",
              },
              {
                icon: <FaInstagram />,
                link: "https://www.instagram.com/_chin2__41/?hl=en",
                color: "hover:text-pink-400",
              },
              {
                icon: <FaTwitter />,
                link: "https://twitter.com/your-profile",
                color: "hover:text-sky-400",
              },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center justify-center w-12 h-12 rounded-full bg-slate-900 border border-slate-700 text-xl text-slate-300 transition ${item.color} hover:border-slate-500`}
              >
                {item.icon}
              </motion.a>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <motion.button
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                document.getElementById("projects")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition"
            >
              View Projects
            </motion.button>
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 px-6 py-3 text-base font-semibold text-slate-200 transition hover:border-slate-500 hover:text-white"
            >
              Download Resume
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex w-full max-w-xl mx-auto h-[300px] md:mx-0 md:h-[600px] items-center justify-center overflow-hidden rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-slate-900 via-slate-950 to-[#03070F] p-4 shadow-2xl shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-shadow duration-500"
        >
          <motion.img
            src={profilePic}
            alt="Profile"
           className="w-full h-full object-cover object-[30%_1%] rounded-2xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#020B16]/95 to-transparent" />
          <div className="pointer-events-none absolute -left-8 top-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl animate-pulse" />
          <div className="pointer-events-none absolute right-8 bottom-8 h-28 w-28 rounded-full bg-blue-500/10 blur-2xl animate-pulse" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;