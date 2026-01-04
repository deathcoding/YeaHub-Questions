import type { GetSkillsListResponse, Skill } from "../model/skill.types";

export const mockSkills: Skill[] = [
  {
    id: 6,
    title: "React",
    description:
      "React - библиотека JavaScript для создания пользовательских интерфейсов. Поддерживается Facebook и сообществом разработчиков и компаний.",
    imageSrc:
      "https://e5e684b1-4a6a-4be5-b7ee-b2b678239d61.selstorage.ru/skill/dc42634d-468b-427d-9f7a-ea6d501911c5",
    createdAt: "2024-06-04T13:40:16.610Z",
    updatedAt: "2025-01-18T19:39:52.495Z",
    specializations: [
      {
        id: 11,
        title: "React Frontend Developer",
        description:
          "React-разработчик — это инженер-программист или веб-разработчик, который занимается фронтендом или дизайном пользовательских интерфейсов, используя библиотеку React",
        imageSrc: null,
        createdAt: "2024-10-03T09:08:10.605Z",
        updatedAt: "2024-12-13T15:29:16.935Z",
      },
    ],
  },
  {
    id: 15,
    title: "React Router",
    description:
      "React Router — это библиотека для навигации между разными частями веб-приложения, созданного на React.",
    imageSrc:
      "https://e5e684b1-4a6a-4be5-b7ee-b2b678239d61.selstorage.ru/skill/7f2921be-d268-4153-965e-70f93317d061",
    createdAt: "2024-06-04T13:40:16.610Z",
    updatedAt: "2025-01-18T19:57:40.588Z",
    specializations: [
      {
        id: 11,
        title: "React Frontend Developer",
        description:
          "React-разработчик — это инженер-программист или веб-разработчик, который занимается фронтендом или дизайном пользовательских интерфейсов, используя библиотеку React",
        imageSrc: null,
        createdAt: "2024-10-03T09:08:10.605Z",
        updatedAt: "2024-12-13T15:29:16.935Z",
      },
    ],
  },
  {
    id: 28,
    title: "CSS",
    description:
      "Стилейзация интерфейсов, включая адаптивную верстку и оптимизацию для различных устройств с использованием Flexbox и Grid.",
    imageSrc:
      "https://e5e684b1-4a6a-4be5-b7ee-b2b678239d61.selstorage.ru/skill/62c5d6d7-8484-4cfd-8ecf-af757af98c01",
    createdAt: "2024-10-06T06:32:44.139Z",
    updatedAt: "2025-10-15T10:01:27.971Z",
    specializations: [
      {
        id: 11,
        title: "React Frontend Developer",
        description:
          "React-разработчик — это инженер-программист или веб-разработчик, который занимается фронтендом или дизайном пользовательских интерфейсов, используя библиотеку React",
        imageSrc: null,
        createdAt: "2024-10-03T09:08:10.605Z",
        updatedAt: "2024-12-13T15:29:16.935Z",
      },
    ],
  },
  {
    id: 27,
    title: "HTMl",
    description:
      "Разметка веб-страниц с использованием семантических тегов для улучшения SEO и доступности.",
    imageSrc:
      "https://e5e684b1-4a6a-4be5-b7ee-b2b678239d61.selstorage.ru/skill/6b8a29bc-ce64-4282-be53-d4e57ffdfad9",
    createdAt: "2024-10-06T06:32:23.656Z",
    updatedAt: "2025-04-18T08:18:05.193Z",
    specializations: [],
  },
  {
    id: 2,
    title: "JavaScript",
    description:
      "JavaScript - популярный язык программирования, в основном используемый для создания динамических и интерактивных веб-страниц. Он необходим для разработки интерфейсов веб-приложений.",
    imageSrc:
      "https://e5e684b1-4a6a-4be5-b7ee-b2b678239d61.selstorage.ru/skill/3ded3210-32fa-4063-9b8f-a5e8f353a1c4",
    createdAt: "2024-06-04T13:40:16.610Z",
    updatedAt: "2025-03-10T17:16:46.190Z",
    specializations: [],
  },
];

export const mockSkillsList: GetSkillsListResponse = {
  data: mockSkills,
};
