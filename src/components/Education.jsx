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
    <section id="education" className="px-4 py-20 bg-[#F1F5F9]">

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
              Formal training in computer science and modern engineering practices, supporting the development of scalable web applications.            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-[18px] md:left-8 top-0 bottom-0 w-0.5 bg-slate-200"></div>






            <div className="space-y-10 md:space-y-12">
              {educationData.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative flex items-start"
                >
                  <div className="absolute left-[10px] md:left-6 w-5 h-5 rounded-full border-4 border-white z-10 shadow-sm bg-[#4F46E5]" />






                  <div className="ml-10 md:ml-20 w-full rounded-2xl border border-[#E5E7EB] bg-white p-6 md:p-8 shadow-sm transition-all duration-300 hover:border-[#4F46E5] hover:shadow-md">






                    <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                      <h3 className="text-xl md:text-2xl font-bold text-[#4F46E5] tracking-tight">{edu.level}</h3>





                      <span className="rounded-full bg-[#EEF2FF] px-4 py-1.5 text-[10px] font-bold text-[#4F46E5] border border-[#E5E7EB] uppercase tracking-wider">
                        {edu.duration || "Timeline"}
                      </span>






                    </div>
                    <p className="text-slate-800 text-lg mb-4 font-medium">{edu.institute}</p>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm gap-2 mt-6 pt-4 border-t border-slate-100">
                      <span className="text-slate-400 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                        {edu.location || "Location details"}
                      </span>
                      <span className="text-[#4F46E5] font-bold bg-[#EEF2FF] px-4 py-1 rounded-lg border border-[#E5E7EB]">{edu.score}</span>






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