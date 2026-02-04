import type { Specialization } from "@/entities/specialization/model/specialization.types";

export interface Skill {
  id: number;
  title: string;
  description: string;
  imageSrc: string | null;
  createdAt: string;
  updatedAt: string;
  specializations: Specialization[];
}

export type GetSkillsListResponse = {
  data: Skill[];
};

export type GetSkillsListParamsRequest = {
  specializations?: number[];
};
