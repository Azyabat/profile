import React from "react";
import { RouteConfigComponentProps } from "react-router-config";

export type TRouteFunc = () => IRouteCustom[];

type TRouteComponent =
  | React.ComponentType
  | ((props: RouteConfigComponentProps) => JSX.Element);

export interface IRouteCustom {
  key?: string;
  path?: string;
  component?: TRouteComponent;
  exact?: boolean;
  routes?: IRouteCustom[];
  menuTitle?: string;
}
