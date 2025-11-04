import type { Specialization } from "@/entities/specialization/model/Specialization.types";

export interface Skill {
  id: number;
  title: string;
  description: string;
  imageSrc: string | null;
  createdAt: string;
  updatedAt: string;
  specializations: Specialization[];
}
