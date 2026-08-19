import { motion } from 'framer-motion';

export default function StoryTimeline({ events }) {
  return (
    <section className="mx-auto max-w-5xl" aria-labelledby="timeline-title">
      <div className="text-center">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-forever-rose">Timeline</p>
        <h2 id="timeline-title" className="font-display mt-3 text-4xl font-semibold text-forever-wine sm:text-5xl">
          The moments that made us, Angel
        </h2>
      </div>

      <div className="relative mt-12">
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-transparent via-forever-champagne to-transparent md:left-1/2" aria-hidden="true" />
        <div className="space-y-8 md:space-y-12">
          {events.map((event, index) => (
            <TimelineItem key={`${event.title}-${event.date}`} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ event, index }) {
  const Icon = event.icon;
  const isEven = index % 2 === 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 34, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.68, ease: 'easeOut' }}
      className={`relative grid gap-5 pl-12 md:grid-cols-2 md:pl-0 ${isEven ? '' : 'md:[&>div:first-child]:col-start-2'}`}
    >
      <div className={`${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
        <div className="group overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/68 p-4 shadow-luxury backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(109,35,63,0.16)]">
          {event.image ? (
            <div className="mb-5 aspect-[4/3] overflow-hidden rounded-[1.25rem] bg-forever-blush/30">
              <img
                src={event.image}
                alt={event.alt ?? event.title ?? `${event.title ?? 'Timeline event'} photo`}
                loading="lazy"
                decoding="async"
                sizes="(min-width: 768px) 42vw, 100vw"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
          ) : null}
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-forever-champagne">{event.date}</p>
          <h3 className="font-display mt-3 text-3xl font-semibold leading-tight text-forever-wine">{event.title}</h3>
          <p className="mt-4 text-sm leading-7 text-forever-ink/80">{event.description}</p>
        </div>
      </div>

      <div
        className="absolute left-0 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-forever-champagne bg-forever-pearl text-forever-champagne shadow-sm md:left-1/2 md:-translate-x-1/2"
        aria-hidden="true"
      >
        <Icon size={16} />
      </div>
    </motion.article>
  );
}
