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
      className={`fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-md ${
        scrolled
          ? "bg-white/90 border-b border-[#E5E7EB] shadow-sm"
          : "bg-transparent"
      }`}

    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex justify-between items-center ">
        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="font-black text-xl cursor-pointer tracking-tight"
        >
          <span className="text-slate-900">Sai Kumar</span>{" "}
          <span className="text-[#4F46E5]">Nampelly</span>
        </motion.h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              onClick={() => setActive(item.href)}
              className={`relative text-sm font-bold tracking-wide transition-colors ${
                active === item.href
                  ? "text-[#4F46E5]"
                  : "text-slate-600 hover:text-[#4F46E5]"
              }`}
            >
              {item.label}
              {active === item.href && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#4F46E5] rounded-full"
                />
              )}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-slate-500 hover:text-[#4F46E5] transition-colors"
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={menuOpen ? "open" : "closed"}
          variants={{
            open: { height: "auto", opacity: 1, display: "block" },
            closed: { height: 0, opacity: 0, transitionEnd: { display: "none" } },
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute top-full left-0 right-0 overflow-hidden bg-white/95 backdrop-blur-lg border-t border-[#E5E7EB] md:hidden shadow-xl"
        >
          <div className="flex flex-col py-6 px-4 gap-2">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ x: -20, opacity: 0 }}
                animate={menuOpen ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                onClick={() => {
                  setActive(item.href);
                  setMenuOpen(false);
                }}
                className={`flex items-center px-6 py-4 text-base font-semibold rounded-2xl transition-all ${
                  active === item.href
                    ? "text-[#4F46E5] bg-indigo-50 border border-indigo-100"
                    : "text-slate-700 hover:text-[#4F46E5] hover:bg-slate-50"
                }`}
              >
                {item.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;