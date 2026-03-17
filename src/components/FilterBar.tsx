import { Search } from "lucide-react";
import { SUBJECTS_BY_CLASS, ALL_SUBJECTS, CLASSES } from "@/data/mockResources";

interface Filters {
  class: string;
  subject: string;
}

interface FilterBarProps {
  filters: Filters;
  onFilterChange: (filters: Filters) => void;
  onSearch: () => void;
}

const FilterBar = ({ filters, onFilterChange, onSearch }: FilterBarProps) => {
  const subjects = filters.class
    ? SUBJECTS_BY_CLASS[filters.class] || ALL_SUBJECTS
    : ALL_SUBJECTS;

  return (
    <section className="mb-16">
      <div className="p-2 rounded-3xl glass-surface flex flex-col md:flex-row gap-2">
        <select
          className="bg-transparent p-4 outline-none border-b md:border-b-0 md:border-r border-white/10 flex-1 text-foreground"
          value={filters.class}
          onChange={(e) =>
            onFilterChange({ ...filters, class: e.target.value, subject: "" })
          }
        >
          <option value="" className="bg-card">Select Class</option>
          {CLASSES.map((c) => (
            <option key={c.value} value={c.value} className="bg-card">{c.label}</option>
          ))}
        </select>

        <select
          className="bg-transparent p-4 outline-none border-b md:border-b-0 md:border-r border-white/10 flex-1 text-foreground"
          value={filters.subject}
          onChange={(e) =>
            onFilterChange({ ...filters, subject: e.target.value })
          }
        >
          <option value="" className="bg-card">Select Subject</option>
          {subjects.map((s) => (
            <option key={s} value={s} className="bg-card">{s}</option>
          ))}
        </select>

        <button
          onClick={onSearch}
          className="bg-secondary hover:brightness-110 text-secondary-foreground font-bold px-8 py-4 rounded-2xl transition-all flex items-center justify-center gap-2"
        >
          <Search className="w-5 h-5" /> Search
        </button>
      </div>
    </section>
  );
};

export default FilterBar;
