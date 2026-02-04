export interface Specialization {
  id: number;
  title: string;
  description: string;
  imageSrc: string | null;
  createdAt: string;
  updatedAt: string;
}

export type GetSpecializationsListResponse = {
  data: Specialization[];
};

export type GetSpecializationsListParamsRequest = {
  page?: number;
  limit?: number;
  specializations?: number[];
};
