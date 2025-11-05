import type { Skill } from "@/entities/skill/model/Skill.types";
import type { Specialization } from "@/entities/specialization/model/Specialization.types";

export interface Question {
  id: number;
  title: string;
  description: string;
  code: string | null;
  imageSrc: string | null;
  keywords: string[];
  longAnswer: string;
  shortAnswer: string;
  status: string;
  rate: number;
  complexity: number;
  createdAt: string;
  updatedAt: string;
  createdById: string;
  updatedById: string;
  createdBy: UserInfo;
  updatedBy: UserInfo;
  questionSpecializations: Specialization[];
  questionSkills: Skill[];
}

interface UserInfo {
  id: string;
  username: string;
}

export type GetQuestionsList = {
  data: Question[];
}

export type GetQuestionByIdResponse = Question;

export type GetQuestionByIdParamsRequest = {
  questionId: string
}