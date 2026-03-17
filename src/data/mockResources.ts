export interface Resource {
  id: number;
  title: string;
  subject: string;
  class: string;
  sem: string;
  author: string;
  year: string;
  type: string;
  rating: number;
  description?: string;
}

export const MOCK_RESOURCES: Resource[] = [
  { id: 1, title: "Advanced OS Kernel Notes", subject: "OS", class: "TY", sem: "Sem 5", author: "Arjun Mehta", year: "2023", type: "PDF", rating: 4.8 },
  { id: 2, title: "DBMS Normalization Guide", subject: "DBMS", class: "SY", sem: "Sem 3", author: "Sanya Iyer", year: "2022", type: "Notes", rating: 4.9 },
  { id: 3, title: "Quantum Physics Formulas", subject: "Physics", class: "FY", sem: "Sem 2", author: "Rahul Verma", year: "2021", type: "PPT", rating: 4.5 },
  { id: 4, title: "Data Structures in C++", subject: "Maths", class: "SY", sem: "Sem 4", author: "Priya Das", year: "2023", type: "PDF", rating: 5.0 },
  { id: 5, title: "Discrete Mathematics Pro", subject: "Maths", class: "FY", sem: "Sem 1", author: "Amit Shah", year: "2022", type: "Notes", rating: 4.7 },
  { id: 6, title: "Network Security Lab Manual", subject: "OS", class: "Final Year", sem: "Sem 7", author: "Kevin Joy", year: "2023", type: "PDF", rating: 4.6 },
  { id: 7, title: "Linear Algebra Cheat Sheet", subject: "Maths", class: "FY", sem: "Sem 1", author: "Sneha Rao", year: "2024", type: "Notes", rating: 4.3 },
  { id: 8, title: "Project Management Handbook", subject: "Project Management", class: "Final Year", sem: "Sem 8", author: "Rohan Kulkarni", year: "2023", type: "PDF", rating: 4.9 },
];

export const SUBJECTS_BY_CLASS: Record<string, string[]> = {
  "FY": ["Maths", "Physics"],
  "SY": ["DBMS", "Maths"],
  "TY": ["OS", "DBMS"],
  "Final Year": ["OS", "Project Management"],
};

export const ALL_SUBJECTS = ["Maths", "Physics", "DBMS", "OS", "Project Management"];
