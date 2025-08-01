import React, { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaUpwork } from "react-icons/fa6";
import { SiFiverr } from "react-icons/si";

import Head from "../components/Head";
import Foter from "../components/Foter";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [file, setFile] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => data.append(key, value));
    if (file) {
      data.append("file", file);
    }

    try {
      const res = await fetch("https://getform.io/f/agdljndb", {
        method: "POST",
        body: data,
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setFile(null);
      } else {
        alert("❌ Failed to submit. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("❌ Error sending message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head />

      <section className="bg-[#c9d8a0] py-10 px-5 mt-14 md:flex md:justify-between md:items-center md:gap-10 md:px-12">
        <div className="md:w-1/2">
          <p className="text-[1.5rem] font-serif md:text-[2rem]">
            Feel free to reach out for collaboration or project inquiries!
          </p>

          <p className="mt-10 font-serif text-[1.1rem]">Follow Me</p>

          <div className="flex space-x-4 text-black mt-4">
            <a
              href="https://www.linkedin.com/in/muhammad-ahmad-fridi-b4780035a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="hover:text-blue-600 text-3xl" />
            </a>
            <a
              href="https://github.com/Ahmad-WebOfficial"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="hover:text-gray-800 text-3xl" />
            </a>


            <a
              href="https://www.fiverr.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiFiverr  className="hover:text-gray-800 -mt-4 text-6xl" />
            </a>

<a
              href="https://www.upwork.com/nx/find-work/best-matches"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaUpwork  className="hover:text-gray-800 text-4xl" />
            </a>

          </div>
        </div>

        <div className="mt-16 md:mt-0 md:w-1/2">
          {submitted && (
            <div className="text-center mb-6 text-green-600 font-semibold">
              ✅ Submitted Successfully!
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto p-4 flex flex-col gap-4 bg-white shadow-lg rounded-2xl py-10"
          >
            <div className="flex flex-col">
              <label className="py-2 px-1 font-medium">Enter Name *</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col">
              <label className="py-2 px-1 font-medium">Your Email *</label>
              <input
                type="email"
                name="email"
                required
                placeholder="example@domain.com"
                value={formData.email}
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col">
              <label className="py-2 px-1 font-medium">Your Message *</label>
              <textarea
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded-lg h-[10rem] focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col">
              <label className="py-2 px-1 font-medium">Attach a File (optional)</label>
              <input
                type="file"
                onChange={handleFileChange}
                className="p-2 border border-gray-300 rounded-lg"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-black text-white rounded-full w-[7rem] py-2 disabled:opacity-60"
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </section>

      <div className="mt-24">
        <Foter />
      </div>
    </>
  );
};

export default Contact;
