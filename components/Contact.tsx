"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      alert(data.message);

      if (res.ok) {
        setForm({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }
    } catch (error) {
      alert("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="py-28 px-6 bg-black"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-cyan-400 uppercase tracking-[5px]">
            Contact
          </span>

          <h2 className="text-white text-5xl font-black mt-4">
            Let&apos;s Work Together
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left */}
          <div className="contact-card">
            <h3 className="text-white text-3xl font-bold mb-8">
              Contact Info
            </h3>

            <div className="space-y-8">
              <div>
                <p className="text-cyan-400">
                  Email
                </p>

                <h4 className="text-white text-lg">
                  uttammind@gmail.com
                </h4>
              </div>

              <div>
                <p className="text-cyan-400">
                  Phone
                </p>

                <h4 className="text-white text-lg">
                  +91 9140711276
                </h4>
              </div>

              <div>
                <p className="text-cyan-400">
                  Location
                </p>

                <h4 className="text-white text-lg">
                  Lucknow, India
                </h4>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="contact-card">
            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className="contact-input"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                className="contact-input"
                required
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={form.subject}
                onChange={handleChange}
                className="contact-input"
                required
              />

              <textarea
                name="message"
                rows={6}
                placeholder="Write message..."
                value={form.message}
                onChange={handleChange}
                className="contact-input resize-none"
                required
              />

              <button
                type="submit"
                className="neon-btn w-full"
              >
                {loading
                  ? "Sending..."
                  : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}