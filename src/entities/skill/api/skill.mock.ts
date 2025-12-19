import type { GetSkillsListResponse, Skill } from "../model/skill.types";

export const mockSkills: Skill[] = [
  {
    id: 1,
    title: "JavaScript",
    description: "Базовые и продвинутые концепции JavaScript.",
    imageSrc: null,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    specializations: [],
  },
  {
    id: 2,
    title: "TypeScript",
    description: "Статическая типизация поверх JavaScript.",
    imageSrc: null,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    specializations: [],
  },
];

export const mockSkillsList: GetSkillsListResponse = {
  data: mockSkills,
};
