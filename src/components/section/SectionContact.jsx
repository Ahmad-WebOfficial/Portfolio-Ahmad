import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import robotImg from "../../images/robotsend.png";

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false); // Popup state

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
    } catch (error) {
      setStatus("Failed to send message. Please check your network.");
    } finally {
      setLoading(false);
    }
  };

  const stars = Array.from({ length: 25 });

  return (
    <div className="bg-gradient-to-b from-[#02060f] via-[#04111f] to-[#02060f] text-white font-sans py-24 px-6 sm:px-8 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        {stars.map((_, i) => {
          const randomTop = Math.random() * 100;
          const randomLeft = Math.random() * 100;
          const randomDuration = 2 + Math.random() * 3;
          const randomDelay = Math.random() * 2;

          return (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                top: `${randomTop}%`,
                left: `${randomLeft}%`,
              }}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: randomDuration,
                repeat: Infinity,
                delay: randomDelay,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </div>

      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-teal-950/30 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-950/25 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="hidden lg:col-span-6 lg:flex justify-center items-center relative">
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: -30 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.8, x: -30 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative w-full max-w-sm md:max-w-md aspect-square flex items-center justify-center"
              >
                <div className="absolute inset-0 bg-teal-500/10 rounded-full blur-3xl"></div>

                {/* Floating Animation for Robot/Astronaut */}
                <motion.div
                  animate={{ y: [-15, 15, -15] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative z-10 w-full h-full flex flex-col items-center justify-center overflow-hidden"
                >
                  <img
                    src={robotImg}
                    alt="Character"
                    className="w-full h-full object-contain drop-shadow-[0_0_25px_rgba(20,184,166,0.35)]"
                  />
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 bg-[#0b1120]/90 border border-slate-800/80 rounded-2xl p-6 sm:p-8 shadow-2xl w-full backdrop-blur-md"
          >
            <div className="mb-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-2">
                Let's work together
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
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
                  className="w-full bg-[#02060f] border border-slate-800 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-teal-500 transition shadow-inner placeholder:text-slate-600"
                />
              </div>

              <div>
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
                  className="w-full bg-[#02060f] border border-slate-800 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-teal-500 transition shadow-inner placeholder:text-slate-600"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Service Needed <span className="text-red-500">*</span>
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#02060f] border border-slate-800 rounded-xl  px-4 py-3.5 text-white text-sm focus:outline-none focus:border-teal-500 transition shadow-inner"
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
              </div>

              <div>
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
                  className="w-full bg-[#02060f] border border-slate-800 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-teal-500 transition shadow-inner resize-none placeholder:text-slate-600"
                ></textarea>
              </div>

              {status && (
                <p className="text-sm font-medium text-red-400">{status}</p>
              )}

              <motion.button
                title="Sumit Your Message"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl cursor-pointer bg-gradient-to-r from-teal-400 to-cyan-500 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-teal-500/20 hover:opacity-90 transition cursor-pointer disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {showPopup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
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
