import { motion } from "framer-motion";

const CircleButton = () => {
  const text = "Explore Now . Explore Now . Explore Now .";
  return (
    <motion.div
      className="flex items-center justify-center max-lg:hidden"
      animate={{rotate: 360}}
      transition={{ ease: "linear", duration: 5, repeat: Infinity }}
    >
      <svg width="140" height="140">
        <circle cx="70" cy="70" r="65" fill="#BFFD44" />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          fill="#161A30"
          dy=".3em"
          style={{
            fontSize: "14px",
            fontFamily: "Arial",
            textTransform: "uppercase",
            letterSpacing: "3px"
          }}
        >
          <textPath href="#textPath">
            {text}
          </textPath>
        </text>
        <path id="textPath" d="M20 70a50 50 0 0 1 100 0a50 50 0 0 1 -100 0" fill="transparent" />
      </svg>
    </motion.div>
  );
};

export default CircleButton;
