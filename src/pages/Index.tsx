import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FilterBar from "@/components/FilterBar";
import ResourceGrid from "@/components/ResourceGrid";
import UploadPage from "@/components/UploadPage";
import AboutSection from "@/components/AboutSection";
import { MOCK_RESOURCES } from "@/data/mockResources";

interface Filters {
  class: string;
  subject: string;
  sem: string;
}

const Index = () => {
  const [view, setView] = useState("home");
  const [filters, setFilters] = useState<Filters>({ class: "", subject: "", sem: "" });
  const [activeFilters, setActiveFilters] = useState<Filters>({ class: "", subject: "", sem: "" });

  const filteredData = useMemo(() => {
    return MOCK_RESOURCES.filter(
      (r) =>
        (!activeFilters.class || r.class === activeFilters.class) &&
        (!activeFilters.subject || r.subject === activeFilters.subject) &&
        (!activeFilters.sem || r.sem === activeFilters.sem)
    );
  }, [activeFilters]);

  const handleSearch = () => setActiveFilters({ ...filters });

  const handleNavigate = (v: string) => {
    setView(v);
    if (v === "browse") {
      setFilters({ class: "", subject: "", sem: "" });
      setActiveFilters({ class: "", subject: "", sem: "" });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar currentView={view} onNavigate={handleNavigate} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {(view === "home" || view === "browse") && (
          <>
            {view === "home" && (
              <HeroSection onUploadClick={() => setView("upload")} />
            )}
            <FilterBar
              filters={filters}
              onFilterChange={setFilters}
              onSearch={handleSearch}
            />
            <ResourceGrid resources={filteredData} />
          </>
        )}
        {view === "upload" && <UploadPage onBack={() => setView("home")} />}
        {view === "about" && <AboutSection />}
      </main>
    </div>
  );
};

export default Index;
