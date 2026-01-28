import type { Skill } from "@/entities/skill/model/skill.types";

interface QuestionInfoProps {
  complexity: number;
  rate: number;
  skills: Skill[];
  keywords: string[];
}


export function QuestionInfo({complexity, rate, skills, keywords}: QuestionInfoProps) {
  return (
    <div>
      
    </div>
  )
}
