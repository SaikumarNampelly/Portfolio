import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";


const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [trail, setTrail] = useState([]);
  const [clickRipples, setClickRipples] = useState([]);
  const [particles, setParticles] = useState([]);
  const [magneticTarget, setMagneticTarget] = useState(null);

  // smoother motion (slightly relaxed for premium feel)
  const cursorX = useSpring(0, { damping: 18, stiffness: 180 });
  const cursorY = useSpring(0, { damping: 18, stiffness: 180 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      let pos = { x: e.clientX, y: e.clientY };

      // Apply magnetic effect for buttons
      if (magneticTarget && cursorVariant === "button") {
        const centerX = magneticTarget.left + magneticTarget.width / 2;
        const centerY = magneticTarget.top + magneticTarget.height / 2;
        const distance = Math.sqrt(
          Math.pow(pos.x - centerX, 2) + Math.pow(pos.y - centerY, 2)
        );

        if (distance < 80) { // Magnetic range
          const strength = (80 - distance) / 80;
          pos.x += (centerX - pos.x) * strength * 0.3;
          pos.y += (centerY - pos.y) * strength * 0.3;
        }
      }

      setMousePosition(pos);
      cursorX.set(pos.x - 16);
      cursorY.set(pos.y - 16);

      // cleaner trail (only 3 points)
      setTrail((prev) => [pos, ...prev].slice(0, 3));
    };

    const handleMouseOver = (e) => {
      const target = e.target.closest("a, button");
      if (target) {
        setCursorVariant("button");
        setMagneticTarget(target.getBoundingClientRect());
      } else if (e.target.closest("p, span, h1, h2, h3")) {
        setCursorVariant("text");
        setMagneticTarget(null);
      } else {
        setCursorVariant("default");
        setMagneticTarget(null);
      }
    };

    const handleClick = (e) => {
      const ripple = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      };

      setClickRipples((prev) => [...prev, ripple]);

      // Create particle burst with different colors
      const colors = ["#4F46E5", "#7C3AED", "#EC4899", "#F59E0B", "#10B981", "#EF4444"];
      const newParticles = Array.from({ length: 8 }, (_, i) => ({
        id: Date.now() + i,
        x: e.clientX,
        y: e.clientY,
        angle: (i * 45) * (Math.PI / 180), // 45 degrees apart for 8 particles
        speed: 1.5 + Math.random() * 2.5,
        color: colors[i % colors.length],
        size: 1 + Math.random() * 2,
      }));

      setParticles((prev) => [...prev, ...newParticles]);

      setTimeout(() => {
        setClickRipples((prev) =>
          prev.filter((r) => r.id !== ripple.id)
        );
      }, 500);

      // Remove particles after animation
      setTimeout(() => {
        setParticles((prev) =>
          prev.filter((p) => !newParticles.some((np) => np.id === p.id))
        );
      }, 800);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("click", handleClick);
    };
  }, [cursorX, cursorY]);

  // 🎯 cursor animation variants
  const variants = {
    default: {
      scale: 1,
      width: 32,
      height: 32,
      borderRadius: "50%",
      background: "radial-gradient(circle, rgba(79, 70, 229, 0.1) 0%, rgba(79, 70, 229, 0.05) 50%, transparent 100%)",
      rotate: 0,
      boxShadow: "0 0 10px rgba(79, 70, 229, 0.3)",
    },
    button: {
      scale: [1.6, 1.8, 1.6],
      width: 32,
      height: 32,
      borderRadius: ["20%", "30%", "20%"],
      background: "radial-gradient(circle, rgba(79, 70, 229, 0.3) 0%, rgba(124, 58, 237, 0.2) 50%, rgba(79, 70, 229, 0.1) 100%)",
      rotate: [0, 5, -5, 0],
      boxShadow: "0 0 20px rgba(79, 70, 229, 0.6), 0 0 40px rgba(79, 70, 229, 0.4), 0 0 60px rgba(124, 58, 237, 0.3)",
    },
    text: {
      scale: 1,
      width: [2, 4, 2],
      height: 24,
      borderRadius: "2px",
      background: "linear-gradient(180deg, rgba(79, 70, 229, 0.9) 0%, rgba(124, 58, 237, 0.8) 100%)",
      rotate: 0,
      boxShadow: "0 0 5px rgba(79, 70, 229, 0.5)",
    },
  };

  return (
    <>
      {/* Main Cursor */}
      <motion.div
        style={{
          translateX: cursorX,
          translateY: cursorY,
        }}
        variants={variants}
        animate={cursorVariant}
        whileHover={{ 
          scale: cursorVariant === "button" ? 2.2 : 1.1,
          transition: { duration: 0.2 }
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 15,
          scale: { duration: 0.3 },
          rotate: { duration: 0.5, ease: "easeInOut" },
          borderRadius: { duration: 0.3 },
          boxShadow: { duration: 0.3 },
        }}
        className="fixed top-0 left-0 border-2 border-[#4F46E5] pointer-events-none z-[9999] hidden lg:block"
      />

      {/* Inner Dot */}
      <motion.div
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
          scale: cursorVariant === "button" ? [1, 1.5, 1] : [1, 1.3, 1],
          rotate: cursorVariant === "text" ? [0, 180, 360] : 0,
        }}
        transition={{
          duration: cursorVariant === "button" ? 0.8 : 1.2,
          repeat: Infinity,
          ease: "easeInOut",
          rotate: { duration: 2, repeat: Infinity, ease: "linear" },
        }}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-[#4F46E5] rounded-full pointer-events-none z-[9999] hidden lg:block"
      />

      {/* Trail */}
      {trail.slice(1).map((pos, index) => (
        <motion.div
          key={index}
          animate={{
            x: pos.x - 2,
            y: pos.y - 2,
            scale: [0.5 - index * 0.15, 0.7 - index * 0.15, 0.5 - index * 0.15],
            opacity: [0.5 - index * 0.2, 0.7 - index * 0.2, 0.5 - index * 0.2],
            rotate: index % 2 === 0 ? [0, 180, 360] : [360, 180, 0],
          }}
          transition={{
            duration: 1.5 + index * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
            rotate: { duration: 2, repeat: Infinity, ease: "linear" },
          }}
          className="fixed top-0 left-0 w-1 h-1 bg-[#4F46E5] rounded-full pointer-events-none z-[9998] hidden lg:block"
        />
      ))}

      {/* Click Ripple */}
      {clickRipples.map((ripple) => (
        <motion.div
          key={ripple.id}
          initial={{ scale: 0, opacity: 0.6 }}
          animate={{ scale: 2.5, opacity: 0 }}
          transition={{ duration: 0.4 }}
          style={{
            left: ripple.x - 16,
            top: ripple.y - 16,
          }}
          className="fixed w-8 h-8 border border-[#4F46E5] rounded-full pointer-events-none z-[9997] hidden lg:block"
        />
      ))}

      {/* Particle Burst */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{
            x: particle.x - particle.size / 2,
            y: particle.y - particle.size / 2,
            scale: 1,
            opacity: 0.9,
          }}
          animate={{
            x: particle.x + Math.cos(particle.angle) * 40 * particle.speed,
            y: particle.y + Math.sin(particle.angle) * 40 * particle.speed,
            scale: 0,
            opacity: 0,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
          }}
          className="fixed rounded-full pointer-events-none z-[9996] hidden lg:block"
        />
      ))}
    </>
  );
};

export default CustomCursor;