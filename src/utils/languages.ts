import type { ProgrammingLanguage } from "../types/languages";

export const PROGRAMMING_LANGUAGES: readonly ProgrammingLanguage[] = [
  { title: "html", color: "#E2680F", textColor: "white" },
  { title: "css", color: "#328AF1", textColor: "white" },
  { title: "javascript", color: "#F4EB13", textColor: "black" },
  { title: "react", color: "#2ED3E9", textColor: "black" },
  { title: "typescript", color: "#298EC6", textColor: "white" },
  { title: "node.js", color: "#599137", textColor: "white" },
  { title: "Python", color: "#FFD742", textColor: "black" },
  { title: "ruby", color: "#D02B2B", textColor: "white" },
  { title: "Assembly", color: "#2D519F", textColor: "white" },
] as const;
