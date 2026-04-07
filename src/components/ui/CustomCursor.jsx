import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const cursorX = useSpring(0, { damping: 20, stiffness: 250 });
  const cursorY = useSpring(0, { damping: 20, stiffness: 250 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseOver = (e) => {
      if (e.target.closest("a, button, input, textarea")) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Outer Ring */}
      <motion.div
        style={{
          translateX: cursorX,
          translateY: cursorY,
        }}
        className={`fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-[#4F46E5] pointer-events-none z-[9999] hidden lg:block transition-transform duration-300 ${
          isHovering ? "scale-150 bg-[#4F46E5]/10 border-indigo-300" : "scale-100"
        }`}
      />
      {/* Inner Dot */}
      <motion.div
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovering ? 0 : 1,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
        className="fixed top-0 left-0 w-2 h-2 bg-[#4F46E5] rounded-full pointer-events-none z-[9999] hidden lg:block"
      />
    </>
  );
};

export default CustomCursor;
