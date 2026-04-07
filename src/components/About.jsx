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
    <section id="about" className="px-4  md:px-6 md:py-20 bg-white text-slate-900">
      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
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
              className="inline-block px-4 py-1 rounded-full bg-[#EEF2FF] text-[#4F46E5] text-sm font-medium border border-[#E5E7EB]"
            >
              MERN Stack Developer
            </motion.div>

            {/* MAIN HEADING */}
            <motion.h3
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
              }}
              className="text-3xl font-bold leading-snug text-slate-900"
            >
              I build <span className="text-[#4F46E5]">scalable</span> & <span className="text-[#4F46E5]">high-performance</span> web applications
            </motion.h3>

            {/* DESCRIPTION */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
              }}
              className="text-slate-600 leading-relaxed"
            >
              I specialize in developing responsive user interfaces with React and building secure backend systems using Node.js, Express, and MongoDB.
            </motion.p>

            {/* HIGHLIGHTS */}
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
                <span className="mt-1 h-2 w-2 rounded-full bg-[#4F46E5]"></span>
                <p className="text-slate-600 text-sm">
                  Clean and responsive UI design
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[#4F46E5]"></span>
                <p className="text-slate-600 text-sm">
                  Secure APIs with JWT-based authentication
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[#4F46E5]"></span>
                <p className="text-slate-600 text-sm">
                  Focus on performance and scalable architecture                </p>
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
              className="absolute left-[10px] top-0 w-[2px] bg-slate-200"
            />

            <div className="space-y-12">
              {/* ITEM 1 */}
              <motion.div custom={0} variants={itemVariants} className="relative flex items-start gap-5 group">
                <div className="relative flex items-center justify-center">
                  <div className="h-5 w-5 rounded-full border border-slate-300 bg-white"></div>
                  <div className="absolute h-2.5 w-2.5 rounded-full bg-[#4F46E5] transition-transform duration-300 group-hover:scale-125"></div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800">MERN Expertise</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Building full-stack applications using MongoDB, Express, React, and Node.js with clean architecture and scalable design.
                  </p>
                </div>
              </motion.div>

              {/* ITEM 2 */}
              <motion.div custom={1} variants={itemVariants} className="relative flex items-start gap-5 group">
                <div className="relative flex items-center justify-center">
                  <div className="h-5 w-5 rounded-full border border-slate-300 bg-white"></div>
                  <div className="absolute h-2.5 w-2.5 rounded-full bg-[#4F46E5] transition-transform duration-300 group-hover:scale-125"></div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800">Backend Systems</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Designing RESTful APIs with authentication and scalable backend architecture.
                  </p>
                </div>
              </motion.div>

              {/* ITEM 3 */}
              <motion.div custom={2} variants={itemVariants} className="relative flex items-start gap-5 group">
                <div className="relative flex items-center justify-center">
                  <div className="h-5 w-5 rounded-full border border-slate-300 bg-white"></div>
                  <div className="absolute h-2.5 w-2.5 rounded-full bg-[#4F46E5] transition-transform duration-300 group-hover:scale-125"></div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800">Real Projects</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Built user-focused platforms including booking systems and interactive dashboards.
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