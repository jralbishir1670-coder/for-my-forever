import PageNavButtons from '../components/PageNavButtons';
import PageTransition from '../components/PageTransition';
import FutureDreams from '../components/FutureDreams/FutureDreams';

const dreams = [
  { emoji: '🏡', title: 'Our Home', text: 'A warm, loving space built together.' },
  { emoji: '✈️', title: 'Our Travels', text: 'Adventures in every city and sunrise.' },
  { emoji: '🤲', title: 'Growing in Faith', text: 'A gentle, faithful journey side by side.' },
  { emoji: '❤️', title: 'Supporting Each Other', text: 'Kindness, care, and quiet strength always.' },
  { emoji: '👨‍👩‍👧‍👦', title: 'Building a Loving Family', text: 'Creating a home full of laughter and love.' },
  { emoji: '🌍', title: 'Adventures Together', text: 'Beautiful memories with every step.' },
];

export default function FuturePage() {
  return (
    <PageTransition className="relative min-h-screen overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,245,241,0.95),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(179,63,99,0.12),transparent_28%)]" />
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-16">
        <section className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-forever-rose">The life ahead</p>
          <h1 className="font-display luxury-text mt-4 text-5xl font-semibold text-forever-wine sm:text-6xl">Our Future</h1>
          <p className="mt-5 text-base leading-8 text-forever-ink/75 sm:text-lg">
            Everything we are looking forward to, held with gratitude and hope.
          </p>
        </section>

        <FutureDreams dreams={dreams} />

        <PageNavButtons previousPath="/reasons" nextPath="/final" previousLabel="100 Reasons" nextLabel="Final Surprise" />
      </div>
    </PageTransition>
  );
}