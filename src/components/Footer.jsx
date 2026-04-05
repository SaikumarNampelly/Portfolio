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
      <div className="max-w-6xl mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
        
        <div className="flex flex-col items-center md:items-start gap-3">
          <h2 className="text-2xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Sai Kumar Nampelly
          </h2>
          <p className="text-slate-400 text-sm max-w-xs">
            Building digital experiences with precision and passion.
          </p>
        </div>

        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-4">
            {[
              { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/nampelly-sai-kumar/", label: "LinkedIn" },
              { icon: <FaGithub />, link: "https://github.com/SaikumarNampelly", label: "GitHub" },
              { icon: <FaInstagram />, link: "https://www.instagram.com/_chin2__41/", label: "Instagram" },
              { icon: <FaTwitter />, link: "https://twitter.com/", label: "Twitter" },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-400/40 transition-all shadow-lg"
                title={item.label}
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
          
          <p className="text-slate-500 text-xs tracking-wider">
            © {new Date().getFullYear()} <span className="text-cyan-500/80 font-medium">Sai Kumar Nampelly</span>.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;