import { IRouteCustom } from "../../configs/routes.types";

export interface IMainContainerProps extends IRouteCustom {
  isShowMenu?: boolean;
  route?: IRouteCustom[];
}
