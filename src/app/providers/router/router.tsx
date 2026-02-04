import Layout from "@/app/layouts/Layout";
import { QuestionsPage } from "@/pages/questions-page";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: QuestionsPage,
      },
      {
        path: "questions/:id",
        lazy: () =>
          import("@/pages/question-detail-page/ui/QuestionDetailPage"),
      },
      {
        path: "quiz",
        lazy: () => import("@/pages/quiz-page/ui/QuizPage"),
      },
    ],
  },
]);
