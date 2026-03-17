export interface Resource {
  id: number;
  title: string;
  subject: string;
  class: string;
  type: string;
  uploadedBy: string;
  link: string;
}

// ===== ADMIN: Add resources here =====
export const RESOURCES: Resource[] = [
  // Example:
  // { id: 1, class: "FY BSc CS", subject: "Discrete Mathematics", title: "Unit 1 Notes", type: "PDF", uploadedBy: "Admin", link: "#" },
];

export const CLASSES = [
  { value: "FY BSc CS", label: "First Year BSc Computer Science" },
  { value: "SY BSc CS", label: "Second Year BSc Computer Science" },
  { value: "TY BSc CS", label: "Third Year BSc Computer Science" },
  { value: "FY MSc CS", label: "First Year MSc Computer Science" },
  { value: "SY MSc CS", label: "Second Year MSc Computer Science" },
];

export const SUBJECTS_BY_CLASS: Record<string, string[]> = {
  "FY BSc CS": ["Problem Solving Using C", "Digital Electronics", "Discrete Mathematics", "Communication Skills", "Environmental Studies"],
  "SY BSc CS": ["Data Structures", "Computer Organization", "Operating Systems", "Database Management Systems", "Software Engineering"],
  "TY BSc CS": ["Computer Networks", "Theory of Computation", "Compiler Design", "Artificial Intelligence", "Web Technology"],
  "FY MSc CS": ["Advanced Algorithms", "Machine Learning", "Advanced DBMS", "Research Methodology", "Python Programming"],
  "SY MSc CS": ["Deep Learning", "Cloud Computing", "Cyber Security", "Big Data Analytics", "Project & Dissertation"],
};

export const ALL_SUBJECTS = Object.values(SUBJECTS_BY_CLASS).flat();
