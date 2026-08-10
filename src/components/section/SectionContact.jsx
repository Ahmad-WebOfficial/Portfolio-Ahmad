import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import robotImg from "../../images/robotsend.png";

const ease = [0.22, 1, 0.36, 1];

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const stars = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        top: `${(i * 17 + 9) % 95}%`,
        left: `${(i * 29 + 13) % 95}%`,
        duration: 2.2 + (i % 5) * 0.45,
        delay: (i % 6) * 0.35,
      })),
    []
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "2dbe37e0-c6bb-464c-bf27-ea6c7fdbdb24",
          name: formData.name,
          email: formData.email,
          service: formData.service,
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setShowPopup(true);
        setFormData({ name: "", email: "", service: "", message: "" });
      } else {
        setStatus(result.message || "Something went wrong!");
      }
    } catch {
      setStatus("Failed to send message. Please check your network.");
    } finally {
      setLoading(false);
    }
  };

  const fieldVariants = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
  };

  return (
    <div className="bg-gradient-to-b from-[#02060f] via-[#04111f] to-[#02060f] text-white font-sans py-24 px-6 sm:px-8 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{ top: star.top, left: star.left }}
            animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.25, 0.8] }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              delay: star.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-teal-950/30 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-950/20 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40, scale: 0.92 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.85, ease }}
            className="hidden lg:col-span-6 lg:flex justify-center items-center relative"
          >
            <div className="relative w-full max-w-sm md:max-w-md aspect-square flex items-center justify-center">
              <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-teal-500/15 rounded-full blur-3xl"
              />
              <motion.div
                animate={{ y: [-12, 12, -12] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 w-full h-full flex flex-col items-center justify-center overflow-hidden"
              >
                <img
                  src={robotImg}
                  alt="Character"
                  className="w-full h-full object-contain drop-shadow-[0_0_25px_rgba(20,184,166,0.35)]"
                />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease }}
            className="lg:col-span-6 bg-[#0b1120]/90 border border-slate-800/80 rounded-2xl p-6 sm:p-8 shadow-2xl w-full backdrop-blur-md hover:border-teal-500/25 transition-colors duration-500"
          >
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease }}
              className="mb-6"
            >
              <p className="text-[11px] font-semibold tracking-[0.2em] text-teal-400 uppercase mb-2">
                Contact
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                Let's work together
              </h2>
            </motion.div>

            <motion.form
              onSubmit={handleSubmit}
              className="space-y-5"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: { staggerChildren: 0.08, delayChildren: 0.1 },
                },
              }}
            >
              <motion.div variants={fieldVariants}>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full bg-[#02060f] border border-slate-800 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500/30 transition shadow-inner placeholder:text-slate-600"
                />
              </motion.div>

              <motion.div variants={fieldVariants}>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Your Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter Your Email Here"
                  required
                  className="w-full bg-[#02060f] border border-slate-800 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500/30 transition shadow-inner placeholder:text-slate-600"
                />
              </motion.div>

              <motion.div variants={fieldVariants}>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Service Needed <span className="text-red-500">*</span>
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full appearance-none bg-[#02060f] border border-slate-800 rounded-xl pl-4 pr-12 py-3.5 text-white text-sm focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500/30 transition shadow-inner bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2212%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%23cbd5e1%22 stroke-width=%222.5%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22%3E%3Cpolyline points=%226 9 12 15 18 9%22/%3E%3C/svg%3E')] bg-no-repeat bg-[length:14px_14px] bg-[right_1.15rem_center]"
                >
                  <option value="" disabled>
                    Something in your mind
                  </option>
                  <option value="Remote Job / Web Development">
                    Remote Job / Web Development
                  </option>
                  <option value="Fullstack MERN Project">
                    Fullstack MERN Project
                  </option>
                  <option value="Frontend UI/UX Design">
                    Frontend UI/UX Design
                  </option>
                  <option value="Other">Other</option>
                </select>
              </motion.div>

              <motion.div variants={fieldVariants}>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Explain Your Idea <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter Your Idea"
                  required
                  className="w-full bg-[#02060f] border border-slate-800 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500/30 transition shadow-inner resize-none placeholder:text-slate-600"
                />
              </motion.div>

              {status && (
                <p className="text-sm font-medium text-red-400">{status}</p>
              )}

              <motion.button
                variants={fieldVariants}
                title="Submit Your Message"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl cursor-pointer bg-gradient-to-r from-teal-400 to-cyan-500 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-teal-500/20 hover:opacity-90 transition disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {showPopup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 10 }}
              transition={{ duration: 0.35, ease }}
              className="bg-[#0b1120] border border-teal-500/40 rounded-2xl p-8 max-w-md w-full text-center shadow-2xl relative"
            >
              <div className="w-16 h-16 bg-teal-500/20 border border-teal-500/40 rounded-full flex items-center justify-center mx-auto mb-4 text-teal-400 text-2xl font-bold">
                ✓
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Message Sent!
              </h3>
              <p className="text-slate-400 text-sm mb-6">
                Thank you for reaching out. Your message has been sent
                successfully. I will get back to you soon!
              </p>
              <button
                onClick={() => setShowPopup(false)}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-teal-400 to-cyan-500 text-slate-950 font-bold text-sm transition cursor-pointer hover:opacity-90 shadow-lg shadow-teal-500/20"
              >
                OK
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GetInTouch;
