import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4">John Doe</h1>
      <p className="text-xl md:text-2xl">Full Stack Developer</p>
    </motion.div>
  );
};

export default Hero;