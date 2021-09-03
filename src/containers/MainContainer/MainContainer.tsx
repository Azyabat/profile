import { PureComponent } from "react";
import { Route, Switch } from "react-router-dom";
import { IMainContainerProps } from "./MainContainer.types";
import { LoadingOutlined } from "@ant-design/icons";
import HeaderMenu from "../../components/HeaderMenu/HeaderMenu";
import { IRouteCustom } from "../../configs/routes.types";

class MainContainer extends PureComponent<IMainContainerProps> {
  private getRouteList(routes: IRouteCustom[]) {
    const routeList = routes
      .filter((route) => !!route.path === true)
      .map((route: IRouteCustom) => {
        return (
          <Route
            key={route.key}
            exact={route.exact}
            path={route.path}
            render={(props) => {
              return (
                route.component && (
                  <route.component {...props} route={route.routes} />
                )
              );
            }}
          />
        );
      });
    return routeList;
  }

  public render() {
    const { route, isShowMenu } = this.props;
    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

    if (!route) {
      return antIcon;
    }

    if (route) {
      console.log();
      return (
        <div className="fw_fh">
          {isShowMenu ? <HeaderMenu routes={route} /> : null}
          <Switch>{this.getRouteList(route)}</Switch>
        </div>
      );
    }
  }
}

export default MainContainer;
