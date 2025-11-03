import Layout from "@/app/layouts/Layout";
import { QuestionDetail } from "@/pages/question-detail";
import { QuestionList } from "@/pages/questions-list";
import { QuizPage } from "@/pages/quiz";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: QuestionList,
      },
      {
        path: "questions/:id",
        Component: QuestionDetail,
      },
      {
        path: "quiz",
        Component: QuizPage,
      },
    ],
  },
]);
