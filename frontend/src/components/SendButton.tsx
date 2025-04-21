import { AnimatePresence, cubicBezier, motion } from "framer-motion";

interface SendButtonProps {
  onClick: () => void;
}

const customEasingFn = cubicBezier(0.4, 0, 0.2, 1);

export function SendButton({ onClick }: SendButtonProps) {
  return (
    <AnimatePresence>
      <motion.button
        className="absolute flex justify-center items-center bottom-2 right-2 p-1 hover:brightness-94 rounded-md w-[34px] h-[34px]"
        transition={{ ease: customEasingFn, duration: 0.17 }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
        </svg>
      </motion.button>
    </AnimatePresence>
  );
}
