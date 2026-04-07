import { motion } from "framer-motion";
import projectsData from "../Data/Projects";
import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const Projects = () => {
  return (
    <section id="projects" className="px-4 py-20 bg-white">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-10"
        >
          <motion.div variants={textVariants} className="space-y-4 text-center max-w-3xl mx-auto">
            <SectionTitle title="Projects" />
            <p className="text-slate-600">
              Recent work focused on scalable frontends, secure backend architecture, and polished user experiences. Each project reflects a production-ready approach with responsive design.
            </p>
          </motion.div>

          <div className="grid gap-7 md:grid-cols-8 lg:grid-cols-2">
            {projectsData.map((project, index) => (
              <motion.div
                key={index}
                variants={textVariants}
                whileHover={{ y: -8 }}
                className="group overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white shadow-sm transition-all duration-300 hover:border-[#4F46E5] hover:shadow-md p-6"
              >
                <div className="relative mb-6 overflow-hidden rounded-2xl border border-slate-100 bg-slate-50">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="aspect-video w-full object-cover object-top transition duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent pointer-events-none" />
                </div>

                <div className="flex items-center justify-between mb-4">
                  <span className="rounded-full bg-[#EEF2FF] border border-[#E5E7EB] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#4F46E5]">
                    Featured
                  </span>
                  <span className="text-xs font-medium text-slate-400">{project.tech.length} Technologies</span>
                </div>


                <h3 className="mb-3 text-2xl font-bold text-slate-900">
                  {project.title}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-slate-600 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="rounded-md border border-[#E5E7EB] bg-[#F8FAFC] px-2.5 py-1 text-[11px] font-semibold text-slate-600 transition-colors group-hover:border-indigo-100 group-hover:bg-indigo-50/50"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center rounded-xl border border-[#E5E7EB] bg-white px-4 py-2.5 text-sm font-bold text-slate-700 transition hover:bg-[#F8FAFC] hover:text-[#4F46E5] hover:border-[#4F46E5]"
                  >
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center rounded-xl bg-[#4F46E5] px-4 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-[#4338CA] hover:shadow-md"
                  >
                    Live Demo
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Projects;