import { Redirect } from "react-router-dom";
import { Component404 } from "../components/404/Component404";
import StartPage from "../components/StartPage/StartPage";
import TodoList from "../components/TodoList/TodoList";
import MainContainer from "../containers/MainContainer/MainContainer";
import StartPageContainer from "../containers/StartPageContainer/StartPageContainer";
import {
  key404,
  projectsKey,
  startPageContainerKey,
  startPageKey,
  todoKey,
} from "../utils/keys";
import { projectsPath, rootPath, toDoPath } from "../utils/path";
import { TRouteFunc } from "./routes.types";

const error404 = {
  key: key404,
  component: Component404,
};

export const getRoutes: TRouteFunc = () => {
  return [
    {
      key: startPageContainerKey,
      path: rootPath,
      component: StartPageContainer,
      routes: [
        {
          key: startPageKey,
          path: rootPath,
          exact: true,
          menuTitle: "Главная",
          component: StartPage,
        },
        {
          key: projectsKey,
          path: projectsPath,
          menuTitle: "Проекты",
          component: MainContainer,
          routes: [
            {
              menuTitle: "Todo",
              key: todoKey,
              path: toDoPath,
              exact: true,
              component: TodoList,
            },
            {
              key: projectsKey,
              path: projectsPath,
              exact: true,
              component: () => {
                return <Redirect to={toDoPath} />;
              },
            },
            error404,
          ],
        },
        error404,
      ],
    },
  ];
};
