import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FilterBar from "@/components/FilterBar";
import ResourceGrid from "@/components/ResourceGrid";
import AboutSection from "@/components/AboutSection";
import { RESOURCES } from "@/data/mockResources";

interface Filters {
  class: string;
  subject: string;
}

const Index = () => {
  const [view, setView] = useState("home");
  const [filters, setFilters] = useState<Filters>({ class: "", subject: "" });
  const [activeFilters, setActiveFilters] = useState<Filters>({ class: "", subject: "" });

  const filteredData = useMemo(() => {
    return RESOURCES.filter(
      (r) =>
        (!activeFilters.class || r.class === activeFilters.class) &&
        (!activeFilters.subject || r.subject === activeFilters.subject)
    );
  }, [activeFilters]);

  const handleSearch = () => setActiveFilters({ ...filters });

  const handleNavigate = (v: string) => {
    setView(v);
    if (v === "browse") {
      setFilters({ class: "", subject: "" });
      setActiveFilters({ class: "", subject: "" });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar currentView={view} onNavigate={handleNavigate} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {(view === "home" || view === "browse") && (
          <>
            {view === "home" && <HeroSection />}
            <FilterBar
              filters={filters}
              onFilterChange={setFilters}
              onSearch={handleSearch}
            />
            <ResourceGrid resources={filteredData} />
          </>
        )}
        {view === "about" && <AboutSection />}
      </main>
    </div>
  );
};

export default Index;
