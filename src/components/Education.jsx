import { motion } from "framer-motion";
import educationData from "../Data/education";
import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.25,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

const Education = () => {
  return (
    <section id="education" className="px-4 py-12 md:px-6 md:py-20 bg-slate-950 text-slate-100">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-10"
        >
          <motion.div variants={itemVariants} className="space-y-4 text-center max-w-3xl mx-auto">
            <SectionTitle title="Education" />
            <p className="text-slate-400">
              Formal training and practical learning in computer science, design, and modern engineering practices that support every product I build.
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-[18px] md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-sky-400 to-blue-500"></div>
            <div className="space-y-10 md:space-y-12">
              {educationData.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative flex items-start"
                >
                  <div className="absolute left-[10px] md:left-6 w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 border-4 border-slate-950 z-10" />
                  <div className="ml-10 md:ml-20 w-full rounded-[28px] border border-slate-800 bg-slate-900/95 p-5 md:p-8 shadow-2xl shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40">
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                      <h3 className="text-xl md:text-2xl font-bold text-cyan-300 tracking-tight">{edu.level}</h3>
                      <span className="rounded-full bg-sky-500/10 px-4 py-1 text-sm font-medium text-sky-300 border border-sky-500/20">
                        {edu.duration || "Timeline"}
                      </span>
                    </div>
                    <p className="text-slate-200 text-lg mb-4 font-medium">{edu.institute}</p>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm gap-2 mt-6 pt-4 border-t border-slate-800/50">
                      <span className="text-slate-400 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>
                        {edu.location || "Location details"}
                      </span>
                      <span className="text-cyan-400 font-bold bg-cyan-400/5 px-3 py-1 rounded-lg">{edu.score}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Education;