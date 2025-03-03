"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { createClient } from "@supabase/supabase-js";
import { Eagle_Lake, Prata } from "next/font/google";

const eagle = Eagle_Lake({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});
const prata = Prata({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const sendBookingEmail = async (bookingData) => {
  try {
    const res = await fetch("/api/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...bookingData }),
    });
    if (!res.ok) {
      const errorMessage = await res.text();
      throw new Error(`Failed to send email: ${errorMessage}`);
    }
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);
export default function BookingForm() {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: 1,
    specialRequest: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(false);
    setLoading(true);

    try {
      const { data, error } = await supabase
        .from("bookings")
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            date: formData.date,
            time: formData.time,
            guests: formData.guests,
            specialRequest: formData.specialRequest,
          },
        ])
        .select("*")
        .single();
      if (error) throw error;

      await sendBookingEmail(data);
      setSuccess(true);

      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        guests: 1,
        specialRequest: "",
      });
      setLoading(false);
    } catch (error) {
      throw new Error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      className={`${prata.className} min-h-screen flex items-center justify-center bg-primary-900 `}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="relative mt-4 mb-4 bg-white/10 shadow-lg rounded-2xl p-6 w-full max-w-lg border border-white/20">
        <h2 className="text-2xl font-semibold text-white text-center mb-4">
          Reserve Your Table at{" "}
          <span className={`${eagle.className} text-[#e09e49]`}>Il Vespro</span>
        </h2>

        {success && (
          <motion.p
            className="text-green-500 text-center mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            ✅ Booking confirmed! We will contact you soon.
          </motion.p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-white">Full Name</label>
            <input
              type="text"
              className="w-full p-2 mt-1 bg-transparent border-b border-white focus:outline-none focus:border-[#e09e49] text-white"
              placeholder="Tim Brand"
              required
              value={formData.name}
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value });
              }}
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-white">Email</label>
            <input
              type="email"
              className="w-full p-2 mt-1 bg-transparent border-b border-white focus:outline-none focus:border-[#e09e49] text-white"
              placeholder="example@email.com"
              required
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
              }}
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-white">Phone</label>
            <input
              type="tel"
              className="w-full p-2 mt-1 bg-transparent border-b border-white focus:outline-none focus:border-[#e09e49] text-white"
              placeholder="+39 123 456 7890"
              required
              value={formData.phone}
              onChange={(e) => {
                setFormData({ ...formData, phone: e.target.value });
              }}
            />
          </div>

          {/* Date */}
          <div>
            <label className="block text-white">Date</label>
            <input
              type="date"
              className="w-full p-2 mt-1 bg-transparent border-b border-white focus:outline-none focus:border-[#e09e49] text-white"
              value={formData.date}
              required
              onChange={(e) => {
                setFormData({ ...formData, date: e.target.value });
              }}
              min={new Date().toISOString().split("T")[0]}
            />
          </div>

          {/* Time */}
          <div>
            <label className="block text-white">Time</label>
            <input
              type="time"
              className="w-full p-2 mt-1 bg-transparent border-b border-white focus:outline-none focus:border-[#e09e49] text-white"
              value={formData.time}
              required
              onChange={(e) => {
                setFormData({ ...formData, time: e.target.value });
              }}
            />
          </div>

          {/* Guests */}
          <div>
            <label className="block text-white">Number of Guests</label>
            <input
              type="number"
              className="w-full p-2 mt-1 bg-transparent border-b border-white focus:outline-none focus:border-[#e09e49] text-white"
              placeholder="Enter number of guests"
              required
              value={formData.guests}
              onChange={(e) => {
                const value = parseInt(e.target.value);
                setFormData({
                  ...formData,
                  guests: value,
                });
              }}
            />
          </div>
          <div>
            <label className="block text-white font-medium mb-1">
              Special Requests
            </label>
            <textarea
              placeholder="Any special requests..."
              className="w-full p-3 border text-black  border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.specialRequest}
              onChange={(e) =>
                setFormData({ ...formData, specialRequest: e.target.value })
              }
            ></textarea>
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-4 bg-[#e09e49] text-white py-2 rounded-md hover:bg-[#c68a3c] transition-all"
          >
            {loading ? "Booking..." : "Book Now"}
          </button>
        </form>
      </div>
    </motion.div>
  );
}
