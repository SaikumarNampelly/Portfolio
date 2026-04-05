import { motion } from "framer-motion";

import SectionTitle from "./ui/SectionTitle";

const lineVariants = {
  hidden: { height: 0 },
  visible: {
    height: "100%",
    transition: { duration: 1.2, ease: "easeInOut" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const About = () => {
  return (
    <section id="about" className="px-4 py-12 md:px-6 md:py-20 bg-slate-950 text-slate-100">
      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.7 }}
        >
          <SectionTitle title="About Me" />
        </motion.div>

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            {/* ROLE BADGE */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="inline-block px-4 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-medium border border-cyan-500/20"
            >
              MERN Stack Developer
            </motion.div>

            {/* MAIN HEADING */}
            <motion.h3
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
              }}
              className="text-3xl font-bold leading-snug"
            >
              I build{" "}
              <span className="text-cyan-400">scalable</span> &{" "}
              <span className="text-sky-400">high-performance</span>{" "}
              web applications
            </motion.h3>

            {/* DESCRIPTION */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
              }}
              className="text-slate-400 leading-relaxed"
            >
              I specialize in crafting clean, responsive frontends with React and building
              secure backend systems using Node.js, Express, and MongoDB.
            </motion.p>

            {/* HIGHLIGHTS (BETTER THAN PARAGRAPH) */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, delay: 0.4 },
                },
              }}
              className="space-y-3"
            >
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400"></span>
                <p className="text-slate-400 text-sm">
                  Clean UI & responsive design focus
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-sky-400"></span>
                <p className="text-slate-400 text-sm">
                  Secure APIs with JWT & role-based access
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-blue-400"></span>
                <p className="text-slate-400 text-sm">
                  Performance & scalable architecture mindset
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE (TIMELINE STYLE) */}
          <motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-100px" }}
  className="relative pl-10"
>
  {/* Gradient Vertical Line */}
  <motion.div
    variants={lineVariants}
    className="absolute left-[10px] top-0 w-[2px] bg-gradient-to-b from-cyan-400 via-sky-500 to-blue-500"
  />

  <div className="space-y-12">
    {/* ITEM */}
    <motion.div
      custom={0}
      variants={itemVariants}
      className="relative flex items-start gap-5 group"
    >
      {/* BULLET NODE */}
      <div className="relative flex items-center justify-center">
        {/* outer ring */}
        <div className="h-5 w-5 rounded-full border border-cyan-400/40"></div>

        {/* inner dot */}
        <div className="absolute h-2.5 w-2.5 rounded-full bg-cyan-400 transition-transform duration-300 group-hover:scale-125"></div>

        {/* glow */}
        <div className="absolute h-5 w-5 rounded-full bg-cyan-400/20 blur-md opacity-50"></div>
      </div>

      {/* CONTENT */}
      <div>
        <h3 className="text-lg font-semibold text-cyan-300">
          MERN Expertise
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed">
          Building full-stack applications using MongoDB, Express, React, and Node.js.
        </p>
      </div>
    </motion.div>

    {/* ITEM */}
    <motion.div
      custom={1}
      variants={itemVariants}
      className="relative flex items-start gap-5 group"
    >
      <div className="relative flex items-center justify-center">
        <div className="h-5 w-5 rounded-full border border-sky-400/40"></div>
        <div className="absolute h-2.5 w-2.5 rounded-full bg-sky-400 transition-transform duration-300 group-hover:scale-125"></div>
        <div className="absolute h-5 w-5 rounded-full bg-sky-400/20 blur-md opacity-50"></div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-sky-300">
          Backend Systems
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed">
          Designing secure APIs with JWT authentication and scalable architecture.
        </p>
      </div>
    </motion.div>

    {/* ITEM */}
    <motion.div
      custom={2}
      variants={itemVariants}
      className="relative flex items-start gap-5 group"
    >
      <div className="relative flex items-center justify-center">
        <div className="h-5 w-5 rounded-full border border-blue-400/40"></div>
        <div className="absolute h-2.5 w-2.5 rounded-full bg-blue-400 transition-transform duration-300 group-hover:scale-125"></div>
        <div className="absolute h-5 w-5 rounded-full bg-blue-400/20 blur-md opacity-50"></div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-blue-300">
          Real Projects
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed">
          Built marketplace platforms, booking systems, and interactive dashboards.
        </p>
      </div>
    </motion.div>
  </div>
</motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;