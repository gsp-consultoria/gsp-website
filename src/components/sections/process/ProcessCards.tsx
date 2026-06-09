import { motion } from "framer-motion";

interface ProcessCardProps {
  number: string;
  title: string;
  description: string;
  index: number;
}

export function ProcessCard({
  number,
  title,
  description,
  index,
}: ProcessCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
        scale: 0.95,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.5,
      }}
      transition={{
        duration: 1.1,
        delay: index * 1.2,
      }}
      className="relative z-50"
    >
      <motion.div
        initial={{
          borderColor: "rgba(255,255,255,0.08)",
          boxShadow: "0 0 0 rgba(143,66,25,0)",
        }}
        whileInView={{
          borderColor: "rgba(143,66,25,0.5)",
          boxShadow: "0 0 50px rgba(143,66,25,.15)",
        }}
        viewport={{
          once: true,
          amount: 0.5,
        }}
        transition={{
          duration: 0.8,
          delay: index * 1.2,
        }}
        className="
          relative
          z-50
          h-[320px]
          overflow-hidden
          rounded-3xl
          border
          bg-gradient-to-b
          from-white/[0.02]
          to-white/[0.01]
          backdrop-blur-sm
          p-8
        "
      >
        <div
          className="
            absolute
            inset-0
            bg-[#8F4219]/5
            blur-3xl
            z-50
          "
        />

        <span
          className="
            absolute
            inset-0
            flex
            items-center
            justify-center
            text-[140px]
            font-bold
            text-[#8F4219]/10
            select-none
          "
        >
          {number}
        </span>

        <div className="relative z-10 flex h-full flex-col justify-center">
          <h3 className="mb-4 text-3xl font-semibold text-white">
            {title}
          </h3>

          <p className="leading-relaxed text-zinc-400">
            {description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}