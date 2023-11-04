import { ReactNode } from "react";
import { motion } from "framer-motion";

export function TransitionUp(props: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: "50vh" }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      {props.children}
    </motion.div>
  );
}

export function TransitionDown(props: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: "-50vh" }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      {props.children}
    </motion.div>
  );
}
