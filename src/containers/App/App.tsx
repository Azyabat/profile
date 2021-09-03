import React from "react";
import { Route, Switch } from "react-router-dom";
import { getRoutes } from "../../configs/routes";
import { IAppProps } from "./App.types";

class App extends React.Component<IAppProps> {
  public render() {
    return (
      <div className="fw_fh">
        <Switch>
          {getRoutes().map((route) => (
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
          ))}
        </Switch>
      </div>
    );
  }
}

export default App;
