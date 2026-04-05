import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const navItems = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("#hero");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-xl rounded-b-3xl ${
        scrolled
          ? "bg-slate-950/95 shadow-xl shadow-black/20 border-b border-slate-800"
          : "bg-slate-950/80"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex justify-between items-center ">
        <motion.h1
          whileHover={{ scale: 1.08 }}
          className="font-extrabold text-lg md:text-xl cursor-pointer"
        >
          <span className="text-white">Sai Kumar</span>{" "}
          <span className="text-cyan-400">Nampelly</span>
        </motion.h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              onClick={() => setActive(item.href)}
              whileHover={{ y: -2 }}
              className={`relative text-base font-medium transition-colors ${
                active === item.href
                  ? "text-cyan-300"
                  : "text-slate-300 hover:text-cyan-200"
              }`}
            >
              {item.label}
              {active === item.href && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 -bottom-1 w-full h-[2px] bg-cyan-300 rounded"
                />
              )}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-slate-300 hover:text-cyan-300 transition-colors"
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-slate-950/95 backdrop-blur-xl border-t border-slate-800 md:hidden"
          >
            <div className="flex flex-col py-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => {
                    setActive(item.href);
                    setMenuOpen(false);
                  }}
                  className={`px-6 py-3 text-sm font-medium transition-colors ${
                    active === item.href
                      ? "text-cyan-300 bg-cyan-500/10"
                      : "text-slate-300 hover:text-cyan-200 hover:bg-slate-800/50"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;