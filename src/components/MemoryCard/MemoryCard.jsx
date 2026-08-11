import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';

export default function MemoryCard({ memory, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.58, delay: index * 0.06, ease: 'easeOut' }}
      whileHover={{ y: -7 }}
      className="group overflow-hidden rounded-[1.75rem] border border-[#f3dbe5] bg-white/74 shadow-[0_18px_55px_rgba(111,61,83,0.09)] backdrop-blur-xl transition duration-300 hover:shadow-[0_30px_90px_rgba(190,24,93,0.16)]"
    >
      <div className="aspect-[4/3] overflow-hidden bg-[#fff1f6]">
        <img src={memory.image} alt="" loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
      </div>
      <div className="p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a97218]">{memory.date}</p>
          <FaHeart className="mt-1 shrink-0 text-[#be185d]" aria-hidden="true" />
        </div>
        <h3 className="font-display mt-4 text-3xl font-semibold leading-tight text-[#351728]">{memory.title}</h3>
        <p className="mt-4 text-sm leading-7 text-[#6b4b5d]">{memory.description}</p>
        <blockquote className="mt-5 border-l border-[#ddb46c] pl-4 font-handwritten text-xl leading-8 text-[#8f496a]">
          “{memory.quote}”
        </blockquote>
      </div>
    </motion.article>
  );
}
