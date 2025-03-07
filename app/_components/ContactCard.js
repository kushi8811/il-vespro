"use client";
import { useState } from "react";
import { Playfair_Display, Prata } from "next/font/google";
const eagle = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});
const prata = Prata({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export default function ContactCard() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you would typically send the data to an API or email service
    try {
      // Simulating form submission success
      setIsSubmitted(true);
      setIsError(false);
      setFormData({ name: "", email: "", message: "" }); // Reset the form
    } catch (error) {
      setIsError(true);
    }
  };

  return (
    <section className="py-20 bg-accent-200 text-center">
      <div className="container mx-auto max-w-4xl px-6">
        <div className="bg-primary-900 text-white p-8 rounded-lg shadow-lg">
          <h2 className={`${eagle.className} text-3xl font-bold mb-4`}>
            Get in Touch
          </h2>
          <p className={`${prata.className}text-gray-300 text-lg mb-6`}>
            We would love to hear from you! Please send us your inquiries or
            feedback.
          </p>

          {isSubmitted ? (
            <div className="bg-green-500 text-white p-4 rounded-lg mb-4">
              Thank you for reaching out. We will get back to you soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-300 rounded-lg"
                  rows="4"
                  required
                ></textarea>
              </div>
              {isError && (
                <div className="text-red-500 text-sm">
                  Something went wrong. Please try again.
                </div>
              )}
              <button
                type="submit"
                className="w-full bg-gold-500 text-white p-4 rounded-lg hover:bg-gold-600 transition border-2 border-white "
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
