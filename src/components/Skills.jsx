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
  FaHtml5,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiExpress,
  SiVercel,
  SiGithub,
} from "react-icons/si";

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
  languages: "Languages",
  database: "Databases",
  tools: "Tools & Platforms",
};

const skillIcons = {
  "HTML5": <FaHtml5 className="text-orange-500" />,
  "CSS3": <FaCss3Alt className="text-blue-500" />,
  "React.js": <FaReact className="text-cyan-500" />,
  "Tailwind CSS": <SiTailwindcss className="text-sky-400" />,
  "Node.js": <FaNodeJs className="text-green-500" />,
  "Express.js": <SiExpress className="text-gray-600" />,
  "JavaScript (ES6+)": <FaJsSquare className="text-yellow-400" />,
  "Java": <FaCode className="text-red-500" />,
  "MongoDB": <SiMongodb className="text-green-600" />,
  "MySQL": <SiMysql className="text-blue-600" />,
  "Git": <FaGitAlt className="text-orange-600" />,
  "GitHub": <SiGithub className="text-black" />,
  "VS Code": <FaCode className="text-indigo-500" />,
  "Vercel": <SiVercel className="text-black" />,
};



const Skills = () => {
  return (
    <section id="skills" className="px-4 py-24 bg-[#F1F5F9]">

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
                className="flex flex-col gap-6 p-6 rounded-3xl border border-[#E5E7EB] bg-white shadow-sm hover:shadow-md
      hover:shadow-md transition-all duration-300"
              >
                {/* HEADING */}
                <h3 className={`text-lg font-bold mb-4 text-[#4F46E5]`}>
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
                        whileHover={{ y: -3, borderColor: "#4F46E5" }}
                       className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] text-[#374151] text-sm font-medium transition-all duration-300 hover:border-[#4F46E5]"
                      >
                        <span className="text-base">{icon}</span>
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