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
    <section id="contact" className="px-4 py-24 bg-white">

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
            <SectionTitle title="Contact Me" />
            <p className="text-slate-600">
              Let’s build something impactful together. Feel free to reach out for projects or collaborations.            </p>

          </motion.div>

          <div className="grid gap-6 md:gap-8 lg:grid-cols-[1.4fr_1fr]">

            <motion.div
              variants={textVariants}
              className="rounded-2xl border border-[#E5E7EB] bg-white shadow-sm p-6 sm:p-10"
            >
              <h3 className="text-xl font-semibold text-[#4F46E5] mb-4">
                Get In Touch
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-[#E5E7EB] bg-[#F1F5F9] px-4 py-3.5 text-slate-900 placeholder:text-slate-400 focus:border-[#4F46E5] focus:bg-white focus:outline-none transition-all"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-[#E5E7EB] bg-[#F1F5F9] px-4 py-3.5 text-slate-900 placeholder:text-slate-400 focus:border-[#4F46E5] focus:bg-white focus:outline-none transition-all"
                />

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-[#E5E7EB] bg-[#F1F5F9] px-4 py-3.5 text-slate-900 placeholder:text-slate-400 focus:border-[#4F46E5] focus:bg-white focus:outline-none transition-all"
                />

                <textarea
                  name="message"
                  rows={5}
                  placeholder="How can I help you?"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-[#E5E7EB] bg-[#F1F5F9] px-4 py-3.5 text-slate-900 placeholder:text-slate-400 focus:border-[#4F46E5] focus:bg-white focus:outline-none transition-all resize-none"
                />

                <button
                  type="submit"
                  className="w-full rounded-xl bg-[#4F46E5] px-6 py-4 font-bold text-white transition hover:bg-[#4338CA] shadow-lg shadow-indigo-100"
                >
                  Send Message
                </button>
                {status && (
                  <p className="mt-3 text-sm text-[#4F46E5] font-medium">{status}</p>
                )}
              </form>
            </motion.div>

            <motion.div
              variants={textVariants}
              className="rounded-2xl border border-[#E5E7EB] bg-white p-6 sm:p-10 shadow-sm space-y-10"
            >
              <h3 className="text-xl font-semibold text-[#4F46E5]">
                Contact Info
              </h3>

              <div className="space-y-6">
                <div className="flex items-center gap-5 p-5 rounded-2xl bg-[#F1F5F9] border border-[#E5E7EB] transition-colors hover:border-[#4F46E5]/30">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white border border-[#E5E7EB] flex items-center justify-center text-[#4F46E5] shadow-sm">📧</div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Email</p>
                    <p className="text-slate-700 font-bold text-sm tracking-tight">{contactData.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-5 p-5 rounded-2xl bg-[#F1F5F9] border border-[#E5E7EB] transition-colors hover:border-[#4F46E5]/30">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white border border-[#E5E7EB] flex items-center justify-center text-[#4F46E5] shadow-sm">📱</div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Phone</p>
                    <p className="text-slate-700 font-bold text-sm tracking-tight">{contactData.phone}</p>
                  </div>
                </div>
                <div className="flex items-center gap-5 p-5 rounded-2xl bg-[#F1F5F9] border border-[#E5E7EB] transition-colors hover:border-[#4F46E5]/30">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white border border-[#E5E7EB] flex items-center justify-center text-[#4F46E5] shadow-sm">📍</div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Location</p>
                    <p className="text-slate-700 font-bold text-sm tracking-tight">{contactData.location}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                <a
                  href={contactData.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 rounded-xl bg-white border border-[#E5E7EB] text-slate-700 hover:text-[#4F46E5] hover:border-[#4F46E5] hover:shadow-sm transition-all font-bold text-sm flex-1 text-center"
                >
                  GitHub
                </a>
                <a
                  href={contactData.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 rounded-xl bg-white border border-[#E5E7EB] text-slate-700 hover:text-[#4F46E5] hover:border-[#4F46E5] hover:shadow-sm transition-all font-bold text-sm flex-1 text-center"
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