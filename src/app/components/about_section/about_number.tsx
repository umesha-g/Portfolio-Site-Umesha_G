
import { motion , useMotionValue, useTransform, animate } from "framer-motion";
import React,{ useEffect } from "react";

interface Number {
    Number: number;
  }

const Numberload: React.FC<Number> = ({ Number}) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, Number, { duration: 1.5 });

    return animation.stop;
  }, [Number,count]);

  return (
    <div>
        <motion.h1 className="text-4xl text-thatch-green-500">
            {rounded}
        </motion.h1>
    </div>
  );
};

export default Numberload;