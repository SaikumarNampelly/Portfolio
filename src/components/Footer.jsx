import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="bg-[#F1F5F9] border-t border-[#E5E7EB] py-12"
    > 
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="flex flex-col items-center md:items-start gap-4">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
            Sai Kumar <span className="text-[#4F46E5]">Nampelly</span>
          </h2>
          <p className="text-slate-500 font-medium text-sm max-w-xs text-center md:text-left">
            Crafting high-performance web applications with modern tech stacks.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-6">
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
                whileHover={{ y: -4, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center w-11 h-11 rounded-full bg-white border border-[#E5E7EB] text-lg text-slate-600 transition-all hover:text-[#4F46E5] hover:border-[#4F46E5] shadow-sm hover:shadow-md"
                title={item.label}
              >
                {item.icon}
              </motion.a>
            ))}
          </div>

          <p className="text-slate-400 text-xs font-medium">
            © {new Date().getFullYear()} <span className="text-slate-600">Sai Kumar Nampelly</span>. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;