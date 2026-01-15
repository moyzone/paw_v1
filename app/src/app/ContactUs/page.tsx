"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <main className="bg-theme-gradient text-[var(--text-primary)] overflow-hidden">
      {/* HEADER */}
      <section className="py-20 text-center px-6 max-w-5xl mx-auto">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-accent mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Get in Touch with <span className="text-accent-light">Pawthentic</span>
        </motion.h1>
        <motion.p
          className="text-secondary max-w-3xl mx-auto text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Have questions about our products? Want to share your pet's Pawthentic story? We'd love to hear from you!
        </motion.p>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* CONTACT INFO */}
        <motion.div
          className="flex flex-col gap-8"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h2 className="text-2xl font-semibold text-accent mb-8">Contact Information</h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent rounded-full flex-shrink-0">
                  <Mail className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-secondary">contact@pawthentic.com</p>
                  <p className="text-secondary text-sm">We'll respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent rounded-full flex-shrink-0">
                  <Phone className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-secondary">1-800-PAW-CARE</p>
                  <p className="text-secondary text-sm">Mon-Fri, 9 AM - 6 PM EST</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent rounded-full flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">WhatsApp</h3>
                  <p className="text-secondary mb-3">Quick support & product inquiries</p>
                  <a
                    href="https://wa.me/1800PAWCARE?text=Hello!%20I%20have%20a%20question%20about%20Pawthentic%20products."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-accent hover:opacity-90 text-black font-semibold px-4 py-2 rounded-full transition-transform transform hover:scale-105"
                  >
                    <MessageCircle size={18} />
                    Chat Now
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="p-8 bg-[var(--background)] rounded-2xl border border-theme">
            <h3 className="text-lg font-bold text-accent mb-4">Frequently Asked Questions</h3>
            <ul className="space-y-3 text-secondary text-sm">
              <li>
                <span className="font-semibold text-accent">Q: Are Pawthentic products safe for all pets?</span>
                <p>A: Yes! All products are pH-balanced and dermatologist-tested for dogs and cats.</p>
              </li>
              <li>
                <span className="font-semibold text-accent">Q: Can I use these weekly?</span>
                <p>A: Absolutely! Our products are gentle enough for regular use.</p>
              </li>
              <li>
                <span className="font-semibold text-accent">Q: Do you offer bulk orders?</span>
                <p>A: Yes! Contact us for bulk pricing and wholesale opportunities.</p>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* CONTACT FORM */}
        <motion.div
          className="bg-[var(--background)] shadow-lg rounded-2xl p-8 border border-theme"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-accent mb-6">Send us a Message</h2>

          {submitted ? (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <div className="text-5xl mb-4">✓</div>
              <h3 className="text-2xl font-bold text-accent mb-2">Thank You!</h3>
              <p className="text-secondary mb-4">
                Your message has been sent successfully. We'll get back to you soon!
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Field */}
              <div>
                <label className="block text-sm font-semibold text-accent mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-[var(--gradient-end)] border border-theme rounded-lg focus:outline-none focus:border-accent transition"
                  placeholder="Your name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-semibold text-accent mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-[var(--gradient-end)] border border-theme rounded-lg focus:outline-none focus:border-accent transition"
                  placeholder="your@email.com"
                />
              </div>

              {/* Subject Field */}
              <div>
                <label className="block text-sm font-semibold text-accent mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-[var(--gradient-end)] border border-theme rounded-lg focus:outline-none focus:border-accent transition"
                  placeholder="How can we help?"
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-sm font-semibold text-accent mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 bg-[var(--gradient-end)] border border-theme rounded-lg focus:outline-none focus:border-accent transition resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-accent hover:opacity-90 text-black font-semibold py-3 rounded-full transition-transform transform hover:scale-105"
              >
                Send Message
              </button>

              <p className="text-secondary text-sm text-center">
                We'll get back to you as soon as possible!
              </p>
            </form>
          )}
        </motion.div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-accent-gradient text-black text-center mt-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the Pawthentic Community</h2>
        <p className="text-black/80 max-w-2xl mx-auto mb-8">
          Share your pet's Pawthentic experience on social media with #PawthenticPets
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="https://instagram.com/pawthentic"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-accent font-semibold px-8 py-3 rounded-full hover:bg-[var(--gold-dark)] hover:text-black transition"
          >
            Follow on Instagram
          </a>
          <a
            href="https://facebook.com/pawthentic"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-2 border-black text-black font-semibold px-8 py-3 rounded-full hover:bg-black hover:text-accent transition"
          >
            Like on Facebook
          </a>
        </div>
      </section>
    </main>
  );
}
