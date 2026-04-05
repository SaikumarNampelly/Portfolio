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
    <section id="projects" className="px-4 py-12 md:px-6 md:py-20 bg-slate-950 text-slate-100">
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
            <p className="text-slate-400">
              Recent work focused on scalable frontends, secure backend architecture, and polished user experiences. Each project reflects a production-ready approach with responsive design.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projectsData.map((project, index) => (
              <motion.div
                key={index}
                variants={textVariants}
                whileHover={{ scale: 1.04, y: -6 }}
                className="group rounded-[28px] border border-slate-800 bg-slate-900/95 p-6 shadow-2xl shadow-black/25 transition-all duration-300 hover:border-cyan-500/40 hover:bg-slate-900"
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-cyan-300">
                    Featured
                  </span>
                  <span className="text-sm text-slate-500">{project.tech.length} tech</span>
                </div>

                <h3 className="text-2xl font-semibold text-slate-100 mb-4">
                  {project.title}
                </h3>
                <p className="text-slate-400 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-xs font-medium text-sky-300"
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
                    className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-950 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-cyan-400 hover:text-cyan-300"
                  >
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-500/15"
                  >
                    Live
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