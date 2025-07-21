// src/pages/Contact.jsx
import React, { useState } from 'react';
import Header from '../components/Header';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); // ✅ Loading state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true); // ✅ Start loading

    try {
      const response = await fetch("https://portfolio-backend-a6gd.onrender.com/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setIsSent(true);
        setFormData({ firstname: '', lastname: '', email: '', subject: '', message: '' });
        setTimeout(() => setIsSent(false), 5000);
      } else {
        throw new Error("Failed to send message.");
      }
    } catch (err) {
      setError(err.message);
    }

    setLoading(false); // ✅ Stop loading
  };

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-[#000000] via-[#050505] to-[#202020] text-white overflow-hidden font-sans">
      <Header />

      <section className="px-6 py-20 max-w-xl mx-auto text-center relative z-10">
        <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-white animate-fadeInUp mb-10">
          Contact Me
        </h2>

        <motion.form
          className="relative space-y-6 text-left p-6 rounded-2xl border border-white/10 shadow-xl
                     bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-md
                     transition-all duration-300 hover:border-purple-500 hover:shadow-purple-700/30"
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute top-0 left-0 w-full h-full rounded-2xl pointer-events-none border border-white/20 blur-md animate-pulse opacity-10" />

          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="firstname"
              placeholder="First Name"
              value={formData.firstname}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-transparent text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:shadow-[0_0_10px_#3b82f6]"
              required
            />
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              value={formData.lastname}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-transparent text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:shadow-[0_0_10px_#3b82f6]"
              required
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-transparent text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:shadow-[0_0_10px_#3b82f6]"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-transparent text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:shadow-[0_0_10px_#3b82f6]"
            required
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-transparent text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:shadow-[0_0_10px_#3b82f6]"
            required
          />

          <motion.button
            whileHover={{ scale: !loading ? 1.05 : 1 }}
            whileTap={{ scale: !loading ? 0.95 : 1 }}
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-md bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-600 hover:to-blue-600 transition font-semibold shadow flex justify-center items-center disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              "Send Message"
            )}
          </motion.button>
        </motion.form>

        {isSent && (
          <motion.div
            className="mt-6 text-green-400 font-semibold text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            🎉 Your message has been sent to Aryan successfully!
            <br />
            Thankyou!
          </motion.div>
        )}

        {error && (
          <motion.div
            className="mt-6 text-red-400 font-semibold text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            ❌ {error}
          </motion.div>
        )}

        <div className="mt-12 text-gray-300 text-center">
          Or reach out via:
          <div className="flex justify-center gap-10 mb-12 mt-4">
            <a
              href="https://github.com/Aryan-chaudhry/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center w-14 h-14 rounded-full border border-white/10 text-white text-2xl transition-all duration-300 hover:text-blue-400 hover:border-blue-400 shadow-lg hover:shadow-blue-500/40 backdrop-blur-md"
            >
              <FaGithub className="group-hover:animate-bounce" />
              <span className="absolute bottom-[-26px] text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                GitHub
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/aryan-chaudhary-83571a252/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center w-14 h-14 rounded-full border border-white/10 text-white text-2xl transition-all duration-300 hover:text-blue-400 hover:border-blue-400 shadow-lg hover:shadow-blue-500/40 backdrop-blur-md"
            >
              <FaLinkedin className="group-hover:animate-bounce" />
              <span className="absolute bottom-[-26px] text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                LinkedIn
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
