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
  // FY BSc CS — Problem Solving Using C
  { id: 1, class: "FY BSc CS", subject: "Problem Solving Using C", title: "C Programming Unit 1 Notes", type: "PDF", uploadedBy: "Rahul Sharma", link: "#" },
  { id: 2, class: "FY BSc CS", subject: "Problem Solving Using C", title: "C Programs Practice Set", type: "DOC", uploadedBy: "Priya Mehta", link: "#" },
  { id: 3, class: "FY BSc CS", subject: "Problem Solving Using C", title: "C Language PYQs 2022", type: "PDF", uploadedBy: "Amit Kulkarni", link: "#" },
  // FY BSc CS — Digital Electronics
  { id: 4, class: "FY BSc CS", subject: "Digital Electronics", title: "Digital Electronics Complete Notes", type: "PDF", uploadedBy: "Sneha Joshi", link: "#" },
  { id: 5, class: "FY BSc CS", subject: "Digital Electronics", title: "Logic Gates & Boolean Algebra", type: "PDF", uploadedBy: "Rohan Desai", link: "#" },
  { id: 6, class: "FY BSc CS", subject: "Digital Electronics", title: "DE Important Questions Bank", type: "DOC", uploadedBy: "Anjali Patil", link: "#" },
  // FY BSc CS — Discrete Mathematics
  { id: 7, class: "FY BSc CS", subject: "Discrete Mathematics", title: "Discrete Maths Unit 2 & 3 Notes", type: "PDF", uploadedBy: "Karan Singh", link: "#" },
  { id: 8, class: "FY BSc CS", subject: "Discrete Mathematics", title: "Set Theory & Relations Cheatsheet", type: "PDF", uploadedBy: "Neha Verma", link: "#" },
  { id: 9, class: "FY BSc CS", subject: "Discrete Mathematics", title: "Discrete Maths Solved PYQs", type: "PDF", uploadedBy: "Rahul Sharma", link: "#" },
  // FY BSc CS — Communication Skills
  { id: 10, class: "FY BSc CS", subject: "Communication Skills", title: "Communication Skills Full Notes", type: "DOC", uploadedBy: "Pooja Nair", link: "#" },
  { id: 11, class: "FY BSc CS", subject: "Communication Skills", title: "Letter & Email Writing Samples", type: "PDF", uploadedBy: "Sneha Joshi", link: "#" },
  // FY BSc CS — Environmental Studies
  { id: 12, class: "FY BSc CS", subject: "Environmental Studies", title: "EVS Complete Notes Sem 1", type: "PDF", uploadedBy: "Amit Kulkarni", link: "#" },
  { id: 13, class: "FY BSc CS", subject: "Environmental Studies", title: "EVS Important Q&A", type: "PDF", uploadedBy: "Anjali Patil", link: "#" },
  { id: 14, class: "FY BSc CS", subject: "Environmental Studies", title: "EVS Unit 4 Ecosystem Notes", type: "DOC", uploadedBy: "Rohan Desai", link: "#" },
  // SY BSc CS — Data Structures
  { id: 15, class: "SY BSc CS", subject: "Data Structures", title: "DSA Complete Handwritten Notes", type: "PDF", uploadedBy: "Neha Verma", link: "#" },
  { id: 16, class: "SY BSc CS", subject: "Data Structures", title: "DSA Programs in C++", type: "DOC", uploadedBy: "Karan Singh", link: "#" },
  { id: 17, class: "SY BSc CS", subject: "Data Structures", title: "DSA PYQs with Solutions", type: "PDF", uploadedBy: "Rahul Sharma", link: "#" },
  // SY BSc CS — Computer Organization
  { id: 18, class: "SY BSc CS", subject: "Computer Organization", title: "CO Unit 1-3 Notes", type: "PDF", uploadedBy: "Priya Mehta", link: "#" },
  { id: 19, class: "SY BSc CS", subject: "Computer Organization", title: "Computer Organization PYQs", type: "PDF", uploadedBy: "Rohan Desai", link: "#" },
  { id: 20, class: "SY BSc CS", subject: "Computer Organization", title: "CO Memory & Pipeline Notes", type: "DOC", uploadedBy: "Sneha Joshi", link: "#" },
  // SY BSc CS — Operating Systems
  { id: 21, class: "SY BSc CS", subject: "Operating Systems", title: "OS Complete Notes", type: "PDF", uploadedBy: "Anjali Patil", link: "#" },
  { id: 22, class: "SY BSc CS", subject: "Operating Systems", title: "OS Process Scheduling Cheatsheet", type: "PDF", uploadedBy: "Amit Kulkarni", link: "#" },
  { id: 23, class: "SY BSc CS", subject: "Operating Systems", title: "OS PYQs 2021-2023", type: "PDF", uploadedBy: "Karan Singh", link: "#" },
  // SY BSc CS — Database Management Systems
  { id: 24, class: "SY BSc CS", subject: "Database Management Systems", title: "DBMS Full Notes with ER Diagrams", type: "PDF", uploadedBy: "Neha Verma", link: "#" },
  { id: 25, class: "SY BSc CS", subject: "Database Management Systems", title: "SQL Query Practice Sheet", type: "DOC", uploadedBy: "Pooja Nair", link: "#" },
  { id: 26, class: "SY BSc CS", subject: "Database Management Systems", title: "DBMS PYQs & Important Topics", type: "PDF", uploadedBy: "Rahul Sharma", link: "#" },
  // SY BSc CS — Software Engineering
  { id: 27, class: "SY BSc CS", subject: "Software Engineering", title: "SE Unit 1-4 Complete Notes", type: "PDF", uploadedBy: "Rohan Desai", link: "#" },
  { id: 28, class: "SY BSc CS", subject: "Software Engineering", title: "SE SDLC Models Summary", type: "PDF", uploadedBy: "Priya Mehta", link: "#" },
  { id: 29, class: "SY BSc CS", subject: "Software Engineering", title: "SE Assignment & Case Studies", type: "DOC", uploadedBy: "Sneha Joshi", link: "#" },
  // TY BSc CS — Computer Networks
  { id: 30, class: "TY BSc CS", subject: "Computer Networks", title: "CN Complete Notes OSI Model", type: "PDF", uploadedBy: "Anjali Patil", link: "#" },
  { id: 31, class: "TY BSc CS", subject: "Computer Networks", title: "CN Protocols & Subnetting Guide", type: "PDF", uploadedBy: "Karan Singh", link: "#" },
  { id: 32, class: "TY BSc CS", subject: "Computer Networks", title: "CN PYQs 2022-2023", type: "PDF", uploadedBy: "Amit Kulkarni", link: "#" },
  // TY BSc CS — Theory of Computation
  { id: 33, class: "TY BSc CS", subject: "Theory of Computation", title: "TOC Full Notes DFA NFA", type: "PDF", uploadedBy: "Neha Verma", link: "#" },
  { id: 34, class: "TY BSc CS", subject: "Theory of Computation", title: "TOC PYQs with Solutions", type: "PDF", uploadedBy: "Rahul Sharma", link: "#" },
  { id: 35, class: "TY BSc CS", subject: "Theory of Computation", title: "TOC Turing Machines Notes", type: "DOC", uploadedBy: "Pooja Nair", link: "#" },
  // TY BSc CS — Compiler Design
  { id: 36, class: "TY BSc CS", subject: "Compiler Design", title: "Compiler Design Unit 1-3 Notes", type: "PDF", uploadedBy: "Rohan Desai", link: "#" },
  { id: 37, class: "TY BSc CS", subject: "Compiler Design", title: "Parsing Techniques Cheatsheet", type: "PDF", uploadedBy: "Priya Mehta", link: "#" },
  { id: 38, class: "TY BSc CS", subject: "Compiler Design", title: "CD Important Questions Bank", type: "DOC", uploadedBy: "Sneha Joshi", link: "#" },
  // TY BSc CS — Artificial Intelligence
  { id: 39, class: "TY BSc CS", subject: "Artificial Intelligence", title: "AI Complete Notes Search Algorithms", type: "PDF", uploadedBy: "Karan Singh", link: "#" },
  { id: 40, class: "TY BSc CS", subject: "Artificial Intelligence", title: "AI Heuristics & Expert Systems", type: "PDF", uploadedBy: "Anjali Patil", link: "#" },
  { id: 41, class: "TY BSc CS", subject: "Artificial Intelligence", title: "AI PYQs 2022-2023", type: "PDF", uploadedBy: "Amit Kulkarni", link: "#" },
  // TY BSc CS — Web Technology
  { id: 42, class: "TY BSc CS", subject: "Web Technology", title: "Web Tech HTML CSS JS Notes", type: "PDF", uploadedBy: "Neha Verma", link: "#" },
  { id: 43, class: "TY BSc CS", subject: "Web Technology", title: "PHP & MySQL Mini Project Guide", type: "DOC", uploadedBy: "Rahul Sharma", link: "#" },
  { id: 44, class: "TY BSc CS", subject: "Web Technology", title: "Web Tech PYQs with Answers", type: "PDF", uploadedBy: "Pooja Nair", link: "#" },
  // FY MSc CS — Advanced Algorithms
  { id: 45, class: "FY MSc CS", subject: "Advanced Algorithms", title: "Advanced Algorithms Complete Notes", type: "PDF", uploadedBy: "Vikram Rao", link: "#" },
  { id: 46, class: "FY MSc CS", subject: "Advanced Algorithms", title: "Algorithm Design Techniques Guide", type: "PDF", uploadedBy: "Meera Iyer", link: "#" },
  { id: 47, class: "FY MSc CS", subject: "Advanced Algorithms", title: "AA PYQs & Solutions", type: "PDF", uploadedBy: "Arjun Nair", link: "#" },
  // FY MSc CS — Machine Learning
  { id: 48, class: "FY MSc CS", subject: "Machine Learning", title: "ML Unit 1-4 Notes Supervised Learning", type: "PDF", uploadedBy: "Meera Iyer", link: "#" },
  { id: 49, class: "FY MSc CS", subject: "Machine Learning", title: "ML Algorithms Cheatsheet", type: "PDF", uploadedBy: "Vikram Rao", link: "#" },
  { id: 50, class: "FY MSc CS", subject: "Machine Learning", title: "ML Python Lab Programs", type: "DOC", uploadedBy: "Siddharth Jain", link: "#" },
  // FY MSc CS — Advanced DBMS
  { id: 51, class: "FY MSc CS", subject: "Advanced DBMS", title: "Advanced DBMS Transactions Notes", type: "PDF", uploadedBy: "Arjun Nair", link: "#" },
  { id: 52, class: "FY MSc CS", subject: "Advanced DBMS", title: "NoSQL & Distributed DB Notes", type: "PDF", uploadedBy: "Meera Iyer", link: "#" },
  { id: 53, class: "FY MSc CS", subject: "Advanced DBMS", title: "ADBMS PYQs 2023-2024", type: "PDF", uploadedBy: "Vikram Rao", link: "#" },
  // FY MSc CS — Research Methodology
  { id: 54, class: "FY MSc CS", subject: "Research Methodology", title: "Research Methodology Full Notes", type: "DOC", uploadedBy: "Siddharth Jain", link: "#" },
  { id: 55, class: "FY MSc CS", subject: "Research Methodology", title: "Research Paper Writing Guide", type: "PDF", uploadedBy: "Arjun Nair", link: "#" },
  // FY MSc CS — Python Programming
  { id: 56, class: "FY MSc CS", subject: "Python Programming", title: "Python Complete Notes with Examples", type: "PDF", uploadedBy: "Meera Iyer", link: "#" },
  { id: 57, class: "FY MSc CS", subject: "Python Programming", title: "Python OOP & Libraries Guide", type: "DOC", uploadedBy: "Vikram Rao", link: "#" },
  { id: 58, class: "FY MSc CS", subject: "Python Programming", title: "Python Lab Programs Collection", type: "DOC", uploadedBy: "Siddharth Jain", link: "#" },
  // SY MSc CS — Deep Learning
  { id: 59, class: "SY MSc CS", subject: "Deep Learning", title: "Deep Learning CNN RNN Notes", type: "PDF", uploadedBy: "Arjun Nair", link: "#" },
  { id: 60, class: "SY MSc CS", subject: "Deep Learning", title: "DL Frameworks TensorFlow Guide", type: "DOC", uploadedBy: "Meera Iyer", link: "#" },
  { id: 61, class: "SY MSc CS", subject: "Deep Learning", title: "Deep Learning PYQs", type: "PDF", uploadedBy: "Vikram Rao", link: "#" },
  // SY MSc CS — Cloud Computing
  { id: 62, class: "SY MSc CS", subject: "Cloud Computing", title: "Cloud Computing AWS Azure Notes", type: "PDF", uploadedBy: "Siddharth Jain", link: "#" },
  { id: 63, class: "SY MSc CS", subject: "Cloud Computing", title: "Cloud Deployment Models Guide", type: "PDF", uploadedBy: "Arjun Nair", link: "#" },
  { id: 64, class: "SY MSc CS", subject: "Cloud Computing", title: "CC Important Questions Bank", type: "DOC", uploadedBy: "Meera Iyer", link: "#" },
  // SY MSc CS — Cyber Security
  { id: 65, class: "SY MSc CS", subject: "Cyber Security", title: "Cyber Security Full Notes", type: "PDF", uploadedBy: "Vikram Rao", link: "#" },
  { id: 66, class: "SY MSc CS", subject: "Cyber Security", title: "Cryptography & Network Security", type: "PDF", uploadedBy: "Siddharth Jain", link: "#" },
  { id: 67, class: "SY MSc CS", subject: "Cyber Security", title: "CS Ethical Hacking Overview Notes", type: "DOC", uploadedBy: "Arjun Nair", link: "#" },
  // SY MSc CS — Big Data Analytics
  { id: 68, class: "SY MSc CS", subject: "Big Data Analytics", title: "Big Data Hadoop & Spark Notes", type: "PDF", uploadedBy: "Meera Iyer", link: "#" },
  { id: 69, class: "SY MSc CS", subject: "Big Data Analytics", title: "BDA MapReduce Concepts Guide", type: "PDF", uploadedBy: "Vikram Rao", link: "#" },
  { id: 70, class: "SY MSc CS", subject: "Big Data Analytics", title: "Big Data PYQs & Case Studies", type: "DOC", uploadedBy: "Siddharth Jain", link: "#" },
  // SY MSc CS — Project & Dissertation
  { id: 71, class: "SY MSc CS", subject: "Project & Dissertation", title: "Project Report Format & Template", type: "DOC", uploadedBy: "Arjun Nair", link: "#" },
  { id: 72, class: "SY MSc CS", subject: "Project & Dissertation", title: "Dissertation Writing Guidelines", type: "PDF", uploadedBy: "Meera Iyer", link: "#" },
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
