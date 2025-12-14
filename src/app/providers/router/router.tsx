import Layout from "@/app/layouts/Layout";
import { QuestionDetailPage } from "@/pages/question-detail-page";
import { QuestionsPage } from "@/pages/questions-page";
import { QuizPage } from "@/pages/quiz-page";
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
