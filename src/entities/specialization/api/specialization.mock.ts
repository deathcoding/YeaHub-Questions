import type {
  GetSpecializationsListResponse,
  Specialization,
} from "../model/specialization.types";

export const mockSpecializations: Specialization[] = [
  {
    id: 11,
    title: "React Frontend Developer",
    description:
      "React-разработчик — это инженер-программист или веб-разработчик, который занимается фронтендом или дизайном пользовательских интерфейсов, используя библиотеку React",
    imageSrc: null,
    createdAt: "2024-10-03T09:08:10.605Z",
    updatedAt: "2024-12-13T15:29:16.935Z",
  },
  {
    id: 25,
    title: "Ruby Backend Developer",
    description:
      "Программисты Ruby (Ruby Developers) создают сервисную часть сайтов, корпоративные приложения, высоконагруженное программное обеспечение на языке общего назначения Ruby",
    imageSrc: null,
    createdAt: "2024-12-13T15:32:58.103Z",
    updatedAt: "2024-12-13T15:32:58.103Z",
  },
  {
    id: 24,
    title: "PHP Backend Developer",
    description:
      "PHP-разработчик – это специалист, который пишет код на языке программирования, предназначенном для разработки сайтов и веб-приложений.",
    imageSrc: null,
    createdAt: "2024-12-13T15:31:35.357Z",
    updatedAt: "2024-12-13T15:31:35.357Z",
  },
  {
    id: 23,
    title: "Golang Backend Developer",
    description:
      "Бэкенд-разработчик на Golang специализируется на создании серверной части приложений, используя язык программирования Go, известный своей эффективностью и простотой синтаксиса",
    imageSrc: null,
    createdAt: "2024-12-12T08:19:06.225Z",
    updatedAt: "2024-12-12T08:19:06.225Z",
  },
  {
    id: 21,
    title: "Node.js Backend Developer",
    description:
      "Это специалист, который разрабатывает серверные приложения и сервисы с использованием платформы Node.js.",
    imageSrc: null,
    createdAt: "2024-12-07T19:06:16.704Z",
    updatedAt: "2025-03-08T16:37:48.063Z",
  },
];

export const mockSpecializationsList: GetSpecializationsListResponse = {
  data: mockSpecializations,
};
