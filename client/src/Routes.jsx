import Layout from "./Layout.jsx";
import EducationPage from "./pages/EducationPage.jsx";
import AboutMePage from "./pages/AboutMePage.jsx";
import ResumePage from "./pages/ResumePage.jsx";
import PassionsPage from "./pages/PassionsPage.jsx";

export const routerParams = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/aboutme",
        element: <AboutMePage />,
      },
      {
        path: "/edu",
        element: <EducationPage />,
      },
      {
        path: "/resume",
        element: <ResumePage />,
      },
      {
        path: "/passions",
        element: <PassionsPage />,
      },
    ],
  },
];
