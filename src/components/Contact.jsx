import { motion } from "framer-motion";
import { useState } from "react";
import contactData from "../Data/contact";
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

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setStatus("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill all required fields.");
      return;
    }

    const subject = formData.subject || `Message from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0A${formData.message}`;
    const mailtoLink = `mailto:${contactData.email}?subject=${encodeURIComponent(subject)}&body=${body}`;

    setStatus("Opening your email client...");
    window.location.href = mailtoLink;

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="px-4 py-12 md:px-6 md:py-20 bg-slate-950 text-slate-100">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-10"
        >
          {/* TITLE */}
          <motion.div variants={textVariants} className="text-center max-w-3xl mx-auto">
            <SectionTitle title="Contact Me"/>
            <p className="text-slate-400">
              Let’s build something amazing together. Reach out for projects or collaborations.
            </p>
          </motion.div>

          <div className="grid gap-6 md:gap-8 lg:grid-cols-[1.4fr_1fr]">
            
            {/* FORM */}
            <motion.div
              variants={textVariants}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-xl"
            >
              <h3 className="text-xl font-semibold text-cyan-300 mb-4">
                Contact Me
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 focus:border-cyan-400 focus:outline-none"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 focus:border-cyan-400 focus:outline-none"
                />

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 focus:border-cyan-400 focus:outline-none"
                />

                <textarea
                  name="message"
                  rows={5}
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 focus:border-cyan-400 focus:outline-none"
                />

                <button
                  type="submit"
                  className="w-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 font-semibold text-slate-950 transition hover:scale-105"
                >
                  Send Message
                </button>
                {status && (
                  <p className="mt-3 text-sm text-cyan-200">{status}</p>
                )}
              </form>
            </motion.div>

            {/* CONTACT INFO */}
            <motion.div
              variants={textVariants}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-xl space-y-6"
            >
              <h3 className="text-xl font-semibold text-cyan-300">
                Contact Info
              </h3>

              <div className="space-y-4">
                <p className="text-slate-300">
                  📧 {contactData.email}
                </p>
                <p className="text-slate-300">
                  📱 {contactData.phone}
                </p>
                <p className="text-slate-300">
                  📍 {contactData.location}
                </p>
              </div>

              <div className="flex gap-3">
                <a
                  href={contactData.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700 hover:text-cyan-400"
                >
                  GitHub
                </a>
                <a
                  href={contactData.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700 hover:text-cyan-400"
                >
                  LinkedIn
                </a>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Contact;