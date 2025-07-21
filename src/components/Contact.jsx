import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({
          type: "success",
          message: "Message sent successfully! I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus({
          type: "error",
          message: result.message || "Something went wrong.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Network error. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 text-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header with Enhanced Visibility */}
        <div className="flex items-center gap-4 mb-10">
          <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-3xl">📞</span>
          </div>
          <h2 className="text-4xl font-bold drop-shadow-lg text-gray-100">
            Contact
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Links with Consistent Background Pattern */}
          <div className="space-y-6">
            <a
              href="mailto:priyan90204@gmail.com"
              className="flex items-center gap-4 p-4 bg-gray-800/80 backdrop-blur-sm rounded-xl hover:bg-gray-700/80 transition-all duration-300 border border-gray-600/50 shadow-lg"
            >
              <span className="text-3xl">📧</span>
              <div>
                <p className="text-sm text-gray-300 drop-shadow-sm">Email</p>
                <p className="text-lg font-medium text-gray-100 drop-shadow-sm">
                  priyan90204@gmail.com
                </p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/priyanshu-sharma-959194263"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-gray-800/80 backdrop-blur-sm rounded-xl hover:bg-blue-700/30 transition-all duration-300 border border-gray-600/50 shadow-lg animate-pulse"
            >
              <FaLinkedin size={32} className="text-blue-400 drop-shadow-sm" />
              <div>
                <p className="text-sm text-gray-300 drop-shadow-sm">LinkedIn</p>
                <p className="text-lg font-medium text-gray-100 drop-shadow-sm">
                  /in/priyanshu-sharma-959194263
                </p>
              </div>
            </a>

            <a
              href="https://github.com/priyanshu-2217"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-gray-800/80 backdrop-blur-sm rounded-xl hover:bg-gray-700/50 transition-all duration-300 border border-gray-600/50 shadow-lg animate-pulse"
            >
              <FaGithub size={32} className="text-gray-300 drop-shadow-sm" />
              <div>
                <p className="text-sm text-gray-300 drop-shadow-sm">GitHub</p>
                <p className="text-lg font-medium text-gray-100 drop-shadow-sm">
                  github.com/priyanshu-2217
                </p>
              </div>
            </a>
          </div>

          {/* Enhanced Contact Form with Proper Background */}
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-600/50 shadow-xl">
            <h3 className="text-2xl font-semibold mb-6 text-center text-gray-100 drop-shadow-lg">
              Quick Message
            </h3>

            {submitStatus && (
              <div
                className={`p-4 rounded-lg mb-4 drop-shadow-sm ${
                  submitStatus.type === "success"
                    ? "bg-green-600/30 border border-green-500/50 text-green-200"
                    : "bg-red-600/30 border border-red-500/50 text-red-200"
                }`}
              >
                <span className="drop-shadow-sm">{submitStatus.message}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-4 bg-gray-700/80 border border-gray-500/50 rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent shadow-inner"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-4 bg-gray-700/80 border border-gray-500/50 rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent shadow-inner"
              />
              <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-4 bg-gray-700/80 border border-gray-500/50 rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none shadow-inner"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 font-bold rounded-lg transition-all duration-300 shadow-lg drop-shadow-sm ${
                  isSubmitting
                    ? "bg-gray-600 cursor-not-allowed text-gray-300"
                    : "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white hover:scale-105"
                }`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
