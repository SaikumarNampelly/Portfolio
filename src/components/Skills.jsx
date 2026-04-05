import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaCode,
  FaTools,
  FaCss3Alt,
  FaJsSquare,
  FaServer,
} from "react-icons/fa";

import skillsData from "../Data/skills";
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const skillVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// ✅ CATEGORY TITLES
const categoryTitles = {
  frontend: "Frontend Development",
  backend: "Backend Development",
  languages: "Programming Languages",
  database: "Databases",
  tools: "Tools & Platforms",
};

// ✅ ICONS (important fix)
const skillIcons = {
  "HTML5": <FaCode className="text-orange-400" />,
  "CSS3": <FaCss3Alt className="text-blue-400" />,
  "React.js": <FaReact className="text-cyan-400" />,
  "Tailwind CSS": <FaCss3Alt className="text-cyan-400" />,
  "Node.js": <FaNodeJs className="text-green-400" />,
  "Express.js": <FaServer className="text-gray-400" />,
  "JavaScript (ES6+)": <FaJsSquare className="text-yellow-400" />,
  Java: <FaCode className="text-red-400" />,
  MongoDB: <FaDatabase className="text-green-500" />,
  MySQL: <FaDatabase className="text-blue-500" />,
  Git: <FaGitAlt className="text-orange-400" />,
  GitHub: <FaGitAlt className="text-gray-300" />,
  "VS Code": <FaCode className="text-blue-300" />,
  Vercel: <FaTools className="text-white" />,
};

const Skills = () => {
  return (
    <section id="skills" className="px-4 py-12 md:px-6 md:py-20 bg-slate-950 text-slate-100">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* TITLE */}
          <motion.div variants={textVariants}>
            <SectionTitle title="Skills" />
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
  {Object.entries(skillsData).map(([category, skills], i) => (
    <motion.div
      key={i}
      variants={textVariants}
      className="space-y-5 p-6 rounded-2xl border border-white/10 
      bg-white/5 backdrop-blur-xl 
      shadow-lg shadow-black/20 
      hover:shadow-cyan-500/10 
      transition-all duration-300"
    >
      {/* HEADING */}
      <h3 className="text-lg font-semibold text-cyan-300">
        {categoryTitles?.[category] || category}
      </h3>

      {/* SKILLS INSIDE BOX */}
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => {
          const icon =
            skillIcons[skill] || (
              <FaCode className="text-slate-400" />
            );

          return (
            <motion.div
              key={index}
              whileHover={{ y: -3 }}
              className="flex items-center gap-2 px-3 py-2 rounded-full 
              border border-white/10 bg-white/5 backdrop-blur-md 
              text-sm text-slate-200 hover:border-cyan-400/40 transition"
            >
              <span className="text-lg">{icon}</span>
              <span>{skill}</span>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  ))}
</div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Skills;