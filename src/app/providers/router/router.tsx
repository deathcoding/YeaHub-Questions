import Layout from "@/app/layouts/Layout";
import { QuestionDetailPage } from "@/pages/question-detail";
import { QuestionsPage } from "@/pages/questions-list";
import { QuizPage } from "@/pages/quiz";
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
        Component: QuestionDetailPage,
      },
      {
        path: "quiz",
        Component: QuizPage,
      },
    ],
  },
]);
