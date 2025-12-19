import type { GetQuestionsList, Question } from "../model/question.types";

export const mockQuestions: Question[] = [
  {
    id: 1,
    title: "Что такое замыкание в JavaScript?",
    description:
      "Объясните, что такое замыкание, и приведите пример практического использования.",
    code: "function makeCounter() {\n  let count = 0;\n  return function () {\n    return ++count;\n  };\n}",
    imageSrc: null,
    keywords: ["javascript", "closure", "functions"],
    longAnswer:
      "Замыкание — это функция вместе с лексическим окружением, в котором она была создана. Оно позволяет функции иметь доступ к переменным внешней функции даже после того, как внешняя функция завершила выполнение.",
    shortAnswer: "Функция, запоминающая своё лексическое окружение.",
    status: "published",
    rate: 5,
    complexity: 2,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    createdById: "1",
    updatedById: "1",
    createdBy: {
      id: "1",
      username: "admin",
    },
    updatedBy: {
      id: "1",
      username: "admin",
    },
    questionSpecializations: [],
    questionSkills: [],
  },
  {
    id: 2,
    title: "Что такое REST и его основные принципы?",
    description:
      "Дайте определение REST и перечислите ключевые ограничения архитектурного стиля.",
    code: null,
    imageSrc: null,
    keywords: ["rest", "api", "http"],
    longAnswer:
      "REST — это архитектурный стиль, основанный на HTTP. Основные принципы включают клиент-серверную архитектуру, отсутствие состояния (stateless), кешируемость, единообразие интерфейса и разделение на слои.",
    shortAnswer: "Архитектурный стиль для построения веб-сервисов поверх HTTP.",
    status: "published",
    rate: 4,
    complexity: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    createdById: "1",
    updatedById: "1",
    createdBy: {
      id: "1",
      username: "admin",
    },
    updatedBy: {
      id: "1",
      username: "admin",
    },
    questionSpecializations: [],
    questionSkills: [],
  },
];

export const mockQuestionsList: GetQuestionsList = {
  data: mockQuestions,
};
