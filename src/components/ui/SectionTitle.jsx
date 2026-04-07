import { motion } from "framer-motion";

const SectionTitle = ({ title, description }) => {
  return (
    <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-8 md:mb-12">
      <motion.h2 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight px-4"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-500 font-bold text-lg md:text-xl px-6 leading-relaxed"
        >
          {description}
        </motion.p>
      )}
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: 60 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="h-1 bg-[#4F46E5] rounded-full mt-4"
      />
    </div>
  );
};

export default SectionTitle;