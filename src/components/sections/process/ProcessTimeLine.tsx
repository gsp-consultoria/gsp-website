import { motion } from "framer-motion";

export function ProcessTimeline() {
  return (
    <div className="hidden lg:block">
      <div className="absolute top-[160px] left-[12.5%] h-[2px] w-[75%] bg-white/10" />

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 4,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-[160px]
          left-[12.5%]
          h-[2px]
          w-[75%]
          z-0
          bg-[#8F4219]
          origin-left
        "
      />

      <motion.div
        initial={{ left: "12.5%" }}
        whileInView={{ left: "87.5%" }}
        viewport={{ once: true }}
        transition={{
          duration: 5,
          ease: "easeInOut",
        }}
        className="absolute top-[151px] -z-10"
      >
        <div
          className="
            absolute
            -left-6
            -top-6
            z-0
            h-14
            w-14
            rounded-full
            bg-[#8F4219]/20
            blur-xl
          "
        />

        <div
          className="
            h-5
            w-5
            z-0
            rounded-full
            bg-[#8F4219]
            shadow-[0_0_30px_rgba(143,66,25,.9)]
          "
        />
      </motion.div>

      {[25, 50, 75].map((position) => (
        <div
          key={position}
          className="
            absolute
            top-[154px]
            h-3
            w-3
            z-0
            rounded-full
            bg-white
          "
          style={{
            left: `${position}%`,
            transform: "translateX(-50%)",
          }}
        />
      ))}
    </div>
  );
}