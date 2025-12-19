import type {
  GetSpecializationsListResponse,
  Specialization,
} from "../model/specialization.types";

export const mockSpecializations: Specialization[] = [
  {
    id: 1,
    title: "Frontend",
    description: "Разработка пользовательских интерфейсов.",
    imageSrc: null,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 2,
    title: "Backend",
    description: "Серверная разработка и API.",
    imageSrc: null,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

export const mockSpecializationsList: GetSpecializationsListResponse = {
  data: mockSpecializations,
};
