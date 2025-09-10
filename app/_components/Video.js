import { motion } from "framer-motion";
import { Eagle_Lake } from "next/font/google";

const eagle = Eagle_Lake({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});
function Video() {
  return (
    <section className="bg-primary-900 text-white py-16 relative">
      <div
        className={`${eagle.className} max-w-screen-xl mx-auto text-center relative z-10`}
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-lg mb-6 opacity-75"
        >
          Elegance is our thing
          <div className="w-40 h-[1px] bg-white mt-1 mx-auto transition-all duration-300 hover:w-40" />
        </motion.p>
        {/* Background Video */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="relative w-full h-96 flex justify-center"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="rounded-sm shadow-lg object-cover w-full h-full"
          >
            <source src="/images/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </div>
    </section>
  );
}

export default Video;
