import { AnimatePresence } from "framer-motion";
import ResourceCard from "./ResourceCard";
import type { Resource } from "@/data/mockResources";

const ResourceGrid = ({ resources }: { resources: Resource[] }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <AnimatePresence mode="popLayout">
      {resources.map((item) => (
        <ResourceCard key={item.id} resource={item} />
      ))}
    </AnimatePresence>
    {resources.length === 0 && (
      <div className="col-span-full text-center py-20 text-muted-foreground">
        <p className="text-xl font-bold mb-2">No resources found</p>
        <p className="text-sm">Try adjusting your filters</p>
      </div>
    )}
  </div>
);

export default ResourceGrid;
