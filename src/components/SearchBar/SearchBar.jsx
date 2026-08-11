import { FiSearch } from 'react-icons/fi';

export default function SearchBar({ query, selectedCategory, categories, onQueryChange, onCategoryChange }) {
  return (
    <section className="glass-panel rounded-[1.75rem] p-4" aria-label="Search and filter reasons">
      <div className="grid gap-3 lg:grid-cols-[1fr_auto] lg:items-center">
        <label className="relative block">
          <span className="sr-only">Search reasons</span>
          <FiSearch className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#9f5274]" aria-hidden="true" />
          <input
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            className="min-h-12 w-full rounded-full border border-white/70 bg-white/72 py-3 pl-11 pr-4 text-sm text-[#421a2d] outline-none transition placeholder:text-[#9f7b8c] focus:border-[#be185d] focus:ring-2 focus:ring-[#be185d]/20"
            placeholder="Search a reason..."
          />
        </label>

        <div className="flex gap-2 overflow-x-auto pb-1 lg:max-w-[34rem]" role="list" aria-label="Reason categories">
          {categories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => onCategoryChange(category)}
                className={`min-h-10 shrink-0 rounded-full border px-4 text-xs font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#be185d] ${
                  isActive
                    ? 'border-[#be185d] bg-[#be185d] text-white shadow-[0_12px_30px_rgba(190,24,93,0.22)]'
                    : 'border-white/70 bg-white/62 text-[#6b4458] hover:bg-white'
                }`}
                aria-pressed={isActive}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
