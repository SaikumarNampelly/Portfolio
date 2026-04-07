import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import heroData from "../Data/hero";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import profilePic from "../assets/profile.jpeg";

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
  const [roleIndex, setRoleIndex] = useState(0);
  const [isGradient, setIsGradient] = useState(false);

  useEffect(() => {
    const roles = heroData.roles;
    const currentText = roles[roleIndex];
    let currentIndex = 0;
    let isDeleting = false;
    let timeoutId;

    const type = () => {
      if (isDeleting) {
        setTypedRole(currentText.substring(0, currentIndex - 1));
        currentIndex--;
      } else {
        setTypedRole(currentText.substring(0, currentIndex + 1));
        currentIndex++;
      }

      let typeSpeed = isDeleting ? 50 : 100;

      if (!isDeleting && currentIndex === currentText.length) {
        typeSpeed = 2000; // Pause at complete word
        isDeleting = true;
      } else if (isDeleting && currentIndex === 0) {
        isDeleting = false;
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setIsGradient((prev) => !prev);
        typeSpeed = 500;
      }

      timeoutId = setTimeout(type, typeSpeed);
    };

    type();

    return () => clearTimeout(timeoutId);
  }, [roleIndex]);

  return (
    <section id="hero" className="relative min-h-screen w-full overflow-hidden bg-[#F1F5F9] px-4 md:px-6 flex items-center">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-8 sm:px-6 lg:px-12 grid-cols-1 md:grid-cols-2 items-center">   <motion.div
        className="space-y-6 md:max-w-xl lg:max-w-2xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={fadeUp}
          className="inline-flex items-center rounded-full bg-[#EEF2FF] border border-[#E5E7EB] px-4 py-2 text-sm font-medium text-[#4F46E5]"
        >
          MERN Stack Developer • Full Stack • Web Apps
        </motion.p>

        <div className="space-y-8">
          {/* 🔥 REFINED GREETING */}
          <motion.p
            variants={fadeUp}
            className="text-slate-600 font-medium tracking-widest uppercase text-sm md:text-base text-center md:text-left"
          >
            Hello👋, I'm
          </motion.p>

          {/* NAME */}
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-center md:text-left"
          >
            <span className="block text-slate-900 italic font-black">
              {heroData.name.split(" ").slice(0, 2).join(" ")}
            </span>
            <span className="block text-[#4F46E5] text-center md:text-left italic font-black ml-25">
              {heroData.name.split(" ").slice(2).join(" ")}
            </span>
          </motion.h1>

          {/* TYPING ROLE */}
          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl lg:text-2xl font-bold text-center md:text-left text-slate-700"
          >
            {typedRole}
            <span className="ml-2 inline-block animate-pulse border-r-[3px] border-[#4F46E5] h-6 w-0 translate-y-1"></span>
          </motion.p>
        </div>

        <div className="space-y-4 text-slate-600 font-bold">
          <p className="max-w-2xl text-lg leading-relaxed">
            {heroData.tagline}
          </p>
          <p className="max-w-2xl text-base leading-7 text-slate-500">
            I focus on clean UI, secure backend systems, and high-performance applications.
          </p>
        </div>


        <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center md:justify-start">
          {[
            {
              icon: <FaLinkedin />,
              link: "https://www.linkedin.com/in/nampelly-sai-kumar/",
            },
            {
              icon: <FaGithub />,
              link: "https://github.com/SaikumarNampelly",
            },
            {
              icon: <FaInstagram />,
              link: "https://www.instagram.com/_chin2__41/?hl=en",
            },
            {
              icon: <FaTwitter />,
              link: "https://twitter.com/your-profile",
            },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center justify-center w-12 h-12 rounded-full bg-white border border-[#E5E7EB] text-xl text-slate-600 transition hover:text-[#4F46E5] hover:border-[#4F46E5] shadow-sm hover:shadow-md`}
            >
              {item.icon}
            </motion.a>
          ))}
        </motion.div>

        <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center md:justify-start pt-2">
          <motion.button
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              document.getElementById("projects")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="inline-flex items-center justify-center rounded-full bg-[#4F46E5] px-8 py-4 text-base font-bold text-white shadow-lg shadow-indigo-200/50 transition hover:bg-[#4338CA]"

          >
            View My Work
          </motion.button>

          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center rounded-full border border-[#E5E7EB] bg-white px-8 py-4 text-base font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-[#4F46E5] hover:border-[#4F46E5] shadow-sm"
          >
            Download Resume
          </motion.a>
        </motion.div>
      </motion.div>
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
  viewport={{ once: true }}
  className="flex justify-center md:justify-start items-center"
>
  <div className="relative flex items-center justify-center">

    {/* Animated Background Circle */}
    <motion.div
      animate={{ scale: [1, 1.05, 1] }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />

    <motion.div
      className="p-2 ml-22 relative"
      animate={{ y: [0, -8, 0] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <motion.img
        src={profilePic}
        alt="Profile"
        className="w-[240px] h-[240px] md:w-[500px] md:h-[500px] rounded-full border-4 border-black bg-white object-cover object-[65%_15%]"
        
        whileHover={{ scale: 1.06 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>

  </div>
</motion.div>
      </div>
    </section>
  );
};

export default Hero;