import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
      className="py-10 bg-slate-950 border-t border-slate-800"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center space-y-6">
        
        {/* NAME */}
        <h2 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Sai Kumar Nampelly
        </h2>

        {/* SOCIAL LINKS */}
        <div className="flex gap-5 text-lg">
          {[
            {
              icon: <FaLinkedin />,
              link: "https://linkedin.com/in/your-profile",
            },
            {
              icon: <FaGithub />,
              link: "https://github.com/SaikumarNampelly",
            },
            {
              icon: <FaInstagram />,
              link: "https://instagram.com/your-profile",
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
              whileHover={{ y: -4, scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-slate-900 border border-slate-700 text-slate-300 hover:text-cyan-400 hover:border-slate-500 transition"
            >
              {item.icon}
            </motion.a>
          ))}
        </div>

        {/* COPYRIGHT */}
        <p className="text-slate-400 text-sm text-center">
          © {new Date().getFullYear()}{" "}
          <span className="text-cyan-400 font-medium">
            Sai Kumar Nampelly
          </span>
          . All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;