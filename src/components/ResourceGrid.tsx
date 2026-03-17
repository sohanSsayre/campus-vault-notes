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
      <div className="col-span-full text-center py-20">
        <p className="text-xl font-bold mb-3 text-muted-foreground">No resources found</p>
        <p className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-[hsl(263,70%,58%)] to-[hsl(187,80%,43%)]">
          Resources coming soon for this subject 🚀
        </p>
      </div>
    )}
  </div>
);

export default ResourceGrid;
