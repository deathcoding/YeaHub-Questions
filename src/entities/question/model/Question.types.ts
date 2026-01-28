import type { Skill } from "@/entities/skill/model/skill.types";
import type { Specialization } from "@/entities/specialization/model/specialization.types";

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
  total: number;
  limit: number;
};

export type GetQuestionByIdResponse = Question;

export type GetQuestionByIdParamsRequest = {
  questionId: string;
};

export type GetQuestionsListParamsRequest = {
  page?: number;
  limit?: number;
  keywords?: string | null;
  specialization?: number | number[];
  skills?: number | number[];
  rate: number | number[];
  complexity?: number | number[];
};
